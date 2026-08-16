---
id: cex-disc-algebra-is-not-dense-without-self-adjointness
kind: counterexample
title: "The disc algebra is unital and separating but not self-adjoint or dense"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-complex-function-algebra, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-complex-numbers-form-a-field, def-complex-metric-convergence-and-continuity, def-complex-integer-powers, thm-complex-nth-roots-and-roots-of-unity, cor-sum-of-roots-of-unity, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, thm-induction-principle, thm-heine-borel-rn, thm-compactness-agrees-with-metric-compactness, thm-metric-hausdorff-separation, thm-uniform-limit-theorem]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, unnumbered counterexample in Section 1.6"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement refuted

The false claim is that a unital point-separating complex function algebra on a compact Hausdorff space must be self-adjoint and uniformly dense without any conjugation hypothesis.

On the closed unit disc
$$D:=\{z\in\mathbb C:|z|\le1\},$$
let $P$ be the algebra of restrictions of complex polynomials in the coordinate $z$, and let $A$ be its uniform closure: the set of functions $f:D\to\mathbb C$ such that for every $\varepsilon>0$ there is $p\in P$ with $|f(z)-p(z)|<\varepsilon$ for every $z\in D$. Then $A$ is a uniformly closed unital point-separating complex function algebra, but $\overline z\notin A$. Consequently $A$ is neither self-adjoint nor dense in $C(D,\mathbb C)$.

## Facts & Assumptions

**Given:** The closed unit disc $D\subseteq\mathbb C$, the coordinate-polynomial algebra $P$, and its uniform closure $A$.

[L1] A complex function algebra is self-adjoint when it contains the pointwise conjugate of each of its members; it is unital and point-separating under the literal constant-function and distinct-pair conditions ([[def-self-adjoint-complex-function-algebra]]).

[L2] For $z=a+bi$, $\overline z=a-bi$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L3] For all $z,w\in\mathbb C$, $z\overline z=|z|^2$, $|zw|=|z||w|$, and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L4] The complex numbers form a field containing $\mathbb R$ ([[thm-complex-numbers-form-a-field]]).

[L5] Under $\mathbb C=\mathbb R^2$, $d_{\mathbb C}(z,w)=|z-w|$ is exactly the Euclidean metric, and continuity on subsets of $\mathbb C$ uses this metric ([[def-complex-metric-convergence-and-continuity]]).

[L6] Natural powers satisfy $z^0=1$ and $z^{n+1}=z^nz$; negative integer powers of nonzero $z$ are powers of its inverse ([[def-complex-integer-powers]]).

[L7] For $n\ge1$, the $n$th roots of unity are the distinct numbers $\exp(2\pi i k/n)$ for natural $k$ with $0\le k<n$ ([[thm-complex-nth-roots-and-roots-of-unity]]).

[L8] For $n\in\mathbb N$ with $n\ge2$, the sum of all $n$th roots of unity is $0$ ([[cor-sum-of-roots-of-unity]]).

[L9] For all $z,w\in\mathbb C$, $\exp(z+w)=\exp z\exp w$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L10] The complex exponential satisfies $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L11] If a property holds at $0$ and passes from every natural $n$ to its successor, then it holds for every natural number ([[thm-induction-principle]]).

[L12] For $n\ge1$, a subset of Euclidean $\mathbb R^n$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]], clause 2).

[L13] A compact subset of a metric space is compact as a topological subspace of its metric topology, and conversely ([[thm-compactness-agrees-with-metric-compactness]], clause 2).

[L14] Every metric space is Hausdorff: distinct points are separated by disjoint open balls ([[thm-metric-hausdorff-separation]]).

[L15] If a map from a topological space to a metric space has, for every $\varepsilon>0$, a continuous map staying within $\varepsilon$ of it at every point, then it is continuous ([[thm-uniform-limit-theorem]], clause 1).

## Counterexample

**Proof technique:** contradiction.

1.1 The reverse triangle inequality derived from [L3] makes $z\mapsto|z|$ continuous, so $D=\{|z|\le1\}$ is closed; it is bounded because $d_{\mathbb C}(z,0)=|z|\le1$. Thus [L5], [L12], and [L13] make $D$ compact, and [L14] makes its metric topology Hausdorff. [L3, L5, L12, L13, L14]

