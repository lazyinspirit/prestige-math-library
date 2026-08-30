---
id: thm-homotopy-invariance-of-holomorphic-line-integrals
kind: theorem
title: "Endpoint-fixed homotopic paths have equal holomorphic line integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy,
       thm-lebesgue-number-lemma,
       thm-holomorphic-primitive-on-star-shaped-domain,
       thm-fundamental-theorem-for-complex-line-integrals,
       cor-cauchy-theorem-star-shaped-domain,
       prop-reversal-and-concatenation-of-complex-line-integrals,
       def-complex-contours-reversal-concatenation-and-closedness]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §5"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be
holomorphic, and let $\gamma_0,\gamma_1:[0,1]\to\Omega$ be rectifiable paths
with the same endpoints. If $\gamma_0$ and $\gamma_1$ are path-homotopic
relative to the endpoints, then

$$\int_{\gamma_0} f(z)\,dz=\int_{\gamma_1} f(z)\,dz.$$

## Facts & Assumptions

**Given:** An open set $\Omega$, a holomorphic function $f:\Omega\to\mathbb C$, two rectifiable paths $\gamma_0,\gamma_1:[0,1]\to\Omega$ with the same endpoints, and an endpoint-fixed path homotopy $H:[0,1]\times[0,1]\to\Omega$ from $\gamma_0$ to $\gamma_1$.

[L1] A path homotopy relative to the endpoints is a continuous map $H:I\times I\to\Omega$ with $H(s,0)=\gamma_0(s)$, $H(s,1)=\gamma_1(s)$, and both side edges fixed at the common endpoints ([[def-homotopy-relative-and-path-homotopy]]).

[L2] Every open cover of a compact metric space has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

[L3] Every holomorphic function on an open star-shaped subset of $\mathbb C$ has a primitive there ([[thm-holomorphic-primitive-on-star-shaped-domain]]).

[L4] If $F$ is a primitive of a continuous $g$ on an open set containing the trace of a rectifiable contour, then the contour integral of $g$ is the endpoint increment of $F$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L5] If $U\subseteq\mathbb C$ is open and star-shaped, $f$ is holomorphic on $U$, and $\sigma$ is a closed rectifiable contour in $U$, then $\int_\sigma f(z)\,dz=0$ ([[cor-cauchy-theorem-star-shaped-domain]]).

[L6] Reversal changes the sign of a complex line integral, and concatenation adds integrals ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L7] Reversal and concatenation of contours are the standard orientation-changing and gluing operations on rectifiable paths ([[def-complex-contours-reversal-concatenation-and-closedness]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the image of the homotopy square lies in $\Omega$. For each point $x$ of $[0,1]^2$, openness of $\Omega$ gives an open disc $D_x\subseteq\Omega$ centered at $H(x)$, and the sets $H^{-1}(D_x)$ form an open cover of the compact square $[0,1]^2$. By [L2], there is $\delta>0$ such that every subset of the square of diameter less than $\delta$ lies in some $H^{-1}(D_x)$. Choose $N$ with $\sqrt2/N<\delta$. [given, L1, L2, choose]

2.1 For $1\le j,k\le N$, write $$Q_{jk}=\Bigl[\frac{j-1}{N},\frac{j}{N}\Bigr]\times\Bigl[\frac{k-1}{N},\frac{k}{N}\Bigr].$$ Each cell has diameter $\sqrt2/N<\delta$, so step 1.1 places $H[Q_{jk}]$ inside an open disc $D_{jk}\subseteq\Omega$. Put $$a_{jk}=H\Bigl(\frac{j-1}{N},\frac{k-1}{N}\Bigr),\quad b_{jk}=H\Bigl(\frac{j}{N},\frac{k-1}{N}\Bigr),\quad c_{jk}=H\Bigl(\frac{j}{N},\frac{k}{N}\Bigr),\quad d_{jk}=H\Bigl(\frac{j-1}{N},\frac{k}{N}\Bigr).$$ Since every disc is convex, the straight segments from $a_{jk}$ to $b_{jk}$, from $b_{jk}$ to $c_{jk}$, from $c_{jk}$ to $d_{jk}$, and from $d_{jk}$ to $a_{jk}$ all lie in $D_{jk}$. Let $P_{jk}$ be the closed polygonal contour obtained by traversing those four segments in that order. [step 1.1, construct]

3.1 Because $D_{jk}$ is star-shaped, [L5] gives $$\int_{P_{jk}} f(z)\,dz=0.$$ Also [L3] gives a primitive $F_{jk}$ of $f$ on $D_{jk}$. [step 2.1, L3, L5]

4.1 Summing the zero integrals from step 3.1 over all cells, every interior polygon edge appears once in each orientation, so [L6] and [L7] cancel all interior contributions. The surviving outer boundary is the bottom polygonal path $P_0$ built from the straight segments joining $\gamma_0((j-1)/N)$ to $\gamma_0(j/N)$, the top polygonal path $P_1$ built in the forward direction from the straight segments joining $\gamma_1((j-1)/N)$ to $\gamma_1(j/N)$ but occurring in the outer boundary with reverse orientation, and the two side edges. By [L1] both side edges are constant, and for a constant path $s$ one has $s*s=s$, so [L6] gives $\int_s f\,dz=\int_{s*s}f\,dz=2\int_s f\,dz$, hence $\int_s f\,dz=0$. Therefore $$\int_{P_0} f(z)\,dz=\int_{P_1} f(z)\,dz.$$ [L1, L6, L7, step 3.1, algebra]

4.2 For each $1\le j\le N$, the bottom subpath $\gamma_0|_{[(j-1)/N,\,j/N]}$ and the chord segment from $\gamma_0((j-1)/N)$ to $\gamma_0(j/N)$ both lie in $D_{j1}$. Since $F_{j1}$ is a primitive of $f$ on $D_{j1}$, [L4] gives the same endpoint increment for both, so their integrals are equal. Summing over $j$ and using [L6] yields $$\int_{\gamma_0} f(z)\,dz=\int_{P_0} f(z)\,dz.$$ The same argument with the top-row discs $D_{jN}$ gives $$\int_{\gamma_1} f(z)\,dz=\int_{P_1} f(z)\,dz.$$ [step 3.1, L4, L6, algebra]

5.1 Combining steps 4.1 and 4.2 gives $$\int_{\gamma_0} f(z)\,dz=\int_{\gamma_1} f(z)\,dz,$$ as required. [step 4.1, step 4.2] ∎
