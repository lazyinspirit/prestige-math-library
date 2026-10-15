---
id: thm-qft-bounded-regulator-dyson-factorization
kind: theorem
title: Bounded Dyson convergence and temporal factorization
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - def-hilbert-space-adjoint
  - thm-extreme-value-metric
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-ftc-second-part
  - thm-algebra-of-derivatives
  - thm-heine-cantor-metric
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, section 3.1.1, equations (3.221)–(3.225), the time-ordered Dyson series. Its displayed argument is formal; the norm bounds and strong-continuity proof here are supplied locally.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice. Let $\mathcal H$ be a complex Hilbert space
([[def-hilbert-space]]), $I=[a,b]$ with $a\le b$,
and $V:I\to\mathcal B(\mathcal H)$ a strongly continuous family of
self-adjoint bounded operators (self-adjoint means $V(t)=V(t)^*$, using the
Hilbert adjoint of [[def-hilbert-space-adjoint]]) with
$M:=\sup_{t\in I}\|V(t)\|<\infty$. Strong continuity means that
$t\mapsto V(t)\psi$ is norm-continuous for every $\psi\in\mathcal H$.
Here a strongly continuous solution $U:I^2\to\mathcal B(\mathcal H)$ means
that, for each fixed $s\in I$ and $\psi\in\mathcal H$,
$t\mapsto U(t,s)\psi$ is norm-continuous.
For a continuous $h:[s,t]\to\mathcal H$, the vector-valued Riemann integral
$\int_s^t h(r)\,dr$ means the common norm limit of tagged partition sums as
their mesh tends to zero; it is oriented by $\int_s^t=-\int_t^s$ and is zero
when $s=t$. The construction in step 1.1 proves existence and independence
of tags for every integrand used below.
Define $U_0(t,s)=I_{\mathcal H}$ and recursively
$$ U_{n+1}(t,s)\psi=-i\int_s^t V(r)U_n(r,s)\psi\,dr,\qquad a\le s,t\le b, $$
where $V(r)U_n(r,s)\psi$ is the continuous vector-valued integrand. Then
$$ \|U_0(t,s)\|\le1,\qquad \|U_n(t,s)\|\le \frac{M^n|t-s|^n}{n!}\quad(n\ge1). $$
For every complex $z$, $U_z(t,s)=\sum_{n\ge0}z^nU_n(t,s)$ converges in
operator norm, uniformly on $I^2$, and is the unique strongly continuous
solution of
$$ U_z(t,s)=I_{\mathcal H}-iz\int_s^t V(r)U_z(r,s)\,dr . $$
For real $z$, $U_z(t,s)$ is unitary (that is, a surjective linear isometry
of $\mathcal H$) and obeys
$U_z(t,r)U_z(r,s)=U_z(t,s)$. If $V_2$ vanishes outside $[a,c]$ and
$V_1$ vanishes outside $[d,b]$, where $c<d$, then
$$ U_z^{V_1+V_2}(b,a)=U_z^{V_1}(b,a)U_z^{V_2}(b,a), $$
with the later-time factor on the left, provided $a\le c<d\le b$. This
identity also holds
coefficientwise as a formal power series in $z$.

## Facts & Assumptions

**Given:** [A1]–[A3] and the operator definitions.

[A1] Assume Countable Choice ([[def-countable-choice]]), as required for the Hilbert-adjoint definition used here.

[F1] A complex Hilbert space is complete in its norm ([[def-hilbert-space]]); $\mathcal B(\mathcal H)$ is the space of bounded linear operators and $\|\cdot\|$ is their operator norm ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).

[F2] The Hilbert adjoint is characterized by the inner-product identity, and for a bounded operator self-adjoint means equality with that adjoint ([[def-hilbert-space-adjoint]]).

[A2] $V(t)$ is strongly continuous, self-adjoint at each $t$, and uniformly bounded by $M$ on $I$. Strong continuity means that $t\mapsto V(t)\psi$ is norm-continuous for every $\psi$.