1.2 Each $p=\sum_{j=0}^{m}\alpha_jz^j$ in $P$ is continuous: the identity $z^j-w^j=(z-w)\sum_{k=0}^{j-1}z^kw^{j-1-k}$ of [L6] together with $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ from [L3] gives $|z^j-w^j|\le j|z-w|$ for $z,w\in D$, so $|p(z)-p(w)|\le C_p|z-w|$ with $C_p:=\sum_{j=1}^{m}j|\alpha_j|$, which is continuity for the metric of [L5]; hence [L15] puts every member of $A$ in $C(D,\mathbb C)$. The set $P$ contains the constants and the coordinate function $z\mapsto z$, which separates points, and is closed under complex linear combinations and products by [L1] and [L4], so $P$ is a unital point-separating complex function algebra and $A\supseteq P$ inherits unitality and point separation. $A$ is a complex vector subspace because approximants add and scale. For products, $|z|\le1$ and [L3] give $|p(z)|\le M_p:=\sum_{j=0}^{m}|\alpha_j|$ on $D$ for every $p\in P$, so given $f,g\in A$ and $\eta>0$ one may first fix $b_0\in P$ with $|g-b_0|<1$ everywhere, whence $|g|\le K:=M_{b_0}+1$ on $D$, and then choose $a\in P$ with $|f-a|<\eta/(2K)$ everywhere and $b\in P$ with $|g-b|<\eta/(2(M_a+1))$ everywhere; from $ab-fg=a(b-g)+(a-f)g$ and [L3], $|ab-fg|\le M_a|b-g|+K|a-f|<\eta$ pointwise, and $ab\in P$, so $fg\in A$. Finally $A$ is uniformly closed, because a function within $\varepsilon/2$ of a member of $A$ everywhere is within $\varepsilon$ of a member of $P$ everywhere. [L1, L3, L4, L5, L6, L15, choose, algebra]

1.3 Suppose for contradiction that $\overline z\in A$. Then there is a nonzero polynomial $p(z)=\sum_{j=0}^{m}a_jz^j$ with $\sup_{z\in D}|\overline z-p(z)|<1$; put $N:=m+2\ge2$ and $\zeta:=\exp(2\pi i/N)$. [L2, assume-contra, given, choose]

1.4 Repeated use of the addition law [L9], along the induction of [L11] on $k$ with base $\exp0=1=\zeta^0$, gives $\exp(2\pi ik/N)=\zeta^k$ for every natural $k$; so the list of [L7] is exactly $1,\zeta,\ldots,\zeta^{N-1}$, and these are the $N$th roots of unity. For an integer $r$ with $1\le r<N$ one has $\zeta^r=\exp(2\pi ir/N)$, and [L10] makes this equal to $1=\exp0$ only when $2\pi ir/N\in2\pi i\mathbb Z$, that is only when $N$ divides $r$, which fails in that range; hence $\zeta^r\ne1$. The same law gives $(\zeta^r)^N=\exp(2\pi ir)=1$. [L6, L7, L9, L10, L11]

1.5 For every natural $q\ge1$ and every $x\in\mathbb C$, $(x-1)\sum_{k=0}^{q-1}x^k=x^q-1$. Apply [L11] to the property that this identity holds for $q=n+1$. At $n=0$ the identity reads $(x-1)x^0=x-1$, which is immediate. Assuming it at $n$, adding the term $x^{n+1}$ to the sum changes the left side by $(x-1)x^{n+1}=x^{n+2}-x^{n+1}$, carrying the right side from $x^{n+1}-1$ to $x^{n+2}-1$, which is the identity at $n+1$. [L4, L6, L11, algebra]

2.1 The exponent-one cancellation $\sum_{k=0}^{N-1}\zeta^k=0$ is [L8]. For $2\le r\le m+1<N$, step 1.5 with $x=\zeta^r$ and step 1.4 give $(\zeta^r-1)\sum_{k=0}^{N-1}\zeta^{rk}=0$ with $\zeta^r-1\ne0$, so $\sum_{k=0}^{N-1}\zeta^{rk}=0$. [step 1.4, step 1.5, L4, L8]

2.2 Every sampled point lies on the unit circle, so [L3] gives $\zeta^k\overline{\zeta^k}=1$ and hence $N^{-1}\sum_{k=0}^{N-1}\zeta^k\overline{\zeta^k}=1$. [step 1.4, L3, algebra]

3.1 Expanding $p$ and using step 2.1 for the exponents $j+1\in\{1,\ldots,m+1\}$ gives $N^{-1}\sum_{k=0}^{N-1}\zeta^kp(\zeta^k)=0$. [step 2.1, L4, L6, algebra]

4.1 Subtracting step 3.1 from step 2.2 and repeatedly applying the triangle inequality in [L3], justified over the finite sum by [L11], yields $1\le N^{-1}\sum_{k=0}^{N-1}|\overline{\zeta^k}-p(\zeta^k)|<1$, contradicting step 1.3. [step 1.3, step 3.1, step 2.2, L3, L11]

5.1 Therefore $\overline z\notin A$. Since the coordinate function $z$ belongs to $A$, the algebra is not self-adjoint by [L1]. The conjugation map is continuous, because $\overline z-\overline w=\overline{z-w}$ by [L2] and $|\overline u|^2=\overline u\,u=|u|^2$ by [L3], so $|\overline z-\overline w|=|z-w|$; and $A$ is uniformly closed by step 1.2, so a function uniformly approximable by members of $A$ lies in $A$. Hence $\overline z$ is a member of $C(D,\mathbb C)$ that $A$ cannot approximate uniformly, and $A$ is not dense. [step 4.1, step 1.2, L1, L2, L3, L5, discharge-contradiction] ∎
