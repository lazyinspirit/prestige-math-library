---
id: thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential
kind: theorem
title: "A divergence-free $C^1$ field on a star-shaped open subset of $\\mathbb R^3$ has a vector potential"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-potential-of-a-c1-vector-field, def-divergence-and-curl-of-a-c1-vector-field, lem-the-divergence-and-curl-of-a-cross-product, def-star-shaped-open-subset-of-rn, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-newton-leibniz-with-interior-derivative, thm-continuous-partial-derivatives-imply-total-differentiability, def-cross-product-in-r3, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-algebra-of-derivatives, thm-heine-cantor-metric, lem-uniform-integral-error-bound, thm-heine-borel-rn, thm-continuous-implies-integrable]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.1.16"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^3$ be open and star-shaped with star centre $a$, and let $B:U\to\mathbb R^3$ be $C^1$ with $\operatorname{div}B=0$ on $U$. Then $B$ has a vector potential on $U$ in the sense of [[def-vector-potential-of-a-c1-vector-field]]: the map

$$A(x):=\int_0^1t\,B\bigl(a+t(x-a)\bigr)\times(x-a)\,dt\qquad(x\in U),$$

understood coordinatewise, is $C^1$ on $U$ and satisfies $\operatorname{curl}A=B$.

## Facts & Assumptions

**Given:** The star-shaped open set $U\subseteq\mathbb R^3$ with centre $a$, and the $C^1$ field $B:U\to\mathbb R^3$ with $\operatorname{div}B=0$ on $U$. Throughout, $w:=x-a$ and $z_t:=a+tw$.

[F1] Given a continuous $B$ on an open $U\subseteq\mathbb R^3$, a map $A$ is a **vector potential** for $B$ when $A$ is $C^1$ on $U$ and $\operatorname{curl}A=B$ ([[def-vector-potential-of-a-c1-vector-field]]).

[F2] A nonempty open $U\subseteq\mathbb R^n$ is star-shaped with respect to $a\in U$ when $a+t(x-a)\in U$ for every $x\in U$ and $0\le t\le1$ ([[def-star-shaped-open-subset-of-rn]]).

[F3] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]).

[F4] The divergence of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^n$ is $\operatorname{div}F=\sum_{i<n}\partial_iF_i$, and for $n=3$ its curl is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F5] If every partial derivative $\partial_jf_i(a)$ of $f$ exists, the Jacobian matrix is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$ ([[def-jacobian-matrix-and-gradient]]).

[L1] For $C^1$ fields $F,G$ on an open subset of $\mathbb R^3$, $\operatorname{curl}(F\times G)=(\operatorname{div}G)F-(\operatorname{div}F)G+DF\,G-DG\,F$ ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[L2] Let $\alpha<\beta$ and $c<d$, let $g,h:[\alpha,\beta]\times[c,d]\to\mathbb R$ be continuous, and suppose for every fixed $t$ that $s\mapsto g(s,t)$ is differentiable on $(\alpha,\beta)$ with derivative $h(s,t)$. Then $G(s)=\int_c^dg(s,t)\,dt$ is differentiable on $[\alpha,\beta]$ with $G'(s)=\int_c^dh(s,t)\,dt$ ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[L3] If $G$ is continuous on $[\alpha,\beta]$ and differentiable on $(\alpha,\beta)$, and $f$ is Riemann integrable on $[\alpha,\beta]$ with $f=G'$ on $(\alpha,\beta)$, then $\int_\alpha^\beta f=G(\beta)-G(\alpha)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[L4] If $f$ is totally differentiable at $p$ and $g$ at $f(p)$, then $D(g\circ f)(p)=Dg(f(p))\circ Df(p)$ ([[thm-chain-rule-for-total-derivatives]]).

[L5] If $f$ is totally differentiable at $p$ then $D_vf(p)=Df(p)v$ for every $v$; in particular $\partial_jf(p)=Df(p)e_j$, and the matrix of $Df(p)$ is $Jf(p)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L6] If every partial derivative of $f$ exists on a neighbourhood of $p$ and is continuous at $p$, then $f$ is totally differentiable at $p$ and $Df(p)$ is the linear map with matrix $Jf(p)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L7] For real functions of one real variable differentiable at a point, $fg$ is differentiable there and $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

[L8] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]); a closed bounded subset of $\mathbb R^m$ is compact ([[thm-heine-borel-rn]]).

[L9] If $f$ and $g$ are integrable between $u$ and $v$ and $|f-g|\le\eta$ throughout the closed interval with those endpoints, then $\bigl|\int_u^vf-\int_u^vg\bigr|\le\eta\,|v-u|$ ([[lem-uniform-integral-error-bound]]); a continuous function on a closed bounded interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

## Proof

**Proof technique:** constructive.

1.1 Take $A$ to be the map displayed in the Statement. By [F2] every $z_t=a+tw$ with $0\le t\le1$ lies in $U$ when $x\in U$, so $B(z_t)$ is defined there; by [L9] each coordinate of the integrand, being continuous in $t$, is integrable on $[0,1]$, so $A(x)$ is defined for every $x\in U$. [given, F2, L9, construct]

1.2 By [F3] each coordinate of $t\,B(z_t)\times w$ is a sum of terms $\pm t\,B_k(z_t)w_l$. The map $(x,t)\mapsto z_t$ is continuous, so each such term is continuous in $(x,t)$; and since $B$ is $C^1$, [L6], [L4] and [L5] give $\partial_j\bigl(B_k(z_t)\bigr)=t\,(\partial_jB_k)(z_t)$, which is again continuous in $(x,t)$, while $\partial_jw_l$ is $1$ if $l=j$ and $0$ otherwise. Hence each coordinate of the integrand has, in each coordinate of $x$, a partial derivative that is continuous in $(x,t)$. [given, F3, L4, L5, L6]