[A3] For the factorization clause, $V_1,V_2$ satisfy the same hypotheses and are supported in the strictly ordered time intervals $[d,b]$ and $[a,c]$, respectively, with $c<d$.

[F3] A continuous real-valued function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

[F4] The complex exponential is given by its power series, and $\sum_{n\ge0}z^n/n!$ converges absolutely for every $z\in\mathbb C$ ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]).

[F5] Continuous scalar functions on compact intervals are Riemann integrable, and integrating a continuous derivative gives its endpoint difference ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-ftc-second-part]]).

[F6] The derivative of a polynomial follows the ordinary product rule ([[thm-algebra-of-derivatives]]).

[F7] A continuous map from a compact metric space to any metric space is uniformly continuous. [[thm-heine-cantor-metric]]

## Proof

**Given:** [A1]–[A3] and [F1]–[F7].

1.1 If $a=b$, every integral is zero, $U_0=I$, and $U_n=0$ for $n\ge1$; all evolution and unitarity claims follow, while no $c<d$ lies in $I$, so the separated-support clause has no instance. Assume henceforth $a<b$. Suppose $U_n(r,s)\psi$ is continuous in $r$. For fixed $r_0$, $$ \|V(r)U_n(r,s)\psi-V(r_0)U_n(r_0,s)\psi\| \le M\|U_n(r,s)\psi-U_n(r_0,s)\psi\| +\|(V(r)-V(r_0))U_n(r_0,s)\psi\|, $$ which tends to zero by strong continuity of $V$. Thus the recursive integrand is continuous. Apply [F7] to $I=[a,b]$ and the Hilbert space with their norm metrics; the estimate gives uniform continuity of the integrand. On any interval with endpoints $s,t$, the midpoint tagged sums of its equal-mesh partitions are Cauchy by uniform continuity, so completeness of $\mathcal H$ gives a norm limit. The same modulus-of-continuity estimate shows that every tagged sum of sufficiently small mesh approaches this limit, proving existence and tag/partition independence of the Riemann integral defined in the Statement; reverse its sign when $t<s$. The tagged-sum triangle inequality and scalar Riemann-sum limit [F5] give $\|\int f\|\le\int\|f\|$. The integral as a function of its upper endpoint is continuous, since its increment has norm at most the interval length times the supremum of the continuous integrand; this supremum is finite by [F3]. This proves strong continuity of $U_{n+1}(\cdot,s)\psi$ and closes the induction. [A2, F1, F3, F5, F7, construct]

2.1 The identity operator has norm at most one, including when $\mathcal H=\{0\}$. The integral estimate then gives inductively $$ \|U_{n+1}(t,s)\| \le\int_{\min(s,t)}^{\max(s,t)}M\frac{M^n|r-s|^n}{n!}\,dr =\frac{M^{n+1}|t-s|^{n+1}}{(n+1)!}. $$ This proves the factorial bound for both orientations of the integral. [step 1.1, F1, A2, F5, F6, algebra]

3.1 The bound in step 2.1 makes $\sum z^nU_n(t,s)$ absolutely and uniformly convergent in operator norm on $I^2$, with total norm at most $\sum_{n\ge0}(|z|M(b-a))^n/n!=e^{|z|M(b-a)}$ by [F4]. The recursion and this uniform bound permit termwise integration on each vector: the norm of the integral of a uniform tail is at most $(b-a)$ times its supremum norm, which tends to zero. This gives the displayed integral equation. [A2, F4, step 1.1, step 2.1, algebra]

