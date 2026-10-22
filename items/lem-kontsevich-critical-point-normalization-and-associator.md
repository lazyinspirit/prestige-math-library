---
id: lem-kontsevich-critical-point-normalization-and-associator
kind: lemma
title: Tangential KZ regularization and the hump normalization
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - lem-kontsevich-configuration-space-compactification-faces
  - lem-kontsevich-long-knot-closure-and-connected-sum
justified_by: []
dependency_level: 8
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§8.4, 8.6–8.7, and 10.1.5–10.1.7
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Universal Vassiliev–Kontsevich Invariant for Framed Oriented Links, §4
      url: https://letu.math.gatech.edu/Papers/UN_PAPER.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.5.4
      url: https://arxiv.org/pdf/q-alg/9702009v1
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

For each finite degree cutoff $N$, every parenthesized endpoint cluster of the KZ connection has a unique coefficientwise tangentially regularized transport, obtained by removing its local residue factor. For three strands, fix the normalized positions $(0,z,1)$ and put $a=t_{12}/(2\pi i)$ and $b=t_{23}/(2\pi i)$. The equation $G'(z)=\left(\frac{a}{z}+\frac{b}{z-1}\right)G(z)$ has unique solutions $G_0,G_1$ with $G_0(z)=f(z)z^a$, $G_1(z)=g(1-z)(1-z)^b$, where $f$ and $g$ are analytic near $0$ and $f(0)=g(0)=1$. Their ratio $\Phi_{\mathrm{KZ}}:=G_1(z)^{-1}G_0(z)$ is independent of $z$ and equals the regularized limit $\Phi_{\mathrm{KZ}}=\lim_{\varepsilon\downarrow0}\varepsilon^{-b}G_\varepsilon(1-\varepsilon)\varepsilon^a,\qquad G_\varepsilon(\varepsilon)=1$.
If $K^+$ is obtained from a strict Morse knot presentation $K$ by inserting one copy of the fixed standard hump $H$, then $Z(K^+)=Z(H)Z(K)$, $r(K^+)=r(K)+1$, and hence $I(K^+)=I(K)$. The inverse in $I(K)$ exists degreewise because the degree-zero coefficient of $Z(H)$ is $1$. The associator identities and independence under arbitrary changes of parenthesization are separate claims.

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|KZ connection, tangential endpoint convention, and fixed hump normalization]]

