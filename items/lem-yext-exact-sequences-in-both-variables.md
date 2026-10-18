---
id: lem-yext-exact-sequences-in-both-variables
kind: lemma
title: "Low-degree exact sequences for Yoneda Ext in both variables"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-abelian-category
  - def-n-fold-yoneda-extension
  - def-equivalence-of-n-fold-extensions
  - def-pullback-and-pushout-of-an-extension
  - def-baer-sum-of-extension-classes
  - thm-baer-sum-makes-extension-classes-an-abelian-group
  - lem-yext-zero-splice-factorization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Barry Mitchell, Theory of Categories, Chapter VII, §§2–5"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/mitchell.pdf"
      locator: "Chapter VII, Proposition 2.2 and Theorem 5.1, printed pp. 168–179: low-degree Hom–Yoneda Ext exactness and the Yoneda Ext² boundary without projectives or injectives."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §3.4, Yoneda Ext"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
      locator: "§3.4.4–3.4.6, printed pp. 78–79: Yoneda Ext¹, Baer addition and splicing."
---

## Statement

For a short exact sequence $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$
and an object $X$ in an abelian category, the sequence
$$ 0\to\operatorname{Hom}(X, A)\to\operatorname{Hom}(X, B)\to \operatorname{Hom}(X, C)\xrightarrow{\delta} \operatorname{YExt}^1(X, A)\to\operatorname{YExt}^1(X, B)\to \operatorname{YExt}^1(X, C)\xrightarrow{\partial} \operatorname{YExt}^2(X, A) $$
is exact at every term before the final $\operatorname{YExt}^2$ term. The
boundary $\delta$ pulls back the given extension along a map $X\to C$;
$\partial$ splices it with a short extension of $X$ by $C$. The dual sequence
in the first Ext variable is exact at the corresponding terms:
$$ 0\to\operatorname{Hom}(C, X)\to\operatorname{Hom}(B, X)\to \operatorname{Hom}(A, X)\to\operatorname{YExt}^1(C, X)\to \operatorname{YExt}^1(B, X)\to\operatorname{YExt}^1(A, X)\to \operatorname{YExt}^2(C, X). $$

Here exactness means that the image at each asserted term equals the preimage
of the zero class. This interpretation is valid even when a Yoneda class
collection is a proper class. When the displayed class collections are sets,
equip them with the Baer operations; the displayed sequences are then exact
sequences of abelian groups.

## Facts & Assumptions

**Given:** The displayed short exact sequence $E$ and object $X$, with no projective, injective, or choice assumption.

[F1] Pullback and pushout are the exact constructions of [[def-pullback-and-pushout-of-an-extension]]. An endpoint-fixed map of short exact sequences is invertible by its zero kernel and cokernel in [[def-abelian-category]].

[F2] Baer addition and zero are as in [[def-baer-sum-of-extension-classes]] and [[thm-baer-sum-makes-extension-classes-an-abelian-group]].

[F3] A splice $EF$ is zero exactly when $F$ lifts to an extension by $B$ ([[lem-yext-zero-splice-factorization]]).

## Proof

**Proof technique:** direct.

1.1 Every displayed map has the asserted direction: Hom uses composition; the two maps between short extension classes are $i_*$ and $p_*$; $\delta(f)=f^*E$; and $\partial[F]=[EF]$. Universal properties send endpoint-fixed maps to endpoint-fixed maps, so pullback, pushout, and splicing respect the generated equivalence relation. These constructions commute with finite direct sums. Pullbacks and pushouts in independent endpoints commute, as is seen by their common universal property. Consequently the maps between short extension classes preserve Baer addition. [F1, F2, construct]

1.2 Exactness at the first three Hom terms follows from the kernel property of $i$ and the cokernel property of $p$: a morphism $X\to B$ is killed by $p$ exactly when it factors uniquely through $i$. At $\operatorname{Hom}(X,C)$, a map $f$ belongs to $\ker\delta$ exactly when $f^*E$ splits. A section of that pullback is exactly a map $s:X\to B$ satisfying $ps=f$. Thus $\ker\delta=\operatorname{im}(p\circ -)$. [F1, F2, construct]

