---
id: thm-chevalley-line-stabilizer-of-an-algebraic-subgroup
kind: theorem
title: "Chevalley: every closed subgroup is a line stabilizer"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-coordinate-hopf-algebra-of-affine-group-scheme, def-rational-representation-and-comodule-of-an-affine-group-scheme, lem-affine-finite-type-scheme-coordinate-ring-finitely-generated, lem-finite-dimensional-subcomodules-contain-elements, lem-hopf-ideal-kernels-and-quotients, lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces, lem-representations-of-affine-group-schemes-are-comodules, lem-tensor-and-hom-representations-are-rational, lem-top-exterior-power-detects-subspace-stabilizers, thm-affine-scheme-ring-anti-equivalence, thm-closed-subgroup-schemes-correspond-to-hopf-ideals, cor-finite-type-algebra-over-noetherian-ring-is-noetherian]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 4, Theorem 4.27 with Lemma 4.28, printed pp. 94-95; Ch. 10 (10.32), printed p. 196"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Lemma 75 (Chevalley, independent treatment)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be an
affine group scheme of finite type over a field $k$ and let $H\subseteq G$ be a
closed subgroup scheme. Then there exist a finite-dimensional rational
representation $(V,r)$ of $G$ and a line $L\subseteq V$ such that
$H=\operatorname{Stab}_G(L)$ scheme-theoretically: for every $k$-algebra $R$,
$\operatorname{Stab}_G(L)(R)=\{g\in G(R):gL_R=L_R\}$
([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]],
[[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).
Moreover, if $L=kv$ then
$\operatorname{Lie}(H)=\{x\in\operatorname{Lie}(G):xv\in kv\}$.

## Facts & Assumptions

**Given:** An affine group scheme $G$ of finite type over $k$ with coordinate
Hopf algebra $A=O(G)$ and a closed subgroup scheme $H\subseteq G$, with kernel
$\mathfrak a=\ker(A\to O(H))$.

[F1] *Hopf ideals and closed subgroups.* $\mathfrak a$ is a Hopf ideal of $A$
and $H=\operatorname{Spec}(A/\mathfrak a)$; in particular
$\Delta(\mathfrak a)\subseteq A\otimes\mathfrak a+\mathfrak a\otimes A$ and
$\varepsilon(\mathfrak a)=0$
([[thm-closed-subgroup-schemes-correspond-to-hopf-ideals]],
[[lem-hopf-ideal-kernels-and-quotients]],
[[def-coordinate-hopf-algebra-of-affine-group-scheme]]).

[F2] *Finiteness.* $A$ is a finitely generated $k$-algebra
([[lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]]) and
finitely generated algebras over the Noetherian field $k$ are Noetherian, so
$\mathfrak a$ is finitely generated as an ideal
([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]).

[F3] *Finite-dimensional subcomodules.* $A$ is a comodule over itself under
$\Delta$, and every finite subset of a comodule lies in a finite-dimensional
subcomodule and subrepresentations are subcomodules
([[lem-representations-of-affine-group-schemes-are-comodules]],
[[lem-finite-dimensional-subcomodules-contain-elements]],
[[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F4] *Exterior-power stabilizers.* For a finite-dimensional rational
representation $(V,r)$ and a subspace $W\subseteq V$ of dimension $d$, the
scheme-theoretic stabilizer of $W$ equals the scheme-theoretic stabilizer of the
line $\Lambda^dW\subseteq\Lambda^dV$, and $\Lambda^dV$ with the exterior-power
action is a rational representation
([[lem-top-exterior-power-detects-subspace-stabilizers]],
[[lem-tensor-and-hom-representations-are-rational]]).

[F5] *Lie algebras of stabilizers.* For a subspace $W$ of a rational
representation, $\operatorname{Lie}(\operatorname{Stab}_G(W))=\{x\in\operatorname{Lie}(G):xW\subseteq W\}$
([[lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathfrak a$ is finitely generated as an ideal by [F2], choose a finite generating set $S\subseteq\mathfrak a$. By [F3] there is a finite-dimensional subcomodule $V\subseteq A$ under $\Delta$ with $S\subseteq V$; put $W=\mathfrak a\cap V$, choose a basis $(e_j)_{j\in J}$ of $W$ and extend it to a basis $(e_i)_{i\in J\cup I}$ of $V$, so that $I$ indexes a complement of $W$ in $V$. Write $\Delta(e_j)=\sum_{i\in J\cup I}e_i\otimes a_{ij}$ for $j\in J$ and let $\mathfrak a'$ be the ideal of $A$ generated by the elements $a_{ij}$ with $j\in J$, $i\in I$. [F1, F2, F3, given]

2.1 For a $k$-algebra $R$ and $g\in G(R)$ one has $g\cdot e_j=\sum_{i\in J\cup I}e_i\,a_{ij}(g)$ under the action associated with the coaction $\Delta$, and the $e_i$ form an $R$-basis of $V_R$; hence $g\cdot W_R\subseteq W_R$ if and only if $a_{ij}(g)=0$ for all $j\in J$, $i\in I$, that is, if and only if $g$ vanishes on $\mathfrak a'$. Since $g$ acts invertibly and $W_R$ is a direct summand of $V_R$, the inclusion $g\cdot W_R\subseteq W_R$ is equivalent to $g\cdot W_R=W_R$. Therefore the stabilizer functor of $W$ is represented by the closed subscheme $\operatorname{Spec}(A/\mathfrak a')$ of $G=\operatorname{Spec}A$. [F1, step 1.1, given]

2.2 $\mathfrak a'\subseteq\mathfrak a$: as $\mathfrak a$ is a Hopf ideal, $\Delta(e_j)\in A\otimes\mathfrak a+\mathfrak a\otimes A$ for $j\in J$ by [F1], so applying $\operatorname{id}\otimes\pi$ for the quotient $\pi:A\to A/\mathfrak a$ and then $q\otimes\operatorname{id}$ for the quotient $q:A\to A/\mathfrak a$ gives $\sum_{i\in I}q(e_i)\otimes\pi(a_{ij})=0$ in $(A/\mathfrak a)\otimes(A/\mathfrak a)$, because $\pi(e_j)=0$ for $j\in J$ and $\mathfrak a\cap V=W$; the elements $q(e_i)$, $i\in I$, are linearly independent, so $\pi(a_{ij})=0$, that is, $a_{ij}\in\mathfrak a$ for all $j\in J$, $i\in I$. [F1, step 1.1]

2.3 $\mathfrak a\subseteq\mathfrak a'$: for $j\in J$ one has $\varepsilon(e_j)=0$ by [F1], and the counit axiom gives $e_j=(\varepsilon\otimes\operatorname{id})\Delta(e_j)=\sum_{i\in J\cup I}\varepsilon(e_i)a_{ij}=\sum_{i\in I}\varepsilon(e_i)a_{ij}\in\mathfrak a'$, because the terms with $i\in J$ have $\varepsilon(e_i)=0$. The elements $e_j$, $j\in J$, span $W\supseteq S$, and $S$ generates $\mathfrak a$ as an ideal, so $\mathfrak a$ is contained in the ideal $\mathfrak a'$. [F1, step 1.1]

3.1 By steps 2.2 and 2.3, $\mathfrak a'=\mathfrak a$, so $\operatorname{Spec}(A/\mathfrak a')=\operatorname{Spec}(A/\mathfrak a)=H$. Step 2.1 identifies $\operatorname{Spec}(A/\mathfrak a')$ with the stabilizer of $W$, so $H=\operatorname{Stab}_G(W)$ scheme-theoretically, where $V$ is a finite-dimensional rational representation of $G$ and $W\subseteq V$. [F1, step 2.1, step 2.2, step 2.3]

4.1 Let $d=\dim W$ and $L=\Lambda^dW\subseteq\Lambda^dV$; this is a line, $\Lambda^dV$ is a finite-dimensional rational representation of $G$ by [F4], and [F4] gives $\operatorname{Stab}_G(W)=\operatorname{Stab}_G(L)$ scheme-theoretically. Combined with step 3.1 this produces the required pair $(V,L)$ with $H=\operatorname{Stab}_G(L)$. [F4, step 2.1]

5.1 If $L=kv$, then $\{x\in\operatorname{Lie}(G):xL\subseteq L\}=\{x:xv\in kv\}$ and [F5] applied to the line $L$ gives $\operatorname{Lie}(H)=\operatorname{Lie}(\operatorname{Stab}_G(L))=\{x\in\operatorname{Lie}(G):xv\in kv\}$. [F5, step 4.1]

6.1 Steps 4.1 and 5.1 prove both assertions of the theorem for the closed subgroup scheme $H$ of $G$. [step 4.1, step 5.1] ∎

## Remarks

- The construction is Milne's proof of Theorem 4.27: the ideal $\mathfrak a$ is
  replaced by the ideal of matrix coefficients $\mathfrak a'$ cut out by the
  finite-dimensional subcomodule $V$, and the computation $\mathfrak a' =
  \mathfrak a$ identifies $H$ with the stabilizer of $W=\mathfrak a\cap V$ in
  the regular representation restricted to $V$.
- The passage from the subspace $W$ to the line $L=\Lambda^dW$ is Lemma 4.28,
  which is where the exterior power of a rational representation and the
  scheme-theoretic stabilizer comparison are used.
