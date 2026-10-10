---
id: lem-em-rectangle-mode-profile-identities
kind: lemma
domain: mathematics
title: "The separated sine and cosine rectangle profiles: eigen-identities, boundary traces, orthogonality and Dirichlet integrals"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, def-multidimensional-rectangle-and-volume, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-riemann-fubini-on-product-rectangles, thm-ftc-second-part, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, thm-algebra-of-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-directional-and-partial-derivatives: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zurich, 2024 FS (German), Chapter 13 'Wellenleiter' and 'Kavitaeten', PDF pp. 153-162 (printed pp. 13.1-13.10); complete 176-page author-hosted PDF and official TeX read, with the conjugate-error in (13.26), the 'Wendepunkt' mislabel and the general group-velocity restriction recorded as source defects not copied"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin, 2006-02-02), node 105 'Wave-guides', complete author-hosted HTML node read in the run's pinned full-notes snapshot"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node105.html"
    - title: "D. J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596-page full scan), sections 9.5.1-9.5.3 printed pp. 405-412 (wave guides, TE waves in a rectangular wave guide, coaxial transmission line), read in the stamped full text; OCR noise cross-checked against the other treatments"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $L_1,L_2>0$ and $R:=(0,L_1)\times(0,L_2)$. For integers $m,n\ge0$ put $h_{mn}(x_1,x_2):=\cos\bigl(\frac{m\pi x_1}{L_1}\bigr)\cos\bigl(\frac{n\pi x_2}{L_2}\bigr)$ and $k_{mn}^2:=\bigl(\frac{m\pi}{L_1}\bigr)^2+\bigl(\frac{n\pi}{L_2}\bigr)^2$; for integers $m,n\ge1$ put $e_{mn}(x_1,x_2):=\sin\bigl(\frac{m\pi x_1}{L_1}\bigr)\sin\bigl(\frac{n\pi x_2}{L_2}\bigr)$. Then, with $\Delta=\partial_1^2+\partial_2^2$, $\nabla=(\partial_1,\partial_2)$ and the Riemann integrals over the rectangle of [[def-multidimensional-rectangle-and-volume]]:
(a) $\Delta h_{mn}=-k_{mn}^2h_{mn}$ on $R$ and $\partial_1h_{mn}=0$ on both faces $x_1\in\{0,L_1\}$, $\partial_2h_{mn}=0$ on both faces $x_2\in\{0,L_2\}$; hence $\partial_nh_{mn}=0$ on every open face of $\partial R$;
(b) $\Delta e_{mn}=-k_{mn}^2e_{mn}$ on $R$ and $e_{mn}=0$ on $\partial R$ for $m,n\ge1$;
(c) [orthogonality and norms] $\int_Rh_{mn}h_{m'n'}=0$ unless $(m,n)=(m',n')$, and $\int_Rh_{mn}^2=\frac{L_1L_2}{4}(1+\delta_{m0})(1+\delta_{n0})$; $\int_Re_{mn}e_{m'n'}=0$ unless $(m,n)=(m',n')$, and $\int_Re_{mn}^2=\frac{L_1L_2}{4}$ for $m,n\ge1$; the mixed integrals are instead $$\int_Rh_{mn}e_{pq}=J_{mp}(L_1)J_{nq}(L_2),\qquad J_{mp}(L):=\int_0^L\cos(m\pi x/L)\sin(p\pi x/L)\,dx,$$ for $m,n\ge0$, $p,q\ge1$. Here $J_{mp}(L)=0$ when $m,p$ have matching parity (including $p=m$), and $J_{mp}(L)=2pL/[\pi(p^2-m^2)]$ when their parities differ. In particular $\int_Rh_{00}e_{11}=4L_1L_2/\pi^2$, so the sine and cosine systems are not mutually orthogonal;
(d) [Dirichlet-type identities] $\int_R|\nabla h_{mn}|^2=k_{mn}^2\int_Rh_{mn}^2$ for all $m,n\ge0$ and $\int_R|\nabla e_{mn}|^2=k_{mn}^2\int_Re_{mn}^2$ for $m,n\ge1$.

