---
id: pthm-cmp4-kklt-susy-ads-critical-point
kind: physics-theorem
title: Supersymmetric AdS critical point in the one-modulus KKLT EFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 15
domain: physics
library: physics
category: string-theory
deps:
  - def-cmp4-compactification-derived-moduli-eft-data
  - def-cmp4-gkp-single-overall-kahler-modulus-coordinate
  - post-four-dimensional-n1-matter-coupled-supergravity
  - pthm-four-dimensional-n1-fd-scalar-potential
  - def-real-exponential-function-and-e
  - def-series
  - lem-limit-preserves-order
  - thm-derivative-of-exponential
  - cor-exponential-reciprocal-and-positivity
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - cor-mean-value-theorem
  - thm-intermediate-value
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-exponential-addition-formula
dependency_roles:
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
  def-cmp4-gkp-single-overall-kahler-modulus-coordinate: formulation-prerequisite
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  pthm-four-dimensional-n1-fd-scalar-potential: physical-result
  def-real-exponential-function-and-e: mathematical-premise
  def-series: mathematical-premise
  lem-limit-preserves-order: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
physical_scope: "Conditional one-complex-modulus, two-derivative four-dimensional N=1 Einstein-frame EFT in Planck units, on the real axion branch and with no D-term or other potential contribution. It proves an EFT critical point only; flux quantization, instanton or condensate realization, correction control, scale separation, and stability are not established."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Shamit Kachru, Renata Kallosh, Andrei Linde, and Sandip P. Trivedi, de Sitter Vacua in String Theory, arXiv:hep-th/0301240v2"
      url: "https://arxiv.org/pdf/hep-th/0301240v2"
      locator: "§II.C, equations (11)–(14), printed pp. 3–4; one-modulus supersymmetric AdS calculation and its controlled-regime caveats."
    - title: "Jan Louis, Introduction to String Phenomenology, University of Hamburg preliminary lecture notes"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf"
      locator: "Full 89-page PDF; §8.2, printed pp. 41–42, and §8.3, pp. 42–43; no-scale background and KKLT/LVS moduli-stabilization overview."
    - title: "Liam McAllister and Fernando Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§4.1, printed pp. 20–22; KKLT assumptions and the separation between the EFT calculation and string-vacuum control."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
empirical_premises: []
---
## Statement

In Planck units $M_P=1$, consider the one-chiral-field, two-derivative four-dimensional $N=1$ supergravity effective field theory in Einstein frame with $T=\tau+i\theta$, $\tau>0$, $K=-3\log(T+\bar T)$, and $W=W_0+A e^{-aT}$, where $a,A>0$ and $W_0<0$ is real. Define $D_TW=\partial_TW+K_TW$. On the branch $\theta=0$, the equation $D_TW=0$ has a finite solution with $\tau>0$ exactly when $0<-W_0/A<1$, and that solution is unique. At it,

$$
W_0=-Ae^{-a\tau}\left(1+\frac{2a\tau}{3}\right),\qquad W=-\frac{2a\tau}{3}Ae^{-a\tau},\qquad V=-3e^K|W|^2=-\frac{a^2A^2e^{-2a\tau}}{6\tau}<0.
$$

Under the one-overall-modulus coordinate map $T=-i\rho$, this is the same critical locus as $D_\rho W=0$ for $\mathcal K(\rho,\bar\rho)=-3\log[-i(\rho-\bar\rho)]$ and $W=W_0+Ae^{ia\rho}$. This is a conditional four-dimensional EFT critical point, not a claim that flux quantization, instanton zero modes, a localized uplift, or all string corrections realize a controlled compactification.

## Statement references