[Chmutov, Duzhin, and Mostovoy, §§8.4, 8.6–8.7, and 10.1.5–10.1.7, printed pp. 228–240 and 273–277](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Le and Murakami, §4, PDF pp. 6–7](https://letu.math.gatech.edu/Papers/UN_PAPER.pdf)

[Bar-Natan and Stoimenow, §2.5.4, PDF pp. 15–16](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** The completed strand algebra, the KZ form, the compactified level cells, the fixed standard hump $H$, and a finite degree cutoff $N$.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: the KZ form is $\Omega_q=(2\pi i)^{-1}\sum_{i<j}t_{ij}\,d\log(z_i-z_j)$; parenthesizations specify nested tangential collision directions; $Z(K)$ is the degreewise improper configuration integral in the unframed 4T+1T quotient; $I(K)=Z(K)Z(H)^{-r(K)}$.

[F2] [[lem-kontsevich-configuration-space-compactification-faces]]: each nested collision has a nonnegative radial coordinate and a smooth limiting direction; branch evaluations extend smoothly to its resolved face.

[F3] [[lem-kontsevich-long-knot-closure-and-connected-sum]]: closing the standard one-in one-out hump tangle gives $H$, and closure of a vertical composite multiplies the closed series by connected sum.

[F4] **External input — local hump identity for closed knots.** Bar-Natan–Stoimenow, §2.5.4, Theorem 2.9 and its proof, printed/PDF pp. 15–16, establishes $Z(K_c)=Z(\infty)Z(K_s)$ for arbitrary closed Morse knots identical outside the local maximum-minimum insertion in figure (2.9). Their $\infty$ is the two-maxima unknot $H$ of [F1]. Chmutov–Duzhin–Mostovoy gives the same identity as equation (1), printed p. 226, with its justification in §8.7.1, printed p. 238. This is an imported established result for closed knots, not a consequence of cutting an arbitrary knot into a tangle lying between its endpoint planes. Actual reading: Bar-Natan–Stoimenow §§2.5.1–2.5.4, pp. 13–16, including the separation argument and figures; Chmutov–Duzhin–Mostovoy p. 226 and §§8.6–8.7, pp. 232–239. The separation argument is imported, not reconstructed here as a uniform estimate for arbitrary shrinking families.

## Proof

**Given:** As above. Work first in the finite-dimensional quotient through degree $N$; all limits and products below are coefficientwise. No choice axiom is used.

1.1 On the normalized three-strand slice, the three positions are $0,z,1$. The $t_{13}$ term of $\Omega_3$ is constant in these coordinates, while $d\log(z_1-z_2)=d\log z$ and $d\log(z_2-z_3)=d\log(z-1)$. Thus the reduced equation is exactly the displayed equation with residues $a$ at $0$ and $b$ at $1$. [given, F1, algebra]

2.1 Near $z=0$, substitute $G_0(z)=f(z)z^a$ with $f(z)=1+\sum_{n\ge1}f_nz^n$. Comparing coefficients in the differential equation gives $(n-\operatorname{ad}_a)f_n=-b\sum_{j=0}^{n-1}f_j$, where $\operatorname{ad}_a(x)=[a,x]$. On the degree-$N$ quotient, $\operatorname{ad}_a$ raises degree and is nilpotent, so $(n-\operatorname{ad}_a)^{-1}=\sum_{s=0}^{N}(\operatorname{ad}_a)^s/n^{s+1}$ is defined. This determines every $f_n$ uniquely. If $S_n=\sum_{j=0}^n\|f_j\|$ in any norm on the finite-dimensional quotient, the recurrence gives $S_n\le(1+C_N/n)S_{n-1}$ for a constant $C_N$; hence $S_n$ grows at most polynomially, and $f$ converges for $|z|<1$. It solves the equation by termwise differentiation. [given, F1, step 1.1, construct, algebra]

3.1 Replacing $z$ by $1-z$ and interchanging $a,b$ gives the same recurrence at $z=1$ and uniquely constructs $G_1(z)=g(1-z)(1-z)^b$ with $g(0)=1$. Any two fundamental solutions differ by a constant right multiplier; uniqueness of the analytic normalized factor follows from the recurrence in step 2.1. For a smooth tangential endpoint chart, write each within-cluster difference as $\rho u_{ij}(\rho)$ with $u_{ij}$ smooth and nonzero at $\rho=0$. Factoring these differences in the KZ form gives the radial equation $G'=(A/\rho+B(\rho))G$, where $A=(2\pi i)^{-1}\sum_{i<j\in S}t_{ij}$ and $B$ is smooth, not necessarily analytic. Construct $G=f(\rho)\rho^A$ degreewise with $f_0=1$ and, for $1\le d\le N$, $$f_d(\rho)=\int_0^\rho\left(\frac{[A,f_{d-1}(u)]}{u}+\sum_{j=1}^{d}B_j(u)f_{d-j}(u)\right)\,du.$$ For $d=1$ the commutator with $f_0=1$ is zero. Inductively $f_{d-1}(0)=0$ for $d>1$, so $f_{d-1}(u)/u=\int_0^1f_{d-1}'(vu)\,dv$ is smooth. Thus each integrand is smooth, $f_d(0)=0$, and the integral uniquely solves the degree-$d$ equation. This proves existence and uniqueness of the smooth normalized factor with no Taylor expansion assumption. In the specified nested collision tree apply this construction successively in each radial variable, treating the remaining positive scales and the prescribed directions as parameters. Disjoint or nested cluster residues commute: for $S\subset T$, each $t_{ij}$ with $i,j\in S$ commutes with $t_{ik}+t_{jk}$ for $k\in T\setminus S$, and the internal terms commute with their total by the same relations in [F1]. Hence removing earlier residue factors preserves the next leading residue. Smooth dependence in the displayed finite recursion gives the successive tangential limits and their unique prescribed normalization. This concerns the fixed endpoint tree; it does not assert invariance under changes of parenthesization. [given, F1, F2, step 2.1, construct, induction, algebra]

4.1 Both $G_0$ and $G_1$ solve the same left differential equation. Differentiating $G_1^{-1}G_0$ therefore gives zero, so their ratio is constant. For $G_\varepsilon(z)=G_0(z)G_0(\varepsilon)^{-1}$, the endpoint expansions and $G_0(\varepsilon)^{-1}=\varepsilon^{-a}f(\varepsilon)^{-1}$ give $$\begin{aligned} \varepsilon^{-b}G_\varepsilon(1-\varepsilon)\varepsilon^a &=\varepsilon^{-b}f(1-\varepsilon)(1-\varepsilon)^a\varepsilon^{-a}f(\varepsilon)^{-1}\varepsilon^a\\ &=\varepsilon^{-b}g(\varepsilon)\varepsilon^b\,\Phi_{\mathrm{KZ}}\,\varepsilon^{-a}f(\varepsilon)^{-1}\varepsilon^a, \end{aligned}$$ where the second equality follows from $G_1(1-\varepsilon)\Phi_{\mathrm{KZ}}=G_0(1-\varepsilon)$. In each degree, $f(\varepsilon)^{-1}-1$ and $g(\varepsilon)-1$ are $O(\varepsilon)$. Since $a$ and $b$ have positive degree, conjugation by $\varepsilon^{\pm a}$ or $\varepsilon^{\pm b}$ is a finite polynomial in $\log\varepsilon$ in the degree-$N$ quotient. Thus both outside factors in the last expression differ from $1$ by $O(\varepsilon(1+|\log\varepsilon|)^N)$ in each degree, which tends to zero; the limit is $\Phi_{\mathrm{KZ}}$. [step 2.1, step 3.1, algebra]

5.1 The admissible standard one-in one-out hump tangle closes to the two-maxima unknot $H$ by [F3], identifying the normalization factor with the fixed hump in [F1]. For an arbitrary closed $K$, apply the closed-knot identity [F4] directly to its local insertion: $Z(K^+)=Z(H)Z(K)$. A maximum-minimum birth adds exactly one maximum, so $r(K^+)=r(K)+1$. Write $Z(H)=1+h$, where $h$ has positive degree. Through degree $N$ its inverse is $\sum_{j=0}^N(-h)^j$, and these inverses are compatible as $N$ increases. Connected-sum multiplication is commutative, so $I(K^+)=Z(H)Z(K)Z(H)^{-r(K)-1}=Z(K)Z(H)^{-r(K)}=I(K)$. Deleting a standard hump is the inverse equality. [given, F1, F3, F4, algebra] ∎