## Facts & Assumptions

**Given:** Positive reals $L_1,L_2$, the rectangle $R=(0,L_1)\times(0,L_2)$, and the profiles $h_{mn}$ ($m,n\ge0$), $e_{mn}$ ($m,n\ge1$) of the Statement.

[F1] For an open $U\subseteq\mathbb R^2$ and $f:U\to\mathbb R$, $\partial_jf(a)=D_{e_j}f(a)$ is the $j$th partial derivative, computed by restricting to coordinate lines ([[def-directional-and-partial-derivatives]]), and for $f\in C^2$ the Laplacian is $\Delta f=\operatorname{div}\nabla f=\partial_1\partial_1f+\partial_2\partial_2f$ ([[def-laplacian-of-a-c2-function]]).

[F2] $[a,b]=\{x:a_j\le x_j\le b_j\}$ with $\operatorname{vol}[a,b]=\prod_j(b_j-a_j)$, and $[a,b]$ is nondegenerate when every $a_j<b_j$ ([[def-multidimensional-rectangle-and-volume]]); every continuous real function on a closed nondegenerate rectangle is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]); and for $f$ Riemann integrable on a product $A\times B$, the section-integral functions are integrable and $\int_{A\times B}f=\int_A\int_Bf_x$ whenever the inner sections are integrable ([[thm-riemann-fubini-on-product-rectangles]]).

[F3] If $G:[a,b]\to\mathbb R$ is differentiable on $[a,b]$ and $G'$ is integrable there, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F4] $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ on $\mathbb R$, with $\sin0=0$, $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]); derivatives of sums, scalar multiples and products obey the sum, scalar and product rules ([[thm-algebra-of-derivatives]]); and composites of totally differentiable maps obey the chain rule ([[thm-chain-rule-for-total-derivatives]]), which applies to the affine maps $x_j\mapsto\frac{m\pi x_j}{L_j}$ and $x_j\mapsto\frac{n\pi x_j}{L_j}$.

[F5] $\sin(k\pi)=0$ and $\cos(k\pi)=(-1)^k$ for every integer $k$, and $\sin0=0$, $\cos0=1$: the zero sets, period and special values of sine and cosine ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F6] For all real $A,B$, $\sin(A+B)=\sin A\cos B+\cos A\sin B$ and $\cos(A+B)=\cos A\cos B-\sin A\sin B$ ([[thm-sine-and-cosine-addition-formulas]]), hence the product-to-sum identities $$\cos A\cos B=\tfrac12[\cos(A-B)+\cos(A+B)],\qquad \sin A\sin B=\tfrac12[\cos(A-B)-\cos(A+B)],\qquad \sin A\cos B=\tfrac12[\sin(A+B)+\sin(A-B)].$$



## Proof

**Proof technique:** direct: differentiate the products, then integrate the resulting continuous one-variable functions by product-to-sum, the fundamental theorem and Fubini.

1.1 [First derivatives and traces] Let $m,n\ge0$ and $x\in R$. The partial derivatives of the cosine products are $\partial_1h_{mn}(x)=-\frac{m\pi}{L_1}\sin\bigl(\frac{m\pi x_1}{L_1}\bigr)\cos\bigl(\frac{n\pi x_2}{L_2}\bigr)$ and $\partial_2h_{mn}(x)=-\frac{n\pi}{L_2}\cos\bigl(\frac{m\pi x_1}{L_1}\bigr)\sin\bigl(\frac{n\pi x_2}{L_2}\bigr)$: fix the other coordinate and apply the chain rule to $x_j\mapsto\cos\bigl(\frac{m\pi x_j}{L_j}\bigr)$ composed with the affine map, i.e. the derivative $-\sin\cdot\,\frac{m\pi}{L_j}$, together with the product rule. Evaluating with [F5] gives $\partial_1h_{mn}(0,x_2)=\partial_1h_{mn}(L_1,x_2)=0$ and $\partial_2h_{mn}(x_1,0)=\partial_2h_{mn}(x_1,L_2)=0$. Similarly, for $m,n\ge1$, $\partial_1e_{mn}(x)=\frac{m\pi}{L_1}\cos\bigl(\frac{m\pi x_1}{L_1}\bigr)\sin\bigl(\frac{n\pi x_2}{L_2}\bigr)$, $\partial_2e_{mn}(x)=\frac{n\pi}{L_2}\sin\bigl(\frac{m\pi x_1}{L_1}\bigr)\cos\bigl(\frac{n\pi x_2}{L_2}\bigr)$, and $e_{mn}=0$ on $\partial R$ because a sine factor vanishes whenever $x_1\in\{0,L_1\}$ or $x_2\in\{0,L_2\}$. [given, F1, F4, F5, algebra]

