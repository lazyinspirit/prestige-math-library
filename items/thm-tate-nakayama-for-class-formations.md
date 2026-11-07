---
id: thm-tate-nakayama-for-class-formations
kind: theorem
title: Tate–Nakayama isomorphisms for a class formation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-class-formation
- def-tate-cohomology-for-finite-groups
- def-tor-by-resolving-the-right-module
- thm-the-bar-cochain-complex-computes-derived-group-cohomology
- cor-normalized-cochains-compute-group-cohomology
- lem-relative-invariant-for-class-formations
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- def-dependent-choice
- lem-tate-nakayama-cup-product-criterion
dependency_level: 6
proof_strategy: direct
axiom_use: The original DC plus supplied ordinary/complete/Tor-resolution convention
  is preserved. The finite criterion now has a full DC diagonal-tensor proof with
  both exact Tor orders; no AC tensor theorem or AC continuous-LHS theorem is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean-Pierre Serre, Local Fields, English translation
    url: https://ebooks.karbust.me/Mathematics/Jean-Pierre%20Serre%20-%20Local%20Fields%20%281979%29%20%5B978-1-4757-5673-9%5D.pdf
    locator: Chapter IX §8, Theorem 14, printed pp.149–150.
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Chapter I §1, Theorem 0.2 and Lemma 1.2, printed pp.3 and 17.
  - title: J. S. Milne, Class Field Theory, version 4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter II §3, Theorem 3.11 and Remark 3.12, printed pp.83–85.
verification:
  precheck: n/a
---



## Statement

Assume Dependent Choice and use supplied complete-resolution data for finite groups. Let $(G,C,(\operatorname{inv}_V)_V)$ be a class formation: $G$ is profinite, $C$ is a discrete $G$-module, $H^1(V;C)=0$ for every open subgroup $V\le G$, each invariant $\operatorname{inv}_V:H^2(V;C)\to\mathbb Q/\mathbb Z$ is an isomorphism, and restriction from $V$ to an open subgroup $W\le V$ multiplies the invariant by $[V:W]$. Let $U\triangleleft G$ be open, put $Q=G/U$ and $C_U=C^U$. For $x\in H^2(Q;C_U)$, define its relative invariant as $\operatorname{inv}_G(\operatorname{Inf}_{Q}^{G}x)$; the class-formation axioms identify its image with $[G:U]^{-1}\mathbb Z/\mathbb Z$. Let $u_U$ be the unique class whose relative invariant is $1/[G:U]$ modulo $\mathbb Z$. Choose a normalized $2$-cocycle $\varphi:Q\times Q\to C_U$ representing $u_U$, so $\varphi(1,q)=\varphi(q,1)=0$ and $g\varphi(h,k)-\varphi(gh,k)+\varphi(g,hk)-\varphi(g,h)=0$. Form $C_U[\varphi]=C_U\oplus\bigoplus_{q\ne1}\mathbb Zx_q$ with $h x_q=x_{hq}-x_h+\varphi(h,q)$ and $x_1=0$. Let $I_Q$ be the augmentation ideal of $\mathbb Z[Q]$; the associated exact sequences are $0\to C_U\to C_U[\varphi]\to I_Q\to0$ and $0\to I_Q\to\mathbb Z[Q]\to\mathbb Z\to0$. For every $Q$-module $M$ with $\operatorname{Tor}^{\mathbb Z}_1(M,C_U)=0$, and every integer $r$, the composite of the two connecting maps after tensoring these sequences with $M$ is an isomorphism
$$
\widehat H^r(Q;M)\longrightarrow\widehat H^{r+2}(Q;M\otimes_{\mathbb Z}C_U).
$$

## Statement references

[[def-class-formation]]

[[def-tate-cohomology-for-finite-groups]]

[[def-tor-by-resolving-the-right-module]]

[[thm-the-bar-cochain-complex-computes-derived-group-cohomology]]

[[cor-normalized-cochains-compute-group-cohomology]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[lem-tate-nakayama-cup-product-criterion]]

