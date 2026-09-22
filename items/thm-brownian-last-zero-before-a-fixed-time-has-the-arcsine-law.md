---
id: thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law
kind: theorem
title: "The last Brownian zero has the arcsine law"
status: draft
origin: pipeline
deps: [def-brownian-zero-set, thm-brownian-future-path-markov-property, cor-law-of-the-brownian-maximum, def-brownian-motion, def-standard-normal-and-normal-laws, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-c-one-change-of-variables-for-l-one-functions, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-monotone-convergence-for-the-integral, lem-probability-measure-basic-identities, thm-probability-law-and-distribution-function-correspondence, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Example 7.4.3 and equation (7.4.7)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. Let B be a standard Brownian motion and use the everywhere-continuous, zero-start representative $\widehat B$ fixed by [[def-brownian-zero-set]]. For t>0 put
$$L_t=\max\{s\in[0,t]:\widehat B_s=0\}.$$
This is a random variable and, for $0\le u\le t$,
$$P(L_t\le u)=\frac2\pi\arcsin\sqrt{u/t}.$$
Consequently $L_t/t$ has density $1/(\pi\sqrt{x(1-x)})$ on (0,1), with no mass at either endpoint. On the supplied measurable full event of all-time agreement, this maximum is also the last zero of the original B. The distribution is independent of the normalized representative.

## Facts & Assumptions

**Given:** AC, B and its normalized representative, and t>0.

[F1] The normalized zero set is closed, contains zero, and agrees with the original zero set on a measurable full event; its normalized coordinates are measurable. [[def-brownian-zero-set]]

[F2] For a bounded product-measurable future functional G and deterministic u, its conditional expectation given the raw Brownian past is the Borel function $x\mapsto\int G(x+w)\mu(dw)$ evaluated at B_u, where mu is Wiener measure on continuous paths. [[thm-brownian-future-path-markov-property]]

[F3] For normalized Brownian motion W and s>0, its maximum has continuous distribution $P(M_s\le x)=2\Phi(x/\sqrt s)-1$ for x>=0. [[cor-law-of-the-brownian-maximum]]

[F4] B_u has law N(0,u) for u>0: its increment from zero has that law and B_0=0 almost surely. This law is the pushforward of $\varphi(z)dz$ under z mapped to sqrt(u)z, where $\varphi(z)=e^{-z^2/2}/\sqrt{2\pi}$. Negation preserves all independent centered Gaussian increments and continuity, so -W is Brownian as well. [[def-brownian-motion]] [[def-standard-normal-and-normal-laws]]

[F5] Tonelli for nonnegative product-measurable functions on sigma-finite spaces. One-dimensional C1 diffeomorphisms transport integrable functions with their absolute derivative. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[cor-c-one-change-of-variables-for-l-one-functions]]

[F6] Absolutely continuous functions obey the Lebesgue fundamental theorem; monotone convergence exhausts nonnegative integrals. Every C1 function on a compact interval is Lipschitz by its bounded derivative and the mean value theorem, hence absolutely continuous directly from the definition. [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] [[thm-monotone-convergence-for-the-integral]]

[F7] Probability is continuous along increasing or decreasing sequences of events, and a Borel probability law is uniquely determined by its distribution function. [[lem-probability-measure-basic-identities]] [[thm-probability-law-and-distribution-function-correspondence]]

[F8] Full AC is inherited from the Brownian and conditional-expectation interfaces and directly supplies all dependent or countable witness choices used by the integration and distribution interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 By [F1], the zero set in [0,t] is nonempty compact, so its maximum exists and lies in [0,t]. For 0<v<=t, the event L_t<v is exactly that the path has no zero in [v,t]. For v<t this is the event that the infimum of $|\widehat B_r|$ over $(\mathbb Q\cap[v,t])\cup\{v,t\}$ is positive, since this dense infimum equals the attained compact minimum. For v=t it is simply $|\widehat B_t|>0$. Both are measurable; the cases v<=0 and v>t are empty and whole. Thus L_t is measurable. [F1]

