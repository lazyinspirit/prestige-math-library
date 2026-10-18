---
{
  "id": "thm-hp-triangle-unweighted-smooth-approximation",
  "kind": "theorem",
  "title": "Constructive ordinary Sobolev polynomial approximation on triangles",
  "status": "draft",
  "origin": "pipeline",
  "pipeline_run": "numerical-analysis-remaining-71-2026-10-17",
  "deps": [
    "lem-hp-unweighted-legendre-derivative-tail",
    "thm-reference-simplex-sobolev-extension",
    "cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn",
    "thm-bramble-hilbert-on-reference-simplex",
    "lem-smooth-density-on-reference-simplex",
    "lem-shape-regular-affine-simplex-scaling",
    "thm-first-fundamental-theorem-of-calculus-for-l-one",
    "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives",
    "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
    "thm-cauchy-schwarz-in-an-inner-product-space",
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

Assume the Axiom of Choice. Let $T=\{(x,y):x,y>0,x+y<1\}$, integer $r\ge5$, $p\ge2r-4$, and $n=\lfloor p/2\rfloor$. Put
$$\eta_{n,r}:=\left(\frac{(n-r+3)!}{(n+r-5)!}\right)^{1/2}.$$
There is an explicitly constructed linear map $A_{p,r}:H^r(T)\to\mathbb P_p(T)$ satisfying
$$\|u-A_{p,r}u\|_{H^2(T)}\le C_r\eta_{n,r}|u|_{H^r(T)}.$$
Here $C_r$ is independent of $p$ and is the product of the fixed reference extension norm, the reference moment-projection constant, and the fixed tensor-integration constant proved below. For a shape-regular affine triangle $K$ of diameter $h_K$, the transported map obeys
$$\left(\sum_{j=0}^2h_K^{2j-2}|u-A_{K,p,r}u|_{H^j(K)}^2\right)^{1/2}\le C_{r,\gamma}\eta_{n,r}h_K^{r-1}|u|_{H^r(K)}.$$
In particular, for $p\ge4(r-2)$, $\eta_{n,r}\le(4/p)^{r-4}$. This is a conservative ordinary Sobolev rate with a loss of derivatives; no optimal $p^{-(r-1)}$ rate or useful analytic growth bound for $C_r$ is asserted.

## Facts & Assumptions

**Given:** The reference triangle, $r,p,n$ as above, ordinary $H^r$ regularity, and the Axiom of Choice.

[F1] [[lem-hp-unweighted-legendre-derivative-tail]] gives the factorial $L^2$ tail for an ordinary derivative.

[F2] [[thm-reference-simplex-sobolev-extension]] gives a bounded linear reference extension $E_r:H^r(T)\to H^r(\mathbb R^2)$; let $M_r$ denote its norm.

[F3] [[thm-bramble-hilbert-on-reference-simplex]] gives the unique linear moment polynomial $B_{r-1}u\in\mathbb P_{r-1}$ with $\|u-B_{r-1}u\|_{H^r(T)}\le B_r|u|_{H^r(T)}$.

[F4] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]], [[thm-cauchy-schwarz-in-an-inner-product-space]], and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] justify primitives and the tensor norm calculations. [[lem-smooth-density-on-reference-simplex]] and [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] after the explicit reference extension permit proving the estimates first for smooth functions and then taking Sobolev limits.

[F5] [[lem-shape-regular-affine-simplex-scaling]] controls affine pullbacks, determinants and derivatives. All inherited choice assumptions are included in full Choice.

## Proof

1.1 On $I=(-1,1)$ define $S_nf(x)=f(-1)+(x+1)f'(-1)+\int_{-1}^x(x-t)\Pi_{n-2}f''(t)\,dt$. For $f\in H^2(I)$ both anchored values are well-defined by [F4]. The endpoint estimate $|g(-1)|\le C\|g\|_{H^1(I)}$ follows by writing $g(-1)=g(t)-\int_{-1}^t g'$ and integrating in $t$. Thus $S_n$ is uniformly bounded $H^2(I)\to H^2(I)$: its second derivative is an $L^2$ contraction and the two lower derivatives follow by integrating twice and the endpoint estimates. It reproduces every polynomial of degree at most $n$. If $m=r-2\ge3$, then $(f-S_nf)''=f''-\Pi_{n-2}f''$ and the two anchored lower derivatives of the error vanish. Two primitive estimates give $\|f-S_nf\|_{H^2(I)}\le C\|f''-\Pi_{n-2}f''\|_2\le C\eta_{n,r}\|f^{(m)}\|_2$ by [F1] with derivative order $m-2=r-4$. The constant $C$ is absolute. [F1, F4, given, construct, algebra]

2.1 On $I^2$ apply $S_n$ in both coordinates. For smooth $U$, write $U-S_n^xS_n^yU=(1-S_n^x)U+S_n^x(1-S_n^y)U$. For each $a+b\le2$, the first term is bounded in $\|D_x^aD_y^b\cdot\|_2$ by step 1.1, applied on x sections to $D_y^bU$, by $C\eta_{n,r}\|D_x^mD_y^bU\|_2$. For the second term use the uniform $H^2_x$ bound of step 1.1 and then its error estimate on y sections of $D_x^jU$, $0\le j\le2$. The resulting derivatives are $D_x^jD_y^mU$. Every listed derivative has total order at most $m+2=r$. Fubini and addition over the six derivatives through order two give $\|U-S_n^xS_n^yU\|_{H^2(I^2)}\le C\eta_{n,r}\|U\|_{H^r(I^2)}$, with an absolute tensor constant. Density [F4] extends the operator and inequality to all $H^r(I^2)$. Its image is $\mathbb Q_n$, hence total degree at most $2n\le p$. [F4, step 1.1, algebra]

3.1 Let $b=B_{r-1}u$, $w=u-b$, and $U=(E_rw)|_{I^2}$. Restrict $S_n^xS_n^yU$ to $T\subset I^2$ and set $A_{p,r}u=b+(S_n^xS_n^yU)|_T$. Since $p\ge2r-4\ge r-1$, both summands have total degree at most $p$. Linearity follows from the moment map, extension and finite projections. On $T$, $U=w$, so step 2.1 and [F2]–[F3] give $\|u-A_{p,r}u\|_{H^2(T)}\le C M_rB_r\eta_{n,r}|u|_{H^r(T)}$. This gives the declared constant without any claim on its growth in $r$. [F2, F3, step 2.1, construct, algebra]

4.1 Transport step 3.1 by the affine map to $K$. A derivative of order $j$ of the pulled-back error has norm comparable, with shape-dependent factors, to $h_K^{j-1}|u-A_{K,p,r}u|_{H^j(K)}$, while $|\widehat u|_{H^r(T)}\le C_{r,\gamma}h_K^{r-1}|u|_{H^r(K)}$ by [F5]. This proves the scaled estimate. The factorial quotient in $\eta_{n,r}^2$ is the reciprocal of $2(r-4)$ consecutive positive integers, each at least $n-r+4$; for $p\ge4(r-2)$, $n-r+4\ge p/4$. Taking the square root proves the last rate. [F5, step 3.1, algebra] ∎
