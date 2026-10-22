---
id: lem-reynolds-operator-and-invariant-subring-properties
kind: lemma
title: The Reynolds operator and the ideal theory of the invariant subring
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, def-rational-action-on-affine-variety, thm-coordinate-ring-of-affine-action-is-locally-finite, def-classical-affine-coordinate-ring, def-noetherian-ring, thm-noetherian-ring-ideal-characterisations, def-graded-ring-and-graded-module, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "V. L. Popov and E. B. Vinberg, Invariant Theory, in Algebraic Geometry IV, Encyclopaedia of Mathematical Sciences 55, Springer 1994"
      url: "https://www.mathnet.ru/php/getFT.phtml?jrnid=intf&paperid=158&what=fullt&option_lang=rus"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
complex reductive affine algebraic group and let $X$ be an affine algebraic
set with an algebraic $G$-action ([[def-rational-action-on-affine-variety]]);
write $A=\mathbb C[X]$ and let $R_X:A\to A^G$ be the Reynolds operator of
[[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]].
Then:

(a) $R_X$ is $A^G$-linear, idempotent, and its image is exactly $A^G$;

(b) for every ideal $I\subseteq A^G$ one has $R_X(IA)=I$, and consequently the
map $I\mapsto IA$ is injective on ideals of $A^G$ and $A^G$ is Noetherian
whenever $A$ is Noetherian
([[def-noetherian-ring]]);

(c) if $\varphi:A\to B$ is a surjective $G$-equivariant homomorphism of
rational $G$-algebras, then $\varphi(A^G)=B^G$;

(d) if $A$ carries a $G$-stable grading and an ideal is homogeneous, the same
conclusions hold in the graded subalgebra of invariants
([[def-graded-ring-and-graded-module]]).

## Facts & Assumptions

**Given:** AC; a complex reductive affine algebraic group $G$; an affine algebraic set $X$ with algebraic $G$-action, $A=\mathbb C[X]$, and the Reynolds operator $R_X:A\to A^G$ of the bridge theorem.

[F1] *Properties of the Reynolds operator.* The projection $R_A:A\to A^G$ is $G$-equivariant, restricts to the identity of $A^G$, is natural under morphisms of rational $G$-modules and is $A^G$-linear: $R_A(ab)=a\,R_A(b)$ for $a\in A^G$, $b\in A$ ([[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]]).

[F2] *The coordinate ring is a rational module.* If $G$ acts algebraically on an affine algebraic set $X$, then $\mathbb C[X]$ with $(gf)(x)=f(g^{-1}x)$ is a rational $G$-module on which every finite set of functions lies in a finite-dimensional stable subspace, and the action preserves multiplication and the unit ([[thm-coordinate-ring-of-affine-action-is-locally-finite]], [[def-rational-action-on-affine-variety]]).

[F3] *Noetherian rings.* A ring is Noetherian when its left regular module is Noetherian ([[def-noetherian-ring]]). The ideal-level ascending chain condition used below is the equivalence in [F5].

[F4] *Graded rings.* A nonnegatively graded ring is a commutative ring $S=\bigoplus_{n\ge0}S_n$ with $S_nS_m\subseteq S_{n+m}$ ([[def-graded-ring-and-graded-module]]).

[F5] *Ascending chain condition.* A commutative ring is Noetherian if and only if every ascending chain of ideals stabilises ([[thm-noetherian-ring-ideal-characterisations]], dependent choice included in AC).

## Proof

**Proof technique:** direct.

1.1 Part (a): [F1] gives $R_X(ab)=aR_X(b)$ for $a\in A^G$, $b\in A$, so $R_X$ is $A^G$-linear; it is idempotent because it restricts to the identity on $A^G$ and its values lie in $A^G$, so $R_X(R_Xb)=R_Xb$; and its image is exactly $A^G$, since every invariant is fixed and every value is invariant. [F1, F2]

2.1 Part (b): let $I\subseteq A^G$ be an ideal. The extension $IA$ is $G$-stable, so by [F1] and step 1.1, $R_X(IA)=IR_X(A)=IA^G=I$. If $IA=JA$ for ideals of $A^G$, then $I=R_X(IA)=R_X(JA)=J$, so $I\mapsto IA$ is injective. An ascending chain $I_1\subseteq I_2\subseteq\dots$ of ideals of $A^G$ gives the ascending chain $I_nA$ of ideals of $A$, which stabilizes when $A$ is Noetherian by the ascending chain condition; applying $R_X$ to a stable equality and using $R_X(I_nA)=I_n$ gives $I_n=R_X(I_nA)=R_X(I_{n+1}A)=I_{n+1}$, so $A^G$ is Noetherian. [F1, F3, F5, step 1.1]

2.2 Part (c): let $\varphi:A\to B$ be a surjective $G$-equivariant homomorphism of rational $G$-algebras. Clearly $\varphi(A^G)\subseteq B^G$. Conversely, if $b\in B^G$, choose $a\in A$ with $\varphi(a)=b$; naturality of the Reynolds operator [F1] gives $b=R_B(b)=R_B(\varphi(a))=\varphi(R_A(a))\in\varphi(A^G)$. Hence $\varphi(A^G)=B^G$. [F1, step 1.1]

3.1 Part (d): if $A=\bigoplus_nA_n$ is a $G$-stable grading, the degree projections are $G$-equivariant, so by naturality $R_X$ preserves each degree and $A^G=\bigoplus_nA_n^G$. For a homogeneous ideal $I\subseteq A^G$ its extension $IA$ is homogeneous; for an ascending chain of homogeneous ideals $I_n$, all extensions $I_nA$ are homogeneous. Thus $R_X$ preserves homogeneity, and the computations of steps 1.1, 2.1 and 2.2 apply verbatim: $R_X(IA)=I$, the map $I\mapsto IA$ is injective on homogeneous ideals, and $A^G$ is Noetherian when $A$ is; the surjectivity statement of part (c) holds for surjective graded equivariant maps by the same argument. [F1, F4, step 2.1, step 2.2] ∎

## Remarks

- This isolates the three computations used repeatedly in the finite-generation theorem and in the stable-locus theorem: $A^G$ is a direct summand as an $A^G$-module, ideal extension is injective, and surjections descend to invariants. They are Brion's steps in the proof of Theorem 1.24(i) and the corresponding properties of the Reynolds operator in Popov–Vinberg.
- The Axiom of Choice is inherited from the bridge theorem and the coordinate-ring rationality theorem; the argument itself uses none.