4.1 If $X(t,s)$ and $Y(t,s)$ are two strongly continuous solutions, then for fixed $\psi$, $D(t)=\|(X(t,s)-Y(t,s))\psi\|$ is bounded on $I$ by [F3] and is Riemann integrable by [F5]. It satisfies $D(t)\le |z|M\int_{\min(s,t)}^{\max(s,t)}D(r)\,dr$. Repeated substitution gives an $n$-fold integral over the ordered simplex between $s$ and $t$; induction using [F5] and the polynomial derivative rule [F6] evaluates its volume as $|t-s|^n/n!$, so $$ D(t)\le C_\psi\frac{(|z|M|t-s|)^n}{n!} $$ with $C_\psi=\sup_{r\in I}D(r)<\infty$. The right side tends to zero, so the solution is unique. To prove composition, split the equation for $U_z(t,s)$ at $r$: for $t\ge r$, it reads $U_z(t,s)=U_z(r,s)-iz\int_r^tV(q)U_z(q,s)\,dq$. Multiplying the equation for $U_z(t,r)$ on the right by $U_z(r,s)$ shows $U_z(t,r)U_z(r,s)$ solves this same initial-value equation and has the same value at $t=r$. The uniqueness estimate just proved, with initial time $r$, gives equality; the reversed orientation proves it for $t<r$. [step 3.1, A2, F3, F5, F6, algebra]

4.2 For a continuous vector-valued integrand, the average over a signed interval of length $h$ converges in norm to its value at the base point: the error is bounded by the supremum of its variation on that interval. Taking difference quotients in the integral equation therefore gives $\partial_tU_z(t,s)\psi=-izV(t)U_z(t,s)\psi$, with relative one-sided derivatives at the endpoints. If $u(t)=U_z(t,s)\psi$, then $$ \frac{\|u(t+h)\|^2-\|u(t)\|^2}{h} =2\operatorname{Re}\left\langle u(t),\frac{u(t+h)-u(t)}h\right\rangle +\frac{\|u(t+h)-u(t)\|^2}{h}. $$ The second term tends to zero and the first tends to $2\operatorname{Re}\langle u(t),-izV(t)u(t)\rangle=0$ for real $z$, because self-adjointness makes $\langle u,V(t)u\rangle$ real. By the continuity estimate in step 1.1, the scalar function $t\mapsto\|u(t)\|^2$ has continuous derivative zero. The real fundamental theorem [F5] on each subinterval therefore makes $\|u(t)\|^2$ constant, so $U_z(t,s)$ is an isometry. [A1, F1, F2, A2, F5, step 1.1, step 3.1, algebra]

5.1 By the composition law in step 4.1, $U_z(t,s)U_z(s,t)=U_z(t,t)=I_{\mathcal H}$ and $U_z(s,t)U_z(t,s)=U_z(s,s)=I_{\mathcal H}$. Hence $U_z(t,s)$ is surjective. Step 4.2 shows that it is an isometry when $z$ is real. By the unitary convention stated above, $U_z(t,s)$ is unitary. [step 4.1, step 4.2, algebra]

6.1 Let $Y(t)=U_z^{V_1}(t,a)U_z^{V_2}(t,a)$. On $[a,c]$, $U_z^{V_1}(t,a)=I$, so the integral equation for $U_z^{V_2}$ is the equation for $Y$ with generator $V_1+V_2$. On $[c,d]$, both generators vanish on the open gap and, by strong continuity, at its endpoints; thus $Y(t)=U_z^{V_2}(c,a)$ is constant and the same equation continues across the gap. On $[d,b]$, $U_z^{V_2}(t,a)=U_z^{V_2}(c,a)$, while the integral equation for $U_z^{V_1}$ reduces to $$U_z^{V_1}(t,a)=I-iz\int_d^tV_1(q)U_z^{V_1}(q,a)\,dq.$$ Right multiplication by the fixed bounded operator $U_z^{V_2}(c,a)$ commutes with the vector integral by its tagged-sum definition, so $Y$ satisfies the equation for $V_1+V_2$ on this interval too. The three interval equations agree at their endpoints and combine to the full integral equation on $I$; uniqueness from step 4.1 gives the stated factorization at $b$. Both sides have operator-norm-convergent power series for every $z$. Their equality for real $z$ forces equality of coefficients: a first differing coefficient would remain nonzero after division by its least power of $z$ and passage to $z\to0$. [A2, A3, F4, step 2.1, step 3.1, step 4.1, algebra] ∎