2.1 The connecting maps are additive as well. For $f,g:X\to C$, form the pullback of $E\oplus E$ along $(f,g):X\to C\oplus C$ and then push out along $A\oplus A\xrightarrow{\nabla}A$. Addition $B\oplus B\to B$ induces an endpoint-fixed map from this short extension to $(f+g)^*E$, proving $\delta(f+g)=\delta(f)+\delta(g)$. For the other connecting map, use the two-fold Baer construction: direct sum, diagonal pullback at $X$, codiagonal pushout at $A$. Write $F_0=\Delta_X^*(F\oplus F')$, whose kernel is $C\oplus C$. Then $F+F'=\nabla_{C*}F_0$. Put $H=B\times_C(C\oplus C)$, with pullback along $\nabla_C$. The map $B\oplus B\to H$ induced by $\nabla_B$ and $p\oplus p$ induces an isomorphism $\nabla_{A*}(E\oplus E)\cong\nabla_C^*E$ of extensions of $C\oplus C$ by $A$. Finally the defining pushout map $F_0\to\nabla_{C*}F_0$ and pullback map $\nabla_C^*E\to E$ give an endpoint-fixed chain map between their splices. These explicit maps identify the two-fold Baer representative of $[EF]+[EF']$ with $[E(F+F')]$. Thus $\partial$ preserves addition wherever the extension-class collections are sets; the same formulas hold on classes. [F1, F2, step 1.1, construct, algebra]

2.2 Let $H:0\to A\xrightarrow{a}T\xrightarrow{t}X\to0$. If $i_*H$ splits, its middle pushout $P=B\amalg_A T$ admits a retraction to its subobject $B$. Composing $T\to P$ with this retraction gives $h:T\to B$ with $ha=i$. Hence $ph$ factors uniquely through $t$ as $f:X\to C$. The pair $(h,t)$ gives an endpoint-fixed map $H\to f^*E$, so $[H]=\delta(f)$. Conversely $i_*E$ splits: on its pushout $B\amalg_A B$, the two identity maps to $B$ induce a retraction onto the first copy of $B$. Pulling back along $f$ shows $i_*\delta(f)=0$. This proves exactness at $\operatorname{YExt}^1(X,A)$. [F1, F2, step 1.1, construct]

2.3 Let $H:0\to B\xrightarrow{b}T\xrightarrow{t}X\to0$ and suppose $p_*H$ splits. A retraction from its middle pushout to $C$, composed with $T$'s pushout map, yields $h:T\to C$ satisfying $hb=p$. Let $K=\ker h$. The kernel of $t|_K$ is $A$, and $t|_K:K\to X$ is epic. For the last assertion without elements, if $z:X\to Y$ satisfies $zt|_K=0$, then $zt$ factors through $h$, since $h$ is epic and $K=\ker h$. Write $zt=wh$; restricting to $B$ gives $wp=0$, so $w=0$ and then $z=0$. Thus the cokernel of $t|_K$ is zero. The resulting extension $0\to A\to K\to X\to0$ pushes out along $i$ to $H$: the map $B\amalg_A K\to T$ induced by $b$ and the inclusion of $K$ is an endpoint-fixed short-extension isomorphism. Conversely $p_*i_*H'=0$ for every $H'$ by $pi=0$, since pushout along the zero map is split. Therefore exactness holds at $\operatorname{YExt}^1(X,B)$. [F1, F2, step 1.1, construct]

3.1 At $\operatorname{YExt}^1(X,C)$, [F3] states precisely that $\partial[F]=0$ if and only if $[F]$ lies in the image of $p_*$. This proves every asserted exactness in the covariant sequence, with no assertion of surjectivity onto the final term. [F3, step 1.2, step 2.2, step 2.3]

4.1 The opposite of an abelian category is abelian: kernels and cokernels interchange, biproducts remain biproducts, and the coimage-image isomorphism dualizes. Reversing all arrows therefore identifies its short and two-fold extensions, endpoint-fixed zigzags, pullbacks, pushouts, and Baer operations with the corresponding dual constructions in the original category. Apply steps 1.1–3.1 in that opposite category to $0\to C\to B\to A\to0$ and $X$. The resulting covariant sequence is exactly the second displayed sequence; its first connecting map pushes $E$ out along $A\to X$, and its last connecting map splices an extension of $A$ by $X$ on the left of $E$. This proves all its asserted exactness. [F1, F2, step 1.1, step 2.1, step 1.2, step 2.2, step 2.3, step 3.1] ∎

## Remarks

The assertion is a representative-level image-equals-kernel statement in every abelian category. Where Yoneda extension classes form sets, these are the usual exact sequences of abelian groups. No implicit set-smallness theorem for arbitrary abelian categories, and no identification with derived Ext, is needed for the proof.