2.1 Fix $p\in U$, choose a closed box $Q\subseteq U$ with $p$ in its interior, and fix indices $i,j$. Applying [L2] with $[\alpha,\beta]$ the $j$th edge of $Q$, the other coordinates of $x$ held at those of $p$, and $[c,d]=[0,1]$, using step 1.2 for the continuity of $g$ and $h$ and for the derivative hypothesis, gives that $\partial_jA_i$ exists at $p$ with $\partial_jA_i(p)=\int_0^1\partial_j\bigl(t\,(B(z_t)\times w)_i\bigr)\,dt$. The set $Q\times[0,1]$ is closed and bounded in $\mathbb R^4$, hence compact by [L8], so the integrand of that formula is uniformly continuous on it by [L8]; given $\varepsilon>0$ this supplies $\delta>0$ such that points of $Q$ within $\delta$ make the two integrands differ by at most $\varepsilon$ at every $t$, and [L9] then bounds the difference of the two integrals by $\varepsilon$. So $\partial_jA_i$ is continuous on the interior of $Q$, and as $p$ was arbitrary, $A$ is $C^1$ on $U$ and $\operatorname{curl}A$ is defined by [F4] and [F5]. [step 1.2, L2, L6, L8, L9, F4, F5]

2.2 Fix $t$ with $0\le t\le1$ and consider the two fields $x\mapsto B(z_t)$ and $x\mapsto w=x-a$ on $U$. For the first, step 1.2 gives $\partial_j\bigl(B_k(z_t)\bigr)=t\,(\partial_jB_k)(z_t)$, so by [F5] its Jacobian matrix is $t\,JB(z_t)$ and by [F4] its divergence is $t\sum_{k<3}(\partial_kB_k)(z_t)=t\,(\operatorname{div}B)(z_t)=0$. For the second, $\partial_jw_l$ is $1$ if $l=j$ and $0$ otherwise, so its Jacobian matrix is the identity and its divergence is $3$; both fields are $C^1$ since these derivatives are continuous. [step 1.1, L4, L5, F4, F5, given]

3.1 Applying [L1] to those two fields at a fixed $t$, and multiplying by $t$, gives $$\operatorname{curl}_x\bigl(t\,B(z_t)\times w\bigr)=t\bigl(3B(z_t)-0\cdot w+t\,JB(z_t)w-B(z_t)\bigr)=2t\,B(z_t)+t^2\,JB(z_t)w,$$ where by step 2.2 the term $(\operatorname{div}G)F$ contributes $3B(z_t)$, the term $-(\operatorname{div}F)G$ contributes $0$, the term $DF\,G$ contributes $t\,JB(z_t)w$ and the term $-DG\,F$ contributes $-B(z_t)$. At $x=a$ this reads $0=0$ in the second and fourth terms, since $w=0$ there. [step 2.2, L1, F3, algebra]

4.1 By [F4] each coordinate of $\operatorname{curl}A$ is a difference of two of the partial derivatives produced in step 2.1, and each of those is an integral over $[0,1]$; subtracting the two integrals and using step 3.1 for the resulting integrand gives $$\operatorname{curl}A(x)=\int_0^1\bigl(2t\,B(z_t)+t^2\,JB(z_t)w\bigr)\,dt,$$ again coordinatewise. [step 2.1, step 3.1, L2]

5.1 For fixed $x$, put $\Gamma(t):=t^2B(z_t)$ on $[0,1]$. The map $t\mapsto z_t$ is differentiable with derivative $w$, and $B$ is totally differentiable by [L6], so [L4] and [L5] give $\frac{d}{dt}B(z_t)=DB(z_t)w=JB(z_t)w$; with [L7] applied to the product of $t^2$ and each coordinate of $B(z_t)$ this yields $\Gamma'(t)=2t\,B(z_t)+t^2\,JB(z_t)w$, the integrand of step 4.1, which is continuous on $[0,1]$ and hence integrable by [L9]. [step 3.1, L7, L4, L5, L6, L9]

6.1 By step 5.1 the function $\Gamma$ is continuous on $[0,1]$ and differentiable there, and its derivative is the integrand of step 4.1, so [L3] applied coordinate by coordinate on $[0,1]$ evaluates that integral as $\Gamma(1)-\Gamma(0)=1^2B(z_1)-0^2B(z_0)=B(x)$, using $z_1=x$ and the factor $t^2$ at $t=0$. [step 4.1, step 5.1, L3]

7.1 Steps 4.1 and 6.1 give $\operatorname{curl}A=B$ on $U$, and step 2.1 gives that $A$ is $C^1$ on $U$; by [F1] the constructed $A$ is a vector potential for $B$. [step 2.1, step 6.1, F1, discharge-construct: the displayed formula] ∎

## Remarks

- **Where each hypothesis enters.** Star-shapedness is used exactly once, in step 1.1, to know that the segment from the centre to $x$ stays in $U$ so that the integral is defined. The vanishing of $\operatorname{div}B$ is used exactly once, in step 2.2, to kill the term $-(\operatorname{div}F)G$; without it the curl of $A$ would carry an extra term $-t^2(\operatorname{div}B)(z_t)\,w$ and the integrand would not be an exact derivative in $t$.

- **The potential is not unique and the formula is not canonical.** Adding the gradient of any $C^2$ function leaves the curl unchanged by [[thm-the-curl-of-a-gradient-vanishes]], so the displayed $A$ is one witness among many; it is the one that vanishes at the star centre.
