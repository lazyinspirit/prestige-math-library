---
id: ex-wave-cfl-endpoint-and-energy-breakdown
kind: example
title: The Nyquist mode at and beyond the leapfrog CFL endpoint
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-centered-leapfrog-wave-scheme, thm-periodic-centered-wave-amplification-and-endpoint, lem-periodic-heat-difference-amplification-symbol, lem-orthogonality-of-characters-on-a-finite-cyclic-group, def-uniform-grid-and-difference-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.3–§6.4, PDF pp. 87–96: strict wave-energy coercivity and periodic explicit-wave root calculations."
---

## Example

Let $N$ be even and consider the periodic centered leapfrog wave scheme. At $\nu=1$, its Nyquist mode has a repeated root $-1$ and admits linear-in-time growth unless the starting coefficient satisfies $w^1=-w^0$. The usual modified quadratic energy is semidefinite there and is indefinite for $\nu>1$.

## Facts & Assumptions

**Given:** An even periodic grid of real-valued states, $\nu=ck/h>0$, and a Nyquist mode $\phi_{N/2}(j)=(-1)^j$.

[F1] The periodic wave recurrence is defined in [[def-centered-leapfrog-wave-scheme]].

[F2] At $\nu=1$ and even $N$, the periodic wave theorem gives the Nyquist root and compatibility condition ([[thm-periodic-centered-wave-amplification-and-endpoint]]).

[F3] The one-dimensional heat symbol with unit diffusivity gives $-\Delta_h\phi_\ell=4h^{-2}s_\ell\phi_\ell$ ([[lem-periodic-heat-difference-amplification-symbol]]).

[F4] The finite root-of-unity sum gives orthogonality of distinct Fourier modes ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F5] The periodic grid norm is $\|v\|_{2,h}^2=h\sum_j|v_j|^2$ ([[def-uniform-grid-and-difference-operators]]).

[F6] The periodic forward-difference inner product is $\langle D_+p,D_+q\rangle_{e,h}=h\sum_j(D_+p)_j\overline{(D_+q)_j}$ ([[def-uniform-grid-and-difference-operators]]).

## Verification

1.1 For the Nyquist mode, $s_{N/2}=1$, so the recurrence polynomial is $r^2-2(1-2\nu^2)r+1$. At $\nu=1$ this is $(r+1)^2$, with solution $w_n=(-1)^n(A+nB)$; the coefficient $B$ vanishes exactly when $w^1=-w^0$. [F1, F2, algebra]

1.2 If $\nu>1$, then $q=1-2\nu^2<-1$. The roots of $r^2-2qr+1$ are real and negative because the discriminant is $4(q^2-1)>0$, their product is $1$, and their sum is $2q<-2$. Hence one root has modulus greater than one. [F1, algebra]

1.3 Define the periodic modified energy of adjacent states $X=U^n$, $Y=U^{n+1}$ by $$ \mathcal E_{\rm per}(Y,X)=\frac{1}{2k^2}\|Y-X\|_{2,h}^2+\frac{c^2}{2}\operatorname{Re}\langle D_+Y,D_+X\rangle_{e,h}. $$ For one normalized Fourier mode $\psi_\ell=\phi_\ell/\sqrt L$ with coefficients $x,y$, put $m=(x+y)/2$ and $v=(y-x)/k$. Reindexing the finite periodic sum gives $\langle D_+p,D_+q\rangle_{e,h}=\langle-\Delta_hp,q\rangle_{2,h}$. Thus [F3] gives $\|D_+\psi_\ell\|_{e,h}^2=4h^{-2}s_\ell$, while [F4] gives orthogonality; the $N$ nonzero orthogonal vectors form a basis of the $N$-dimensional space $\mathbb C^{J_N}$. By [F5] they are normalized by $\sqrt L$. Since $x=m-kv/2$ and $y=m+kv/2$, $\operatorname{Re}(y\overline{x})=|m|^2-k^2|v|^2/4$. Summing these diagonal contributions using [F6] gives the modal energy $$ \frac12(1-\nu^2s_\ell)|v|^2+2c^2h^{-2}s_\ell|m|^2. $$ At $\nu=1$, $0\le s_\ell\le1$, so every modal term is nonnegative, while the Nyquist velocity coefficient is zero. Orthogonal Fourier decomposition makes $\mathcal E_{\rm per}$ semidefinite. [F3, F4, F5, F6, algebra]

1.4 Set the real amplitude $A=1$ and take $X=A\phi_{N/2}$ and $Y=-X$. Then $X\ne0$, $\|Y-X\|^2=4\|X\|^2$, and $\langle D_+Y,D_+X\rangle_{e,h}=-4h^{-2}\|X\|^2$, so $$ \mathcal E_{\rm per}(-X,X)=\frac{2}{k^2}(1-\nu^2)\|X\|_{2,h}^2. $$ It is zero at $\nu=1$ and negative at $\nu>1$. [F3, F5, F6, algebra]

2.1 The state $(Y,X)=(0,X)$ has $\mathcal E_{\rm per}(0,X)=\|X\|_{2,h}^2/(2k^2)>0$. Together with step 1.4, this shows that the form is indefinite for $\nu>1$. [F5, step 1.4, algebra] ∎
