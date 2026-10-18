---
{
  "id": "lem-hp-unweighted-legendre-derivative-tail",
  "kind": "lemma",
  "title": "An ordinary derivative controls the Legendre tail with a factorial ratio",
  "status": "draft",
  "origin": "pipeline",
  "pipeline_run": "numerical-analysis-remaining-71-2026-10-17",
  "deps": [
    "lem-legendre-weighted-derivative-orthogonality-and-norm",
    "cor-weierstrass-approximation-on-a-closed-interval",
    "lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set",
    "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives",
    "thm-cauchy-schwarz-in-an-inner-product-space",
    "thm-first-fundamental-theorem-of-calculus-for-l-one",
    "def-axiom-of-choice"
  ],
  "justified_by": [],
  "proof_strategy": "direct",
  "provenance": {
    "statement": "ai-altered",
    "proof": "ai-altered"
  },
  "sources": {
    "references": [
      {
        "title": "Shen\u2013Tang, Spectral and High-Order Methods, \u00a71.8",
        "url": "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      }
    ]
  }
}
---

## Statement

Assume the Axiom of Choice. Write $\Pi_N$ for the ordinary $L^2(-1,1)$ Legendre projection. If $k\ge1$, $N\ge k-1$, and $f\in H^k(-1,1)$, then
$$\|f-\Pi_Nf\|_2\le\left(\frac{(N+1-k)!}{(N+1+k)!}\right)^{1/2}\|f^{(k)}\|_2.$$
For $k=0$ the corresponding estimate is the contraction estimate with factor one. For $n\ge k$, repeated derivative orthogonality is
$$\int_{-1}^1(1-x^2)^kP_n^{(k)}P_m^{(k)}=\frac{2}{2n+1}\frac{(n+k)!}{(n-k)!}\delta_{nm}.$$
No equivalence of coefficient-defined and ordinary Sobolev spaces is assumed.

## Facts & Assumptions

**Given:** Ordinary weak-derivative Sobolev spaces, the integers in the Statement, and the Axiom of Choice.

[F1] [[lem-legendre-weighted-derivative-orthogonality-and-norm]] proves Rodrigues orthogonality, leading degree, and $\|P_n\|_2^2=2/(2n+1)$.

[F2] [[cor-weierstrass-approximation-on-a-closed-interval]] and [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]] imply polynomial density in $L^2(-1,1)$: approximate first by a smooth compactly supported function and then uniformly by a polynomial.

[F3] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]] gives absolutely continuous representatives on the closed interval for each derivative of an $H^k$ input through order $k-1$. The supplier assumes full Choice. Repeated integration by parts against a polynomial whose required endpoint derivatives vanish is therefore valid directly for these ordinary Sobolev inputs.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]] gives Bessel's inequality by expanding the nonnegative norm of a vector minus its finite orthogonal projection. [[thm-first-fundamental-theorem-of-calculus-for-l-one]] supplies the one-dimensional Sobolev representatives used in integration by parts.

## Proof

1.1 Set $w_k=(1-x^2)^k$. The polynomial $D^k(w_kD^kP_n)$ has degree $n$. Every derivative of $w_k$ through order $k-1$ vanishes at both endpoints. For a polynomial $q$ of degree below $n$, two sets of $k$ integrations by parts therefore give $\int D^k(w_kD^kP_n)q=\int P_nD^k(w_kD^kq)=0$ by [F1], since the final polynomial has degree at most $\deg q<n$. Its leading coefficient is $(-1)^k(n+k)!/(n-k)!$ times the leading coefficient of $P_n$: differentiating $P_n$ first contributes $n!/(n-k)!$, multiplication by $w_k$ contributes $(-1)^k$, and the final derivative contributes $(n+k)!/n!$. Thus orthogonality and positive norms in [F1] identify $D^k(w_kD^kP_n)=(-1)^k\lambda_{n,k}P_n$, with $\lambda_{n,k}=(n+k)!/(n-k)!$. A further integration by parts gives the derivative-orthogonality formula, including zero derivatives when an index is below $k$. [F1, given, algebra]

2.1 Write $c_n=(f,P_n)/\|P_n\|_2^2$. The absolutely continuous derivative representatives of [F3] and the endpoint vanishing in step 1.1 permit $k$ successive integrations by parts and give $\int w_k f^{(k)}P_n^{(k)}=\lambda_{n,k}c_n\|P_n\|_2^2$. All integrals are finite by Cauchy–Schwarz, since the polynomial factors are bounded and the weak derivatives are in $L^2$. Apply Bessel's inequality [F4] to $w_k^{1/2}f^{(k)}$ and the orthogonal functions $w_k^{1/2}P_n^{(k)}$. It yields $\sum_{n\ge k}\lambda_{n,k}|c_n|^2\|P_n\|_2^2\le\int w_k|f^{(k)}|^2\le\|f^{(k)}\|_2^2$. [F3, F4, step 1.1, algebra]

3.1 Density [F2] and finite-projection minimality imply $\Pi_M f\to f$ in $L^2$: for a polynomial $q$ within $\varepsilon$ and $M\ge\deg q$, projection error is at most $\varepsilon$. Pythagoras then gives $\|f-\Pi_Nf\|_2^2=\sum_{n>N}|c_n|^2\|P_n\|_2^2$. Since $\lambda_{n,k}$ increases with $n\ge k$, step 2.1 bounds this sum by $\lambda_{N+1,k}^{-1}\|f^{(k)}\|_2^2$. Taking square roots proves the factorial estimate. At $k=0$ projection is contractive by the same finite Pythagoras identity. [F1, F2, step 2.1, algebra] ∎
