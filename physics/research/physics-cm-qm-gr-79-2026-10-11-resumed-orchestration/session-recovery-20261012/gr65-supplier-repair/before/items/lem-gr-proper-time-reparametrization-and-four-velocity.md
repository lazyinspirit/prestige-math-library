---
id: lem-gr-proper-time-reparametrization-and-four-velocity
kind: lemma
title: "Proper time is well defined and reparametrization invariant; the four-velocity is its unit tangent"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-timelike-worldline-and-proper-time, def-gr-smooth-lorentzian-objects, def-interval, def-darboux-integral, def-darboux-sums, def-the-integral-function, thm-continuous-implies-integrable, def-partition-and-refinement, thm-additivity-over-subintervals, thm-monotonicity-of-the-integral, thm-linearity-of-the-integral, thm-ftc-first-part, thm-ftc-second-part, thm-monotone-change-of-variable-for-riemann-integrals, thm-chain-rule-for-total-derivatives, thm-euclidean-inverse-function-theorem, def-causal-classification-of-lorentz-vectors, def-continuity-real, thm-composition-of-continuous-functions, thm-algebra-of-continuous-functions, def-rational-power, thm-real-power-continuity-and-derivatives, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
dependency_roles:
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-interval: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-darboux-sums: mathematical-premise
  def-the-integral-function: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-partition-and-refinement: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-monotone-change-of-variable-for-riemann-integrals: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'proper time' (1.97) and 'four-velocity' (1.98)-(1.99), printed pp. 25-27 (PDF pp. 32-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.3, the remark that proper times along a timelike geodesic differ by a constant, printed p. 38 (PDF p. 39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.1.2 on the affine parameter and its relation to proper time, printed pp. 27-29 (PDF pp. 34-36)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$c>0$ ([[def-gr-smooth-lorentzian-objects]]).

1. **Well-definedness and additivity of proper time.** Let
   $\gamma:[a,b]\to M$ be a piecewise-$C^1$ future timelike worldline
   ([[def-gr-timelike-worldline-and-proper-time]]). Then the sum defining
   $\tau(b)-\tau(a)$ is the same for every admissible partition of $[a,b]$; it
   is written $\frac1c\int_a^b h$, where $h$ is the piecewise-defined
   proper-time density. For $a<c<b$,
   $\tau(b)-\tau(a)=\bigl(\tau(c)-\tau(a)\bigr)+\bigl(\tau(b)-\tau(c)\bigr)$.
   If $a<b$, the increment is strictly positive.

2. **Reparametrization invariance.** Let $\varphi:[a',b']\to[a,b]$ be $C^1$ with
   $\varphi'\neq0$ everywhere (so $\varphi$ is strictly monotone), and let
   $\tilde\gamma:=\gamma\circ\varphi$. Then $\tilde\gamma$ is a
   piecewise-$C^1$ future timelike worldline and
   $\tilde\tau(b')-\tilde\tau(a')=\bigl(\tau(b)-\tau(a)\bigr)$ if $\varphi'>0$,
   while $\tilde\tau(b')-\tilde\tau(a')=-\bigl(\tau(b)-\tau(a)\bigr)$ if
   $\varphi'<0$.

3. **Proper-time function and four-velocity.** Let $\gamma:I\to M$ be a
   $C^1$ future timelike worldline on an interval with nonempty interior and
   let $\tau$ be its proper-time function based at $t_0\in I$
   ([[def-gr-timelike-worldline-and-proper-time]]). Then $\tau$ is $C^1$ on
   $I$ with
   $$\tau'(t)=\frac{1}{c}\sqrt{-g_{\gamma(t)}\bigl(\gamma'(t),\gamma'(t)\bigr)}>0,$$
   so $\tau$ is strictly increasing, and at every $t\in I$ the velocity,
   proper-time density and four-velocity satisfy
   $\gamma'(t)=\tau'(t)\,U(t)$ and $g_{\gamma(t)}(U(t),U(t))=-c^2$. If
   $\tau$ is strictly increasing on $I$ with image $J$, then the
   reparametrized curve $\gamma_\tau:=\gamma\circ(\tau|_I)^{-1}$ is a $C^1$
   future timelike worldline on $J$ with
   $$\gamma_\tau'(\sigma)=U\bigl(\tau^{-1}(\sigma)\bigr),\qquad g\bigl(\gamma_\tau'(\sigma),\gamma_\tau'(\sigma)\bigr)=-c^2 .$$
   The same formulas hold piece by piece for a piecewise-$C^1$ future
   timelike worldline, on each open piece.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a real
$c>0$, and the worldlines and maps named in the three claims.

[L1] A future timelike worldline is a $C^1$ (or piecewise-$C^1$) curve whose velocity, and whose one-sided tangents at piece endpoints, are future timelike; the density on each open piece is $h=\sqrt{-g(\gamma',\gamma')}>0$, and $h$ extends continuously to the closed piece with strictly positive one-sided limits ([[def-gr-timelike-worldline-and-proper-time]]).

[L2] $\gamma'=\sum_a (x^a\circ\gamma)'\partial_a$ in a chart; a strictly positive multiple of a future timelike vector is future timelike ([[def-gr-timelike-worldline-and-proper-time]], [[def-causal-classification-of-lorentz-vectors]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L3] For a Darboux-integrable function on a closed interval, the integral is additive over subintervals and monotone in the integrand, and $\int(f+\lambda g)=\int f+\lambda\int g$ ([[thm-additivity-over-subintervals]], [[thm-monotonicity-of-the-integral]], [[thm-linearity-of-the-integral]], [[def-darboux-integral]]).

[L4] If $h$ is continuous on a closed subinterval $[u,v]$ with $u<v$, then its integral function is differentiable there with derivative $h$ ([[thm-ftc-first-part]], [[def-the-integral-function]]). If $G$ is differentiable on $[u,v]$ with integrable derivative $G'$, then $\int_u^vG'=G(v)-G(u)$ ([[thm-ftc-second-part]]).

[L5] For a monotone $C^1$ surjection $\varphi$ with integrable derivative, $\int f(\varphi(t))|\varphi'(t)|dt=\int f(x)dx$ ([[thm-monotone-change-of-variable-for-riemann-integrals]]).

[L6] Compositions and finite sums and products of continuous real functions are continuous; $t\mapsto\sqrt t$ is continuous and differentiable on $(0,\infty)$ ([[thm-composition-of-continuous-functions]], [[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-rational-power]], [[thm-real-power-continuity-and-derivatives]]).

[L7] The $C^1$ chain rule holds in coordinates ([[thm-chain-rule-for-total-derivatives]]); a $C^1$ function of one real variable with nonzero derivative is a local $C^1$ diffeomorphism at every point ([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** direct.

1.1 (Common refinement.) Let $P=\{s_i\}$ and $P'=\{s'_j\}$ be admissible partitions of $[a,b]$ for $\gamma$, and let $Q$ be the partition whose nodes are the union of the two node sets, ordered increasingly. Then $Q$ is an admissible partition: each interval of $Q$ lies in an interval of $P$ and in one of $P'$, hence inside one open piece of each of the two parametrizations, and $\gamma$ is $C^1$ there. [L1, given]

1.2 (The density is independent of the partition.) Define, for each interval $[u,v]$ contained in the closure of one open piece of $\gamma$, the number $H(u,v):=\int_u^v h$, where $h$ is the continuous positive extension of the density to $[u,v]$ from [L1]; this is the Darboux integral of a continuous function ([[thm-continuous-implies-integrable]]). If the nodes of a subpartition are inserted, [L3] gives additivity: $H(u,v)=H(u,w)+H(w,v)$. [L1, L3, construct]

1.3 (Strict positivity.) For $a<b$, choose an open piece $(s_{i-1},s_i)$ and a closed interval $[u,v]\subseteq(s_{i-1},s_i)$ with $u<v$. The continuous positive function $h$ attains a minimum $m>0$ on $[u,v]$; every lower Darboux sum of $h$ on any partition refining $\{u,v\}$ is at least $m(v-u)$, since $h\ge m$ on $[u,v]$ and $h>0$ elsewhere. Hence the lower integral, which equals the integral because $h$ is integrable, is at least $m(v-u)>0$ ([[def-darboux-sums]], [[def-darboux-integral]], [[thm-monotonicity-of-the-integral]]). Dividing by $c>0$ gives $\tau(b)-\tau(a)>0$ when $a<b$. [L1, L3, algebra]

1.4 (Reparametrization: reduction to pieces.) Let $\varphi:[a',b']\to[a,b]$ be $C^1$ with $\varphi'>0$; then $\varphi$ is strictly increasing, hence a bijection onto $[a,b]$, and its inverse is continuous. Let $P=\{s_i\}$ be an admissible partition for $\gamma$; the preimages $\varphi^{-1}(s_i)$ form an admissible partition for $\tilde\gamma=\gamma\circ\varphi$: on each preimage interval $(u,v)=\varphi^{-1}(s_{i-1},s_i)$ the curve $\tilde\gamma$ is the composition of $C^1$ maps and hence $C^1$, with $\tilde\gamma'=\varphi'\cdot(\gamma'\circ\varphi)$ by [L7], a strictly positive multiple of a future timelike vector and therefore future timelike by [L2]. [L2, L7, construct]

1.5 (Derivative of the proper-time function.) Let $\gamma:I\to M$ be a $C^1$ future timelike worldline and $\tau(t)=\frac1c\int_{t_0}^{t}h$ its proper-time function, $h$ continuous and positive on $I$. For each compact $[u,v]\subseteq I$, [L4] gives $\tau(v)-\tau(u)=\frac1c\int_u^vh$; since $h/c$ is continuous at every $t\in I$, the first fundamental theorem in the form $\tau'(t)=h(t)/c$ follows at every interior point, and one-sided at the endpoints. This is the displayed formula; it is $>0$ because $h>0$ and $c>0$. [L1, L4, L6, algebra]

2.1 (Partition independence.) Write the sum of the definition for $P$ as $\sum_iH(s_{i-1},s_i)$ and similarly for $P'$ and $Q$. Refining $P$ to $Q$ and applying additivity of step 1.2 to each interval of $P$ split by the nodes of $Q$, the sum for $P$ equals the sum over $Q$; the same holds for $P'$. Hence both sums equal $\sum_{Q}H$ and the increment is independent of the admissible partition. [step 1.2, L3, algebra]

2.2 (Reparametrization: the integral identity.) On a piece $(u,v)$ as in step 1.4, the density of $\tilde\gamma$ equals $\varphi'\cdot\sqrt{-g(\gamma'\circ\varphi,\gamma'\circ\varphi)} =\varphi'\,(h\circ\varphi)$ by bilinearity of the metric and $\varphi'>0$; it is continuous and positive on the closed piece. By [L5], $\int_u^v\varphi'\,(h\circ\varphi)=\int_{s_{i-1}}^{s_i}h$. Summing over the finitely many pieces and dividing by $c$ gives $\tilde\tau(b')-\tilde\tau(a')=\tau(b)-\tau(a)$. At a piece endpoint the one-sided tangent of $\tilde\gamma$ is $\varphi'\gamma'$ with the same one-sided value of $\varphi'>0$, hence future timelike, so $\tilde\gamma$ is a future timelike worldline. [L5, L6, step 1.4, algebra]

2.3 (Four-velocity relation.) At every $t\in I$, by the definition of $U$ and step 1.5, $\tau'(t)U(t)=\frac{h(t)}{c}\cdot\frac{c\gamma'(t)}{h(t)}=\gamma'(t)$ and $g(U(t),U(t))=\frac{c^2\,g(\gamma',\gamma')}{h(t)^2} =\frac{c^2g(\gamma',\gamma')}{-g(\gamma',\gamma')}=-c^2$. The same computation applies on each open piece of a piecewise-$C^1$ worldline. [step 1.5, given, algebra]

2.4 (Reparametrization by proper time.) By step 1.5, $\tau$ is $C^1$ and strictly increasing on $I$; let $J:=\tau(I)$ and $\psi:=\tau^{-1}:J\to I$. At each $\sigma\in J$, [L7] applied to $\tau$ at $t=\psi(\sigma)$ — whose derivative $\tau'(t)>0$ is invertible as a $1\times1$ matrix — yields a $C^1$ local inverse of $\tau$ on a neighborhood of $\sigma$; by injectivity of $\tau$ every local inverse agrees with $\psi$ there, so $\psi$ is $C^1$ on $J$ and $\psi'(\sigma)=1/\tau'(\psi(\sigma))$. [L4, L7, step 1.5, construct]

3.1 (Additivity over a splitting.) For $a<c<b$, the partition obtained by inserting $c$ into an admissible partition is admissible, and the sum splits as $\sum_iH(s_{i-1},s_i)=\sum_{s_i\le c}H+\sum_{s_i\ge c}H$; by step 2.1 each part is the increment over the corresponding subinterval, so $\tau(b)-\tau(a)=(\tau(c)-\tau(a))+(\tau(b)-\tau(c))$. [step 2.1, algebra]

3.2 (Reversing orientation.) If instead $\varphi'<0$, then $\varphi$ is strictly decreasing; the substitution $t\mapsto-t$ reverses the parameter orientation while $|\varphi'|=-\varphi'$ is unchanged, so the computation of step 2.2 gives the unsigned density and shows that the increment from $a'$ to $b'$ equals the increment from $b$ to $a$, that is $-\bigl(\tau(b)-\tau(a)\bigr)$. [L5, step 2.2, algebra]

4.1 (Velocity of the reparametrized curve.) For $\gamma_\tau=\gamma\circ\psi$ and $\sigma\in J$, [L7] applied in a chart around $\gamma(\psi(\sigma))$ gives $\gamma_\tau'(\sigma)=\psi'(\sigma)\,\gamma'(\psi(\sigma)) =\gamma'\bigl(\psi(\sigma)\bigr)/\tau'\bigl(\psi(\sigma)\bigr) =U(\psi(\sigma))$ by step 2.3. In particular $g(\gamma_\tau',\gamma_\tau')=-c^2$ and $\gamma_\tau'$ is future timelike, so $\gamma_\tau$ is a $C^1$ future timelike worldline on $J$; for a piecewise $C^1$ worldline the same construction applies on each open piece. [L2, L7, step 2.3, step 2.4] ∎

## Remarks

- **Contrapositive reading of additivity.** Step 2.2 implies that the
  increment over $[a,b]$ of a piecewise-$C^1$ future timelike worldline is the
  sum of the increments of its restrictions to any admissible subdivision;
  this is used without further comment in
  [[thm-gr-lorentz-gauss-lemma-and-normal-maximum]] and
  [[lem-gr-first-variation-of-proper-time]].

- **No choice principle is used.** All partitions inserted in the proof are
  finite and explicitly constructed from the given data, the inverse function
  theorem is applied at individual points, and the integral is the Darboux
  integral of continuous functions. The inherited $\mathrm{AC}_\omega$ of the
  ambient smooth structure is the only choice assumption
  ([[def-gr-timelike-worldline-and-proper-time]],
  [[def-gr-smooth-lorentzian-objects]]).
