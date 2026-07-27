---
id: thm-quaternions-form-a-division-ring
kind: theorem
title: "$\\mathbb{H}$ is a division ring that is not commutative, hence not a field: $q^{-1} = \\bar q / N(q)$ for $q \\ne 0$, while $ij = k$ and $ji = -k$"
status: draft
origin: session
deps: [def-quaternions, def-ring, def-division-ring, def-commutative-ring, def-invertible-element, lem-ring-units-form-a-group, lem-field-is-a-commutative-ring, def-field, def-ordered-field, thm-reals-field, thm-reals-ordered-field, lem-of-square-positive, lem-of-zero-mult, def-real-numbers, def-monoid-finite-product, thm-generalised-associativity, def-semigroup-and-monoid, def-group, def-binary-operation, def-natural-numbers]
justified_by: []
aliases: [thm-quaternions-division-ring]
landmark: true
short: "$\\mathbb{H}$ is a division ring, not a field"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Quaternion (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quaternion"
    - title: "Division ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Division_ring"
pipeline_run: null
---

## Statement

Let $\mathbb{H}$ be the quaternions, with the addition, the multiplication, the
elements $0_{\mathbb{H}}$ and $1_{\mathbb{H}}$, the basis elements
$e_0 = 1, e_1 = i, e_2 = j, e_3 = k$, the real embedding
$\lambda \mapsto \hat{\lambda}$, the conjugate $\bar{x}$ and the norm $N(x)$ of
[[def-quaternions]]. Then:

1. $(\mathbb{H}, +, \cdot, 0_{\mathbb{H}}, 1_{\mathbb{H}})$ is a ring
   ([[def-ring]]);
2. it is **not** commutative ([[def-commutative-ring]]): $ij = k$ and
   $ji = -k$, and $k \ne -k$;
3. $x\bar{x} = \bar{x}x = \widehat{N(x)}$ for every $x \in \mathbb{H}$, and
   $N(x) > 0$ in $\mathbb{R}$ whenever $x \ne 0_{\mathbb{H}}$;
4. $\mathbb{H}$ is a division ring ([[def-division-ring]]): $1_{\mathbb{H}} \ne 0_{\mathbb{H}}$
   and every $x \ne 0_{\mathbb{H}}$ is a unit, with

   $$x^{-1} \;=\; \widehat{N(x)^{-1}}\,\bar{x};$$

   consequently $\mathbb{H} \setminus \{0_{\mathbb{H}}\}$ is a group under
   multiplication;
5. $\mathbb{H}$ is **not** a field ([[def-field]]).

## Facts & Assumptions

**Given:** The set $\mathbb{H}$ of quadruples of real numbers with the operations, distinguished elements, basis elements $e_p$ for $p \in 4$, real embedding $\hat{\lambda}$, conjugate and norm of [[def-quaternions]]; $[x]_m$ denotes the $m$-th coordinate of $x \in \mathbb{H}$, for $m \in 4 = \{0,1,2,3\}$ ([[def-natural-numbers]]).

[L1] $\mathbb{R}$ is a field: $(\mathbb{R},+,0)$ is an abelian group, multiplication is associative and commutative with identity $1$, multiplication distributes over addition, $0 \ne 1$, and every $t \ne 0$ has an inverse $t^{-1}$ ([[thm-reals-field]], [[def-real-numbers]], [[def-field]], [[def-group]]). Also $0 \cdot t = t \cdot 0 = 0$ for every real $t$ ([[lem-of-zero-mult]]).

[L2] $\mathbb{R}$ is a totally ordered field with positive cone $P$: exactly one of $t \in P$, $t = 0$, $-t \in P$ holds, and $P$ is closed under addition and multiplication ([[thm-reals-ordered-field]], [[def-ordered-field]]). In particular $1 > 0$, so $1 \ne -1$.

[L3] In an ordered field the square of a nonzero element is positive ([[lem-of-square-positive]]).

[L4] Finite sums in the commutative monoid $(\mathbb{R},+,0)$ are defined by [[def-monoid-finite-product]] read additively, and their value is unchanged by regrouping the summands or permuting them ([[thm-generalised-associativity]], [[def-semigroup-and-monoid]], [[def-binary-operation]]).

[L5] A ring is an abelian group under addition, a monoid under multiplication, and satisfies both distributive laws; a division ring is a ring with $1 \ne 0$ in which every nonzero element is a unit; the units of a ring form a group ([[def-ring]], [[def-division-ring]], [[def-invertible-element]], [[lem-ring-units-form-a-group]]).

[L6] Every field is a commutative ring ([[lem-field-is-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 The additive group. Addition on $\mathbb{H}$ is defined coordinatewise from addition on $\mathbb{R}$, so it is associative and commutative, $0_{\mathbb{H}}$ is a two-sided identity, and $(-x_0,-x_1,-x_2,-x_3)$ is a two-sided additive inverse of $x$. Hence $(\mathbb{H},+,0_{\mathbb{H}})$ is an abelian group and $-x = (-x_0,-x_1,-x_2,-x_3)$. [L1, L5, given]

1.2 Coefficient form of the product. For $m, p, q \in 4$ let $\varepsilon_m(p,q)$ be the real coefficient of the monomial $x_p y_q$ in the $m$-th coordinate of the defining product formula, and $\varepsilon_m(p,q) = 0$ when that monomial does not occur there; every such coefficient is $1$, $-1$ or $0$. Reading the four coordinates of the formula off one at a time, $[xy]_m = \sum_{p<4}\sum_{q<4} \varepsilon_m(p,q)\, x_p\, y_q$ for all $x, y \in \mathbb{H}$ and all $m \in 4$, the right-hand side being a sum of sixteen real numbers. [L1, L4, given]

1.3 The cyclic symmetry of the table. Let $\gamma : 4 \to 4$ fix $0$ and send $1 \mapsto 2 \mapsto 3 \mapsto 1$, and let $\Gamma : \mathbb{H} \to \mathbb{H}$ be the coordinate permutation determined by $[\Gamma x]_{\gamma(p)} = x_p$, that is $\Gamma(x_0,x_1,x_2,x_3) = (x_0,x_3,x_1,x_2)$. Then $\Gamma$ is a bijection, $\Gamma(e_p) = e_{\gamma(p)}$, $\Gamma$ fixes each $\hat{\lambda}$, and $\Gamma(\lambda x) = \lambda\Gamma(x)$, all immediately from the definition of $\Gamma$. [L1, given]

1.4 Claim 2: from the table, $ij = k = (0,0,0,1)$ and $ji = -k = (0,0,0,-1)$. These differ because $1 \ne -1$ in $\mathbb{R}$, which holds since $1 > 0$ and hence $-1 < 0$. So multiplication on $\mathbb{H}$ is not commutative. [L2, given]

1.5 Claim 3, the norm identity. Evaluating the product formula at $y = \bar{x}$ gives coordinates $x_0x_0 - x_1(-x_1) - x_2(-x_2) - x_3(-x_3) = N(x)$, then $x_0(-x_1) + x_1x_0 + x_2(-x_3) - x_3(-x_2) = 0$, then $x_0(-x_2) + x_2x_0 + x_3(-x_1) - x_1(-x_3) = 0$, then $x_0(-x_3) + x_3x_0 + x_1(-x_2) - x_2(-x_1) = 0$; so $x\bar{x} = \widehat{N(x)}$. Evaluating it at $x := \bar{x}$, $y := x$ gives $x_0x_0 - (-x_1)x_1 - (-x_2)x_2 - (-x_3)x_3 = N(x)$ and, in the same way, $0$ in each of the other three coordinates; so $\bar{x}x = \widehat{N(x)}$ as well. [L1, given]

1.6 Claim 3, positivity. Let $x \ne 0_{\mathbb{H}}$; then $x_p \ne 0$ for at least one $p \in 4$. Each $x_{p'}^{2}$ with $x_{p'} \ne 0$ is positive, and each $x_{p'}^{2}$ with $x_{p'} = 0$ equals $0$; a sum in which at least one summand is positive and the rest are positive or $0$ is positive, since $P$ is closed under addition and $u + 0 = u$. Hence $N(x) > 0$, and in particular $N(x) \ne 0$. [L1, L2, L3]

2.1 Real scalars pass through the product. For $\lambda \in \mathbb{R}$ the formula gives $\hat{\lambda}x = x\hat{\lambda} = (\lambda x_0, \lambda x_1, \lambda x_2, \lambda x_3)$, an element we abbreviate $\lambda x$; in particular $\hat{\lambda}\hat{\mu} = \widehat{\lambda\mu}$, $1_{\mathbb{H}}x = x1_{\mathbb{H}} = x$, and $(-1)x = -x$ by step 1.1. [step 1.1, L1, given]

2.2 The coefficients are the multiplication table: $\varepsilon_m(p,q) = [e_pe_q]_m$ for all $m,p,q \in 4$. Fix $p$ and $q$ and substitute $x = e_p$, $y = e_q$ into step 1.2: then $x_{p'} = 0$ for $p' \ne p$ and $y_{q'} = 0$ for $q' \ne q$, and a real product with a factor $0$ is $0$, so every one of the sixteen summands vanishes except the one indexed by $(p,q)$, which equals $\varepsilon_m(p,q) \cdot 1 \cdot 1 = \varepsilon_m(p,q)$. [step 1.2, L1, L4]

2.3 Both distributive laws hold. By step 1.2 and distributivity in $\mathbb{R}$, $[(x+x')y]_m = \sum_{p,q}\varepsilon_m(p,q)(x_p + x'_p)y_q = \sum_{p,q}\bigl(\varepsilon_m(p,q)x_py_q + \varepsilon_m(p,q)x'_py_q\bigr) = [xy]_m + [x'y]_m$, the last equality being a regrouping of a finite sum of thirty-two real terms; the same computation in the second argument gives $x(y+y') = xy + xy'$. [step 1.2, L1, L4]

2.4 The nine table checks that establish $e_{\gamma(p)}e_{\gamma(q)} = \Gamma(e_pe_q)$ for all $p,q \in \{1,2,3\}$, read off the table of [[def-quaternions]]: $jj = -1 = \Gamma(-1) = \Gamma(ii)$; $jk = i = \Gamma(k) = \Gamma(ij)$; $ji = -k = \Gamma(-j) = \Gamma(ik)$; $kj = -i = \Gamma(-k) = \Gamma(ji)$; $kk = -1 = \Gamma(-1) = \Gamma(jj)$; $ki = j = \Gamma(i) = \Gamma(jk)$; $ij = k = \Gamma(j) = \Gamma(ki)$; $ik = -j = \Gamma(-i) = \Gamma(kj)$; $ii = -1 = \Gamma(-1) = \Gamma(kk)$. The cases with $p = 0$ or $q = 0$ are immediate, both sides being $e_{\gamma(q)}$ or $e_{\gamma(p)}$ respectively. [step 1.3, given]

2.5 Claim 5: every field is a commutative ring by [L6], and the multiplication of $\mathbb{H}$ is not commutative by step 1.4; so $\mathbb{H}$ is not a field. [step 1.4, L6]

3.1 Real scalars pass through a triple product too: by step 1.2 and step 2.1, $[(\lambda x)y]_m = \sum_{p,q}\varepsilon_m(p,q)(\lambda x_p)y_q = \lambda[xy]_m$ and likewise $[x(\lambda y)]_m = \lambda [xy]_m$, so $(\lambda x)y = \lambda(xy) = x(\lambda y)$. Taking $\lambda = -1$ gives $(-x)y = -(xy) = x(-y)$. [step 1.2, step 2.1, L1, L4]

3.2 Reduction of associativity to the sixty-four basis triples. Applying step 1.2 twice and rearranging, $[(xy)z]_m = \sum_{s,r}\varepsilon_m(s,r)[xy]_sz_r = \sum_{p,q,r}\Bigl(\sum_s \varepsilon_m(s,r)\varepsilon_s(p,q)\Bigr)x_py_qz_r$, and applying step 2.2 twice, $[(e_pe_q)e_r]_m = \sum_s\varepsilon_m(s,r)[e_pe_q]_s = \sum_s\varepsilon_m(s,r)\varepsilon_s(p,q)$; hence $[(xy)z]_m = \sum_{p,q,r<4}x_py_qz_r\,[(e_pe_q)e_r]_m$. The same computation with the other bracketing gives $[x(yz)]_m = \sum_{p,q,r<4}x_py_qz_r\,[e_p(e_qe_r)]_m$. Therefore, if $(e_pe_q)e_r = e_p(e_qe_r)$ holds for all $p,q,r \in 4$, then $(xy)z = x(yz)$ for all $x,y,z \in \mathbb{H}$. [step 1.2, step 2.2, L1, L4]

3.3 Basis triples containing the index $0$. Since $e_0 = 1_{\mathbb{H}}$ is a two-sided identity by step 2.1, each of $(e_0e_q)e_r = e_qe_r = e_0(e_qe_r)$, $(e_pe_0)e_r = e_pe_r = e_p(e_0e_r)$ and $(e_pe_q)e_0 = e_pe_q = e_p(e_qe_0)$ holds. So only the twenty-seven triples with $p,q,r \in \{1,2,3\}$ remain. [step 2.1]

3.4 The multiplication of $\mathbb{H}$ commutes with $\Gamma$: $\Gamma(x)\Gamma(y) = \Gamma(xy)$ for all $x,y$. By step 1.2 and $[\Gamma x]_p = x_{\gamma^{-1}(p)}$, $[\Gamma(x)\Gamma(y)]_{\gamma(m)} = \sum_{p,q}\varepsilon_{\gamma(m)}(\gamma(p),\gamma(q))x_py_q$, while $[\Gamma(xy)]_{\gamma(m)} = [xy]_m = \sum_{p,q}\varepsilon_m(p,q)x_py_q$; by step 2.2 the two families of coefficients are $[e_{\gamma(p)}e_{\gamma(q)}]_{\gamma(m)}$ and $[e_pe_q]_m = [\Gamma(e_pe_q)]_{\gamma(m)}$, which agree by step 2.4. [step 1.2, step 2.2, step 1.3, step 2.4, L1, L4]

4.1 Reduction of the twenty-seven triples to nine. Suppose $(e_pe_q)e_r = e_p(e_qe_r)$ for a triple $(p,q,r)$. Applying step 3.4, $(e_{\gamma(p)}e_{\gamma(q)})e_{\gamma(r)} = \Gamma(e_pe_q)\Gamma(e_r) = \Gamma((e_pe_q)e_r)$ and $e_{\gamma(p)}(e_{\gamma(q)}e_{\gamma(r)}) = \Gamma(e_p)\Gamma(e_qe_r) = \Gamma(e_p(e_qe_r))$, so the identity holds for $(\gamma(p),\gamma(q),\gamma(r))$ as well. Since $\gamma$ restricted to $\{1,2,3\}$ is a cycle of length three, for each $p \in \{1,2,3\}$ there is exactly one $t \in \{0,1,2\}$ with $\gamma^{t}(p) = 1$; hence every triple in $\{1,2,3\}^{3}$ is obtained by iterating $\gamma$ from a triple whose first entry is $1$, and it suffices to check the nine triples $(1,q,r)$ with $q,r \in \{1,2,3\}$. [step 2.4, step 3.4]

4.2 The nine remaining checks, using the table of [[def-quaternions]] and the sign rule of step 3.1: $(ii)i = (-1)i = -i$ and $i(ii) = i(-1) = -i$; $(ii)j = -j$ and $i(ij) = ik = -j$; $(ii)k = -k$ and $i(ik) = i(-j) = -(ij) = -k$; $(ij)i = ki = j$ and $i(ji) = i(-k) = -(ik) = j$; $(ij)j = kj = -i$ and $i(jj) = i(-1) = -i$; $(ij)k = kk = -1$ and $i(jk) = ii = -1$; $(ik)i = (-j)i = -(ji) = k$ and $i(ki) = ij = k$; $(ik)j = (-j)j = -(jj) = 1$ and $i(kj) = i(-i) = -(ii) = 1$; $(ik)k = (-j)k = -(jk) = -i$ and $i(kk) = i(-1) = -i$. All nine agree. [step 3.1, step 2.1, given]

5.1 Multiplication on $\mathbb{H}$ is associative: by steps 3.3, 4.1 and 4.2 the identity $(e_pe_q)e_r = e_p(e_qe_r)$ holds for all sixty-four basis triples, and step 3.2 transfers it to all of $\mathbb{H}$. [step 3.2, step 3.3, step 4.1, step 4.2]

6.1 Claim 1: by step 1.1 the additive structure is an abelian group; by step 5.1 and step 2.1 multiplication is associative with two-sided identity $1_{\mathbb{H}}$, so $(\mathbb{H},\cdot,1_{\mathbb{H}})$ is a monoid; and both distributive laws hold by step 2.3. So $\mathbb{H}$ is a ring. [step 1.1, step 2.1, step 2.3, step 5.1, L5]

7.1 Claim 4. First $1_{\mathbb{H}} \ne 0_{\mathbb{H}}$, because $1 \ne 0$ in $\mathbb{R}$. Let $x \ne 0_{\mathbb{H}}$ and put $\lambda := N(x)^{-1}$, which exists by step 1.6, and $y := \lambda\bar{x} = \widehat{N(x)^{-1}}\bar{x}$. Then $xy = x(\lambda\bar{x}) = \lambda(x\bar{x}) = \lambda\widehat{N(x)} = \widehat{\lambda N(x)} = \hat{1} = 1_{\mathbb{H}}$ by step 3.1, step 1.5 and step 2.1, and $yx = (\lambda\bar{x})x = \lambda(\bar{x}x) = 1_{\mathbb{H}}$ in the same way. So $x$ is a unit of the ring $\mathbb{H}$ with $x^{-1} = \widehat{N(x)^{-1}}\bar{x}$, and $\mathbb{H}$ is a division ring; by [L5] its units form a group, and by the description of a division ring that group is $\mathbb{H}\setminus\{0_{\mathbb{H}}\}$. [step 2.1, step 3.1, step 6.1, step 1.5, step 1.6, L1, L5]

8.1 Claims 1 to 5 are established: claim 1 in step 6.1, claim 2 in step 1.4, claim 3 in step 1.5 together with step 1.6, claim 4 in step 7.1 and claim 5 in step 2.5. [step 6.1, step 1.4, step 1.5, step 1.6, step 7.1, step 2.5] ∎

## Remarks

- **No notion of linearity is used, and none is available here.** The reduction
  of associativity to basis triples is carried out entirely inside $\mathbb{R}$:
  the product is a fixed real formula, its coefficients are named, and the two
  bracketings are expanded into the same shape of finite sum, whose coefficients
  are then recognised as the coordinates of the corresponding basis products.
  The only tools are the field arithmetic of $\mathbb{R}$ and the regrouping law
  for finite sums ([[thm-generalised-associativity]]).

- **How the count of cases falls.** Sixty-four basis triples; those in which one
  of the three indices is $0$ collapse by the identity law, leaving twenty-seven;
  the cyclic symmetry $i \mapsto j \mapsto k \mapsto i$ is a bijection commuting
  with multiplication, and it acts on the twenty-seven triples with every orbit
  of size three, so nine representatives suffice. The symmetry is checked, not
  asserted: it rests on nine equations of the table.

- **$\mathbb{H}$ separates three notions this page keeps apart.** It is a ring
  that is not commutative; it is a division ring that is not a field; and it has
  no zero divisors without being an integral domain, since a domain is required
  to be commutative ([[def-zero-divisor-and-integral-domain]]).

- The inverse formula $x^{-1} = \widehat{N(x)^{-1}}\bar{x}$ is the exact analogue
  of $\bar z/|z|^{2}$ for complex numbers, and the proof is the same
  computation; the only quaternionic subtlety is that $x\bar{x}$ and $\bar{x}x$
  have to be computed separately, which the norm-identity step above does.
