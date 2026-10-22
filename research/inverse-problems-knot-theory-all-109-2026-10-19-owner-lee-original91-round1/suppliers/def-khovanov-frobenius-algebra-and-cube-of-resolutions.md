---
id: def-khovanov-frobenius-algebra-and-cube-of-resolutions
kind: definition
title: "Khovanov Frobenius algebra and cube of resolutions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-cochain-complex-in-an-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§2.2–2.3 and 4.2"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §§2–3"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §§3–4"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Definition

Let $D$ be a nonempty finite regular oriented link diagram in an oriented $3$-sphere, with finite crossing set $C(D)$. Fix a unit viewing normal $n$ and orient the projection plane $P$ so $(u,v)$ is positive exactly when $(n,u,v)$ is positive in the ambient $3$-space. At a crossing $c$, define its sign as the sign of $\det_P(v_{\rm over},v_{\rm under})$, where the two nonzero projected tangent vectors follow the oriented over- and under-strands. Let $n_+$ and $n_-$ be the numbers of positive and negative crossings.

Set $\mathcal A=\mathbb Z[X]/(X^2)$, with $\deg(1)=1$ and $\deg(X)=-1$. Its unit, multiplication, counit, and comultiplication are
$$
\eta(1)=1,\qquad m(1\otimes1)=1,\quad m(1\otimes X)=m(X\otimes1)=X,\quad m(X\otimes X)=0,
$$
$$
\epsilon(1)=0,\quad\epsilon(X)=1,\qquad \Delta(1)=1\otimes X+X\otimes1,\quad\Delta(X)=X\otimes X.
$$
Thus $m$ and $\Delta$ have quantum degree $-1$, while $\eta$ and $\epsilon$ have degree $+1$.

Choose a total order $c_1<\cdots<c_n$ on $C(D)$. A resolution state is a function $v:C(D)\to\{0,1\}$; at $v(c)=0$ use the A-smoothing and at $v(c)=1$ use the B-smoothing from the Kauffman source chart. Write $|v|=\sum_c v(c)$, let $D_v$ be the crossingless resolution, and let $k(v)$ be its number of circles. Assign the state module $\mathcal A^{\otimes k(v)}$. For an edge $v\to v+e_j$ changing crossing $c_j$ from $0$ to $1$, use $m$ if the local smoothing merges two circles and $\Delta$ if it splits one circle, tensored with the identity on all other factors, and multiply this map by $(-1)^{\sum_{i<j}v(c_i)}$. The resulting direct sum has cohomological degree
$$i(v)=|v|-n_-$$
and the generator with circle labels $1$ or $X$ has quantum degree
$$j(v)=|v|+n_+-2n_-+\sum_{\text{circle labels }a}\deg(a).$$
This defines the normalized integral Khovanov cube and its candidate degree-zero cochain differential; the assertion that the differential squares to zero is a separate lemma.

The Frobenius identity that controls a merge-split face is represented by the two equal composites below. The diagram records the maps only; the proof verifies the equality on the basis $\{1,X\}^{\otimes2}$ and does not rely on the drawing.

```tikzcd
\mathcal A\otimes\mathcal A \arrow[r,"m"] \arrow[d,"\Delta\otimes\mathrm{id}"'] & \mathcal A \arrow[d,"\Delta"] \\
\mathcal A\otimes\mathcal A\otimes\mathcal A \arrow[r,"\mathrm{id}\otimes m"'] & \mathcal A\otimes\mathcal A
```

## Definition references

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman smoothing chart and finite crossing set]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Determinant crossing sign and writhe]]

[[def-cochain-complex-in-an-abelian-category|Cochain-complex convention]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§2.2–2.3 and 4.2](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§2–3](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §§3–4](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.5–3.7](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** A nonempty finite regular oriented diagram $D$, a total order of its crossing set, and the operations displayed in the Definition.

## Proof

1.1 The quotient by the monic polynomial $X^2$ is the free abelian group with basis $1,X$. The displayed multiplication is the quotient-ring multiplication, so it is associative, commutative, and has unit $1$. On this basis, $\epsilon$ and $\Delta$ satisfy both counit identities; explicitly, $(\epsilon\otimes\mathrm{id})\Delta(1)=1$, $(\mathrm{id}\otimes\epsilon)\Delta(1)=1$, and the same composites send $X$ to $X$. [given, algebra]

1.2 Cocommutativity follows by swapping tensor factors in the two displayed values of $\Delta$. For coassociativity, both $(\Delta\otimes\mathrm{id})\Delta(1)$ and $(\mathrm{id}\otimes\Delta)\Delta(1)$ equal $1\otimes X\otimes X+X\otimes1\otimes X+X\otimes X\otimes1$, and both composites send $X$ to $X\otimes X\otimes X$. Hence $(\mathcal A,m,\eta,\Delta,\epsilon)$ is a commutative Frobenius algebra once the Frobenius compatibility is checked. [given, algebra]

2.1 On the ordered basis $1\otimes1,1\otimes X,X\otimes1,X\otimes X$ of $\mathcal A\otimes\mathcal A$, each of $(m\otimes\mathrm{id})(\mathrm{id}\otimes\Delta)$, $\Delta m$, and $(\mathrm{id}\otimes m)(\Delta\otimes\mathrm{id})$ has respective outputs $1\otimes X+X\otimes1$, $X\otimes X$, $X\otimes X$, and $0$. Thus the Frobenius identities hold. The degree shifts in the Definition give each edge map total quantum degree $0$; the quotient-ring construction and all checks are choice-free. [given, step 1.1, step 1.2, algebra] ∎