1.2 [One-dimensional orthogonality and norms] Let $m,m'\ge0$ and $p,p'\ge1$ be integers. By [F6], $\cos(m\pi x/L)\cos(m'\pi x/L)=\frac12\bigl[\cos\bigl(\frac{(m-m')\pi x}{L}\bigr)+\cos\bigl(\frac{(m+m')\pi x}{L}\bigr)\bigr]$, so the second fundamental theorem [F3] applied to the continuous antiderivatives, together with the integer values [F5], gives $\int_0^L\cos\frac{m\pi x}{L}\cos\frac{m'\pi x}{L}\,dx=0$ for $m\ne m'$, $=\frac{L}{2}$ for $m=m'\ge1$ and $=L$ for $m=m'=0$; uniformly $\int_0^L\cos\frac{m\pi x}{L}\cos\frac{m'\pi x}{L}\,dx=\delta_{mm'}\frac{L}{2}(1+\delta_{m0})$. Likewise $\int_0^L\sin\frac{p\pi x}{L}\sin\frac{p'\pi x}{L}\,dx=\frac{L}{2}\delta_{pp'}$, because $\sin\frac{p\pi x}{L}\sin\frac{p'\pi x}{L}=\frac12\bigl[\cos\frac{(p-p')\pi x}{L}-\cos\frac{(p+p')\pi x}{L}\bigr]$ and every nonzero integer multiple of $\pi$ is a zero of sine (and the case $p=p'$ leaves the constant $1$ in the first term). [F3, F5, F6, algebra]

2.1 [Eigen-identities] Differentiating the formulas of step 1.1 once more in the same coordinate gives $\partial_1^2h_{mn}=-\bigl(\frac{m\pi}{L_1}\bigr)^2h_{mn}$ and $\partial_2^2h_{mn}=-\bigl(\frac{n\pi}{L_2}\bigr)^2h_{mn}$ on $R$, so $\Delta h_{mn}=-k_{mn}^2h_{mn}$ by [F1]; the same computation gives $\partial_1^2e_{mn}=-\bigl(\frac{m\pi}{L_1}\bigr)^2e_{mn}$, $\partial_2^2e_{mn}=-\bigl(\frac{n\pi}{L_2}\bigr)^2e_{mn}$ and $\Delta e_{mn}=-k_{mn}^2e_{mn}$. Since each open face of $\partial R$ carries one of the normals $\pm e_1,\pm e_2$ and the corresponding normal derivative $\partial_1h_{mn}$ or $\partial_2h_{mn}$ vanishes on it by step 1.1, clause (a) and clause (b) hold. [step 1.1, F1, F4, algebra]

2.2 [Rectangle orthogonality, norms and mixed integrals] Each of the functions $h_{mn}h_{m'n'}$, $e_{mn}e_{m'n'}$ and $h_{mn}e_{pq}$ is continuous on the closed rectangle $\overline R=[0,L_1]\times[0,L_2]$, hence Riemann integrable there by [F2]; their sections in each coordinate are continuous, hence integrable. Fubini's theorem [F2] therefore factorizes each integral into a product of one-dimensional integrals. By step 1.2, $\int_Rh_{mn}h_{m'n'}=\frac{L_1L_2}{4}(1+\delta_{m0})(1+\delta_{n0})$ if $(m,n)=(m',n')$ and $=0$ otherwise, and $\int_Re_{mn}e_{m'n'}=\frac{L_1L_2}{4}$ if $(m,n)=(m',n')$ and $=0$ otherwise. For the mixed integral, $\int_Rh_{mn}e_{pq}=J_{mp}(L_1)J_{nq}(L_2)$ with the stated $J_{mp}$. [step 1.2, F2, algebra]

3.1 [Evaluation of $J$] Let $m\ge0$, $p\ge1$ and $L>0$. By [F6], $\cos\frac{m\pi x}{L}\sin\frac{p\pi x}{L}=\frac12\bigl[\sin\frac{(p+m)\pi x}{L}+\sin\frac{(p-m)\pi x}{L}\bigr]$. If $p=m$, the second sine vanishes identically and the integral of the first over $[0,L]$ is $\frac{L}{2\pi m}\bigl(1-\cos(2m\pi)\bigr)=0$ by the fundamental theorem [F3] and [F5] (here $m=p\ge1$); thus $J_{mm}=0$. If $p\ne m$, the fundamental theorem gives $J_{mp}=\frac{L}{2\pi}\Bigl[\frac{1-\cos((p+m)\pi)}{p+m}+\frac{1-\cos((p-m)\pi)}{p-m}\Bigr]=\frac{L}{2\pi}\bigl(1-(-1)^{p+m}\bigr)\Bigl[\frac{1}{p+m}+\frac{1}{p-m}\Bigr]=\frac{pL}{\pi(p^2-m^2)}\bigl(1-(-1)^{p+m}\bigr)$, using $\cos(k\pi)=(-1)^k$ and $\frac{1}{p+m}+\frac{1}{p-m}=\frac{2p}{p^2-m^2}$. Hence $J_{mp}=0$ when $m,p$ have matching parity (the case $p=m$ included) and $J_{mp}=\frac{2pL}{\pi(p^2-m^2)}$ when their parities differ. In particular $J_{01}(L)=\frac{2L}{\pi}$ for $L=L_1,L_2$, so $\int_Rh_{00}e_{11}=J_{01}(L_1)J_{01}(L_2)=\frac{4L_1L_2}{\pi^2}$. [step 2.2, F3, F5, F6, algebra]

4.1 [Dirichlet-type identities] Fix $x_2\in(0,L_2)$ and put $G_1(x_1):=h_{mn}(x_1,x_2)\partial_1h_{mn}(x_1,x_2)$ on $[0,L_1]$. By the product rule [F4], $G_1$ is differentiable on $[0,L_1]$ with $G_1'=(\partial_1h_{mn})^2+h_{mn}\partial_1^2h_{mn}$, a continuous hence integrable function, and $G_1(0)=G_1(L_1)=0$ by step 1.1; the fundamental theorem [F3] gives $\int_0^{L_1}\bigl[(\partial_1h_{mn})^2+h_{mn}\partial_1^2h_{mn}\bigr]dx_1=0$. The same argument in the second coordinate, and step 2.1 (respectively step 1.1 for the vanishing trace), give $\int_0^{L_2}\bigl[(\partial_2h_{mn})^2+h_{mn}\partial_2^2h_{mn}\bigr]dx_2=0$, and the identical argument with $e_{mn}$ in place of $h_{mn}$ gives $\int_0^{L_1}\bigl[(\partial_1e_{mn})^2+e_{mn}\partial_1^2e_{mn}\bigr]dx_1=0$ and its second-coordinate counterpart, the boundary terms vanishing because $e_{mn}$ is zero on $\partial R$. Integrating the resulting pointwise identities over the rectangle against the other coordinate and applying Fubini [F2] (all integrands are continuous on $\overline R$), then substituting $\partial_1^2h_{mn}=-\bigl(\frac{m\pi}{L_1}\bigr)^2h_{mn}$, $\partial_2^2h_{mn}=-\bigl(\frac{n\pi}{L_2}\bigr)^2h_{mn}$ and the analogous two identities for $e_{mn}$ from step 2.1, yields both statements of clause (d). [step 1.1, step 2.1, F2, F3, F4, algebra] ∎