[Kachru, Kallosh, Linde, and Trivedi, §II.C](https://arxiv.org/pdf/hep-th/0301240v2)

[Louis, §8.2](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf)

[McAllister and Quevedo, §4.1](https://arxiv.org/pdf/2310.20559v1)

## Facts & Assumptions

**Given:** Work on the real branch $\theta=0$, with $T=\tau>0$, in the stated one-field Einstein-frame EFT and in Planck units.

[F1] [[def-cmp4-compactification-derived-moduli-eft-data]] defines a two-derivative four-dimensional Einstein-frame moduli EFT by its retained chiral coordinates, $K,W,f_{AB}$, Planck normalization, truncation domain, and omitted sectors. Its data tuple by itself asserts no critical point, uplift, or scale-separated truncation.

[F2] [[def-cmp4-gkp-single-overall-kahler-modulus-coordinate]] gives the local coordinate $\rho=b/\sqrt2+i e^{4u_E}$ and the map $T=-i\rho$, so $b=0$ gives $\rho=i\tau$ and $T=\tau$. This supplier is restricted to its fixed-reference-metric, constant-warp, large-radius reduction and does not set a global axion period.

[F3] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the local two-derivative four-dimensional Einstein-frame old-minimal $N=1$ framework and defines $D_TW=\partial_TW+K_TW$ when $M_P=1$. It is an adopted model input, not a theorem about all four-dimensional theories.

[F4] [[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]] gives the conditional F-term potential $V_F=e^K(K^{T\bar T}|D_TW|^2-3|W|^2)$ in Planck units. Its auxiliary-square proof establishes this formula under the old-minimal Einstein-frame and Planck conventions adopted by its Postulate; this item uses that formula only as a conditional potential interface.

[F5] [[def-real-exponential-function-and-e]] defines $\exp(x)=\sum_{n=0}^\infty x^n/n!$ and $e=\exp(1)$.

[F6] [[def-series]] defines a convergent series as the limit of its sequence of partial sums.

[F7] [[lem-limit-preserves-order]]: if two real sequences converge and one is eventually no greater than the other, their limits satisfy the same non-strict inequality.

[F8] [[thm-derivative-of-exponential]]: the real exponential is smooth and $\exp'(x)=\exp(x)$.

[F9] [[cor-exponential-reciprocal-and-positivity]]: $\exp(x)>0$ and $\exp(-x)=1/\exp(x)$ for every real $x$.

[F10] [[thm-algebra-of-continuous-functions]]: sums, scalar multiples, and products of continuous real functions are continuous.

[F11] [[thm-algebra-of-derivatives]]: the derivative of a product of differentiable real functions is given by the product rule.

[F12] [[thm-chain-rule]]: if $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $(f\circ g)'(c)=f'(g(c))g'(c)$.

[F13] [[cor-mean-value-theorem]]: for a real function continuous on $[u,v]$ and differentiable on $(u,v)$, some $c\in(u,v)$ satisfies $f(v)-f(u)=f'(c)(v-u)$.

[F14] [[thm-intermediate-value]]: a continuous real function on a closed interval takes each value between its endpoint values.

[F15] [[def-natural-logarithm]] defines $\log:(0,\infty)\to\mathbb R$ as the inverse of the real exponential, so $\exp(\log x)=x$ for $x>0$.

[F16] [[thm-logarithm-derivative-and-integral]] gives $\log'(x)=1/x$ for $x>0$.

[F17] [[thm-exponential-addition-formula]] gives $\exp(u+v)=\exp(u)\exp(v)$ for real $u,v$.

[A1] $A,a$ are fixed positive dimensionless constants, $W_0$ is a fixed negative real parameter, and $K,W$ are exactly the functions in the Statement; no equation for their string-theoretic origin is assumed.

[A2] The only potential term in the retained one-field model is the ungauged F-term potential in [F4]; all other fields are held at their integrated-out EFT values, and this item makes no assertion that their mass hierarchy or backreaction is controlled.

## Proof

1.1 Within the compactification-derived four-dimensional Einstein-frame EFT data [F1], adopt the local old-minimal $N=1$ derivative [F3]. Use the Wirtinger operators $\partial_T=\tfrac12(\partial_\tau-i\partial_\theta)$ and $\partial_{\bar T}=\tfrac12(\partial_\tau+i\partial_\theta)$ on the open half-plane $\tau>0$. The logarithm argument is $T+\bar T=2\tau>0$, so [F15]–[F16] and the real chain rule apply. They give $K_{T\bar T}=3/(4\tau^2)>0$. Since $W$ is holomorphic in the adopted chiral-field model, its $T$ derivative on the real axis equals its real-axis derivative. On $\theta=0$, $T=\bar T=\tau$, so differentiation gives $K_T=-3/(2\tau)$, $W=W_0+Ae^{-a\tau}$, and $\partial_TW=-aAe^{-a\tau}$; thus $D_TW=-aAe^{-a\tau}-(3/(2\tau))(W_0+Ae^{-a\tau})$. [given, F1, F3, F8, F12, F15, F16, A1, algebra]

1.2 Define $f:[0,\infty)\to\mathbb R$ by $f(x):=e^{-x}(1+2x/3)$. For each $c\ge0$ and $\varepsilon>0$, continuity of $\exp$ at $-c$ gives $\delta>0$ such that $|t+c|<\delta$ implies $|\exp(t)-\exp(-c)|<\varepsilon$; if $x\ge0$ and $|x-c|<\delta$, then $t=-x$ satisfies $|t+c|=|x-c|<\delta$. Hence $x\mapsto\exp(-x)$ is continuous at $c$. The affine factor is continuous by [F10], so [F10] makes $f$ continuous on $[0,\infty)$; also $f(0)=1$. For $x>0$, [F5]–[F7] give $e^x\ge x^3/6$: the partial sums include the nonnegative terms through $x^3/3!$, and their limit preserves this bound. Hence $0<f(x)\le 6/x^3+4/x^2\le10/x^2$ for $x\ge1$, so $f(x)\to0$ as $x\to\infty$. Differentiating by [F8], [F11], and [F12] gives $f'(x)=-e^{-x}(1+2x)/3<0$; [F13] therefore makes $f$ strictly decreasing. [F5, F6, F7, F8, F9, F10, F11, F12, F13, algebra]

2.1 Multiplying $D_TW=0$ from step 1.1 by $-2\tau/3$ and setting $x=a\tau>0$ gives $-W_0/A=f(x)$, with $f$ as defined in step 1.2. [step 1.1, step 1.2, A1, algebra]

2.2 Because $W_0<0$ and $A>0$, the ratio $r:=-W_0/A$ is positive. If a solution $x>0$ exists, step 1.2 gives $r=f(x)\in(0,1)$. Conversely, if $r\in(0,1)$, continuity, $f(0)=1$, and $f(x)\to0$ give $x_-<x_+$ with $0<x_-<x_+$, $f(x_-)>r>f(x_+)$; [F14] supplies a root on $[x_-,x_+]$, and strict decrease from step 1.2 makes it unique. Thus the stated interval is necessary and sufficient. [given, A1, step 1.2, F10, F13, F14, choose]

2.3 Under $T=-i\rho$, one has $\rho=iT$ and $e^{-aT}=e^{ia\rho}$. On $b=0$, $\rho=i\tau$, so the logarithm argument is $-i(\rho-\bar\rho)=2\tau>0$. Using [F16] and $\partial_\rho=\tfrac12(\partial_{\operatorname{Re}\rho}-i\partial_{\operatorname{Im}\rho})=-i\partial_T$ gives $\partial_\rho\mathcal K=-3/(\rho-\bar\rho)=3i/(2\tau)$ and $\partial_\rho W=iaAe^{-a\tau}$. Therefore $D_\rho W=i(aAe^{-a\tau}+3W/(2\tau))=-iD_TW$, using step 1.1; the two zero loci agree on this branch. [given, F2, F3, F12, F15, F16, A1, step 1.1, algebra]

3.1 Substituting the solution relation from step 2.1 into $W=W_0+Ae^{-a\tau}$ gives $W=-(2a\tau/3)Ae^{-a\tau}$. [step 2.1, A1, algebra]

4.1 At $D_TW=0$, the F-term expression [F4] reduces to $V=-3e^K|W|^2$, and [F9], [F15], and three uses of [F17] give $e^K=\exp(-3\log(2\tau))=\exp(\log(2\tau))^{-3}=(2\tau)^{-3}$. Using step 3.1 yields $V=-a^2A^2e^{-2a\tau}/(6\tau)<0$. [given, F4, F9, F15, F17, A1, step 3.1, algebra]

5.1 At this point, differentiating the positive square term $e^K K^{T\bar T}|D_TW|^2$ in [F4] gives zero because each product-rule term contains $D_TW$ or its conjugate. Also $\partial_T(e^K|W|^2)=e^K(K_TW+\partial_TW)\bar W=e^K D_TW\bar W=0$, since $W$ is holomorphic. The conjugate derivative vanishes as well, so both real first derivatives of $V$ vanish; the solution is a critical point, not a stability claim. [given, F4, A2, step 1.1, algebra] ∎

## Unresolved supplier

The one-field calculation is complete, but its assigned Step 1 readiness remains escalated. The current loadStep1Record/step1Decision survey found:

- def-cmp4-compactification-derived-moduli-eft-data has an existing escalated record whose stored dependency hash is stale. Its current reason identifies missing Step 1 records for the batch-78 O3/O7 chiral-coordinate and K/f carriers, unresolved orientifold/parity and $N=2$ period inputs, and malformed derivative notation in a local metric supplier.
- def-cmp4-gkp-single-overall-kahler-modulus-coordinate has an existing escalated record with a stale stored hash. Its current reason identifies escalated IIB pseudoaction and five-form inputs; it also cites the conventions item as missing.
- post-four-dimensional-n1-matter-coupled-supergravity and pthm-four-dimensional-n1-fd-scalar-potential have existing escalated records whose stored hashes are stale and whose reasons say the conventions carrier is absent. That carrier, def-supergravity-conventions-and-normalizations, is now present at level 5 with a current ready record. These escalations are retained for owner refresh; they are not overwritten here.

The exact suppliers’ current statements and available proofs were inspected, and this proof uses their interfaces conditionally. Because their current readiness records remain escalated or stale, this item cannot be marked ready. The result asserts no flux realization, controlled correction series, uplift, or full-field stability.