2.1 Fix 0<u<t and s=t-u. Define the bounded product-measurable functional $G(w)=1_{\{\inf_{r\in(\mathbb Q\cap[0,s])\cup\{s\}}|w(r)|>0\}}$. On continuous paths it is the indicator of no zero in [0,s]. On the common full event in [F1], and outside {B_u=0}, the indicator of L_t<=u equals G applied to the original future $(B_{u+r})_{r\ge0}$. The excluded event has probability zero by [F4], since the normal density gives zero mass to a singleton. Taking expectations in [F2] therefore gives $P(L_t\le u)=E\Psi(B_u)$, where $\Psi(x)=\int G(x+w)\mu(dw)$. No all-time event on the full cylinder space or shifted hitting law is used. [F1, F2, F4, step 1.1]

3.1 For x>0 a continuous zero-start W makes x+W zero-free on [0,s] precisely when it stays positive there, or equivalently when the maximum of -W is strictly less than x. By [F3] and [F4], $\Psi(x)=2\Phi(x/\sqrt s)-1$; strict versus weak inequality makes no difference because the maximum law has no atom at x. For x<0 apply the same argument to -x-W. At x=0, G(x+W)=0 since W_0=0, also agreeing with $2\Phi(0)-1=0$ by symmetry of the normal density. Hence $\Psi(x)=2\Phi(|x|/\sqrt s)-1$ for every x. [F3, F4, step 2.1]

4.1 Using the pushforward law in [F4], not an unproved density transformation, step 3.1 gives $P(L_t\le u)=I(a)$, where $a=\sqrt{u/(t-u)}>0$ and $I(a)=\int_{\mathbb R}(2\Phi(a|z|)-1)\varphi(z)dz$. Symmetry of the even density gives $I(a)=4\int_0^\infty\varphi(z)\int_0^{az}\varphi(y)dy\,dz$. For fixed z>0, apply [F5] to the diffeomorphism v mapped to zv from (0,a) onto (0,az); the normal density is integrable on this bounded interval. Thus the inner integral equals $\int_0^a z\varphi(zv)dv$. Endpoints have Lebesgue measure zero. [F4, F5, step 2.1, step 3.1]

5.1 Tonelli [F5] now gives $I(a)=\frac2\pi\int_0^a\int_0^\infty z e^{-(1+v^2)z^2/2}dz\,dv$. The explicit primitive $-e^{-(1+v^2)z^2/2}/(1+v^2)$ on [0,R], followed by monotone convergence R increasing to infinity, makes the inner integral $1/(1+v^2)$. The primitive arctan(v) on [0,a] therefore gives $I(a)=2\arctan(a)/\pi$ by [F6]. Since a>0, the angle arctan(a) is in (0,pi/2) and has sine $a/\sqrt{1+a^2}=\sqrt{u/t}$; hence it equals arcsin(sqrt(u/t)). This proves the asserted formula for 0<u<t without a polar substitution. [F5, F6, step 4.1]

6.1 Since 0<=L_t<=t, its distribution function equals one at t. Decreasing u to zero and increasing u to t through explicit sequences in (0,t), [F7] and step 5.1 give $P(L_t=0)=0$ and $P(L_t<t)=1$. Thus there is no atom at t either, and both endpoint values of the formula follow. [F7, step 1.1, step 5.1]

7.1 Put $H(v)=2\arcsin(\sqrt v)/\pi$ for 0<v<1. Its derivative is $f(v)=1/(\pi\sqrt{v(1-v)})>0$. On every compact subinterval of (0,1), H is C1, so [F6] gives $\int_b^c f=H(c)-H(b)$. Let b decrease to zero and c increase to one. Monotone convergence gives total integral one and $\int_0^v f=H(v)$. Extend f by zero off (0,1). The probability measure with this density has the same distribution function as L_t/t by steps 5.1 and 6.1, and uniqueness in [F7] identifies the laws. [F6, F7, step 5.1, step 6.1]

8.1 On the supplied measurable full event, the original B and normalized process have identical zero sets and hence identical last zeros. Two permitted normalized representatives agree on the intersection of their supplied full events, so give the same distribution. No measurability of the original last-zero functional on exceptional paths is asserted. The assumption t>0 is essential to the ratio; u=0,t and x=0 were handled separately. AC is used exactly through [F8]; the exhaustion sequences are fixed. [F1, F8, step 1.1, step 3.1, step 6.1, step 7.1] ∎

## Source notes

Durrett, Example 7.4.3, printed p.374, equation (7.4.7), proves the last-zero law by conditioning and a nonnegative iterated integral. Here the equivalent Gaussian integral is evaluated by one-dimensional substitution and Tonelli. The normalized zero-set convention and endpoint/density justifications are explicit.