[Serre, Local Fields, Chapter IX §8](https://ebooks.karbust.me/Mathematics/Jean-Pierre%20Serre%20-%20Local%20Fields%20%281979%29%20%5B978-1-4757-5673-9%5D.pdf)

[Milne, Arithmetic Duality Theorems, Chapter I §1](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The original class formation, open normal $U$, finite quotient
$Q$, $C_U=C^U$, supplied complete-resolution data, DC, $M$ and
$\operatorname{Tor}^{\mathbb Z}_1(M,C_U)=0$.

[F1] Class-formation invariants are isomorphisms, the open-subgroup $H^1$
groups vanish, and restriction scales invariants by subgroup index.
[[def-class-formation]]

[F2] Continuous cohomology is normalized continuous inhomogeneous cochains;
$\delta a(g)=g a-a$ in degree one and finite-quotient inflation is
composition with the quotient map.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F3] The relative invariant identifies $H^2(V/U,C^U)$ with the restriction
kernel, which has invariants $[V:U]^{-1}\mathbb Z/\mathbb Z$, under the
original DC scope; its proof uses continuous splittings and finite choices,
not an AC continuous-LHS import.
[[lem-relative-invariant-for-class-formations]]

[F4] The finite splitting-module criterion proves the full double-boundary
isomorphism under DC. Its proved Remark supplies the reversed-order
$\operatorname{Tor}_1(D,A)=0$ variant used here and records subgroupwise
acyclicity of the actual splitting module. It uses the new DC tensor proof,
not an AC projective-dimension theorem.
[[lem-tate-nakayama-cup-product-criterion]]

[A1] DC and supplied ordinary/complete/Tor-resolution data are exactly the
original convention; no extra AC hypothesis is used.
[[def-dependent-choice]]

## Proof

**Proof technique:** obtain all finite-subgroup generator conditions from
the class formation, then state separately the full DC finite criterion with the precise original Tor order.

**Given:** The original data under [A1].

1.1 Let $H\le Q$ and let $V$ be its inverse image in $G$. A normalized
$1$-cocycle $H\to C^U$ inflates to a continuous cocycle on $V$.
If it is the coboundary of $a\in C$ on $V$, its value on $U$ is zero,
so $a\in C^U$; it was therefore already a coboundary on $H$.
Thus inflation injects $H^1(H,C^U)$ into $H^1_{\mathrm{cts}}(V,C)$,
which is zero by [F1]. This is a direct continuous-cochain argument,
without replacing continuous cohomology by an ordinary-group theorem.
[F1, F2, given, algebra]

1.2 By [F3], $H^2(Q,C^U)$ is cyclic of order $[G:U]$ and contains a
unique class $u_U$ of relative invariant $1/[G:U]$. Its restriction to
$H=V/U$ has relative invariant $1/[V:U]$, since actual cochain
inflation commutes with restriction and [F1] multiplies the invariant by
$[G:V]$. By [F3] for $U\trianglelefteq V$, this restriction generates
$H^2(H,C^U)$, cyclic of order $[V:U]=|H|$. Thus all finite-subgroup
hypotheses of the splitting-module criterion hold. This includes $H=1$:
its cyclic group and relative invariant are both zero.
[F1, F2, F3, step 1.1, algebra]

2.1 Apply [F4] to $A=C^U$, the class $u_U$, its chosen cocycle
$\varphi$, and $D=M$. The conditions on every subgroup were proved in
steps1.1–1.2. The original Tor hypothesis is
$\operatorname{Tor}_1(M,C^U)=0$, exactly the reversed-order variant
proved in [F4]'s Remark. Explicitly the splitting module is
$E=C^U[\varphi]=C^U\oplus\mathbb Z^{|Q|-1}$ as an abelian group,
so tensoring the supplied right resolution of $M$ gives
$\operatorname{Tor}_1(M,E)=0$; the finite free summand contributes no
positive homology. The finite criterion then proves that its two tensor
middle terms are subgroupwise Tate-acyclic under DC, and that the original
two connecting maps give an isomorphism
$$\widehat H^r(Q,M)\xrightarrow{\sim}
\widehat H^{r+2}(Q,C^U\otimes M)$$
for every integer $r$. No exchange of Tor variables or additional choice
axiom has been used. [A1, F4, step 1.1, step 1.2, algebra]

2.2 The tensor flips $c\otimes m\mapsto m\otimes c$ are equivariant
for diagonal actions. Applied throughout both short exact tensor sequences,
they commute with every inclusion/projection. The connecting maps are
natural by their cocycle-lift construction, so the flip identifies the
composite in step2.1 with precisely the composite and target order in the
original Statement. This proves its full conclusion at the original
DC/supplied-resolution strength, including $M=0$, the trivial quotient,
and every integer degree. The separately accepted untensored/AC corollary
and AC tensor theorem remain valid weaker results and are not rewritten.
[A1, F4, step 2.1, algebra] ∎
