---
id: ex-sr-bell-congruence-fails-born-rigidity
kind: example
domain: mathematics
title: "Worked Bell-type translated congruence: constant launch-frame separation without Born rigidity"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sr-fermi-walker-and-rigid-observer-examples, def-sr-observer-congruence-and-kinematics, def-sr-four-velocity-and-four-acceleration, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, thm-chain-rule]
dependency_roles:
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-chain-rule: mathematical-premise
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Giulini, Algebraic and geometric structures of Special Relativity, arXiv:math-ph/0602018: Section 5.5 pp. 41-49 (Definition 7 and equation (123) of Born rigidity, equations (125)-(126), Proposition 14, Lemma 16, Theorem 15 part 1, Lemmas 17-18, Theorem 19 part 2); signature (+---) converted to (-+++)"
      url: "https://arxiv.org/pdf/math-ph/0602018"
---

## Example

In an inertial chart let $q(t)=\bigl(\tfrac12\alpha t^2,0,0\bigr)$ with $\alpha>0$, and consider the congruence of translated worldlines $x_\xi(t)=\bigl(ct,q(t)+\xi\bigr)$ for $\xi$ in an open subset of $\mathbb R^3$, defined while $|q_1'(t)|=\alpha|t|<c$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (d), [[def-inertial-frame-and-inertial-chart]]). Then $n=\gamma\bigl(1,\alpha t/c,0,0\bigr)$ with $\gamma=(1-\alpha^2t^2/c^2)^{-1/2}$ is a smooth future unit timelike field, and $s=\gamma\bigl(\alpha t/c,1,0,0\bigr)$ is a unit vector orthogonal to $n$. Direct computation of the expansion on $s$ gives

$$\theta(s,s)=s^as^b\partial_an_b=\gamma^3\,\frac{\alpha^2t}{c^3},$$

which is nonzero for every $t\ne0$ on the subluminal domain; hence the congruence is not Born rigid on any neighbourhood of a time $t\ne0$, and the failure is already present at $t=0$ on the two sides, where $\theta(s,s)$ changes sign. Nevertheless, for every fixed chart time $t$ the separation between the member labelled $\xi_1$ and the member labelled $\xi_2$ is $|\xi_1-\xi_2|$, constant in $t$: the congruence has constant launch-frame separation while failing Born rigidity. This is the Bell-type translated congruence of the cited theorem; a physical conclusion about a breaking thread or rod would additionally require an elasticity model and a failure criterion and is not drawn here.

## Facts & Assumptions

**Given:** An inertial chart of the affine Minkowski model with $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]), the number $\alpha>0$, the worldline $t\mapsto(ct,\tfrac12\alpha t^2,0,0)$ and its translates $x_\xi(t)=(ct,q(t)+\xi)$ for $\xi$ in an open subset of $\mathbb R^3$, and the field of the Example ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (d)).

[L1] Supplier clause (d): for a $C^2$ function $q$ with $|q_1'|<c$ the translated congruence has $n=\gamma(1,q_1'/c,0,0)$, $\gamma=(1-q_1'^2/c^2)^{-1/2}$, unit longitudinal rest vector $s=\gamma(q_1'/c,1,0,0)$, and first-order projected deformation $\theta(s,s)=s^as^b\partial_an_b=\gamma^3q_1'(t)q_1''(t)/c^3$, nonzero exactly when $q_1'q_1''\ne0$; when $q$ is smooth these formulas agree with the smooth congruence definitions of [[def-sr-observer-congruence-and-kinematics]]. For every fixed chart time the members labelled $\xi_1,\xi_2$ have separation $|\xi_1-\xi_2|$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (d)).

[L2] Born rigidity of a congruence means the vanishing of the expansion, $\theta=0$ ([[def-sr-observer-congruence-and-kinematics]]).

[L3] The four-velocity of a future timelike worldline $t\mapsto(ct,r(t))$ with $|r'|<c$ is $U=\gamma_w(c,r')$ with $\gamma_w=(1-|r'|^2/c^2)^{-1/2}$, and $n=U/c$ ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (d)).

[L4] Chain rule and one-variable algebra: with $\beta:=\alpha t/c$ and $\gamma=(1-\beta^2)^{-1/2}$ one has $\dfrac{d\gamma}{dt}=\gamma^3\beta\beta'=\gamma^3\alpha^2t/c^2$ and $\dfrac{d(\gamma\beta)}{dt}=\gamma^3\beta'=\gamma^3\alpha/c$, and $1-\beta^2=\gamma^{-2}$ ([[thm-chain-rule]]).

## Verification

**Proof technique:** direct.

1.1 With $q_1(t)=\tfrac12\alpha t^2$ one has $q_1'(t)=\alpha t$ and $q_1''(t)=\alpha$, so the field of the Example is $n=\gamma(1,\alpha t/c,0,0)$ and $s=\gamma(\alpha t/c,1,0,0)$, where $\gamma=(1-\alpha^2t^2/c^2)^{-1/2}$ is defined and positive on the subluminal domain $|t|<c/\alpha$. Evaluating the diagonal form gives $\eta(n,n)=\gamma^2(-1+\alpha^2t^2/c^2)=-1$, $\eta(s,s)=\gamma^2(-\alpha^2t^2/c^2+1)=1$ and $\eta(n,s)=\gamma^2(-\alpha t/c+\alpha t/c)=0$; hence $n$ is a future unit timelike field and $s$ a unit rest vector. [L1, L3, algebra]

2.1 Direct computation of the contraction: with $n_b=\eta_{bc}n^c=(-\gamma,\gamma\beta,0,0)$ and $s=\gamma(\beta,1,0,0)$, and with $n$ depending only on $t=x^0/c$, one has $\partial_1n_b=\partial_2n_b=\partial_3n_b=0$ and $\partial_0= \frac1c\frac{d}{dt}$; by [L4], $\partial_0n_0=-\gamma^3\beta\beta'/c=-\gamma^3\alpha^2t/c^3$ and $\partial_0n_1=\frac1c\frac{d}{dt}(\gamma\beta)=\gamma^3\beta'/c=\gamma^3\alpha/c^2$. Hence $s^as^b\partial_an_b=(\gamma\beta)^2\partial_0n_0+(\gamma\beta)(\gamma)\partial_0n_1=\gamma^5\beta^2\bigl(-\beta\beta'\bigr)/c+\gamma^5\beta\beta'/c=\gamma^5\beta\beta'(1-\beta^2)/c=\gamma^3\beta\beta'/c=\gamma^3\alpha^2t/c^3$, where $1-\beta^2=\gamma^{-2}$ and only the cross term $(a,b)=(0,1)$ occurs because $\partial_1n_0=0$; this reproduces the supplier formula of [L1]. Since $\alpha>0$ and $\gamma\ge1$ on the domain, $\theta(s,s)=0$ exactly at $t=0$ and is nonzero for every $t\ne0$, with opposite signs on the two sides of $0$. By [L2] the congruence is therefore not Born rigid on any neighbourhood of any $t\ne0$, and at $t=0$ the rigidity condition fails immediately on both sides. [L1, L2, L4, step 1.1, algebra]

2.2 The translated members at a fixed chart time $t$ have positions $q(t)+\xi_1$ and $q(t)+\xi_2$ in the spatial coordinates, so their Euclidean separation is $|\xi_1-\xi_2|$, independent of $t$; equivalently, in the three-dimensional spatial coordinates the congruence is a translation family at each instant even though $\theta\ne0$ off $t=0$. Thus constant instantaneous separation of the labels and Born rigidity are different requirements, which is the content of [L1]. [L1, step 1.1]

3.1 Conclusion and scope: the computation exhibits the exact expansion $\gamma^3\alpha^2t/c^3$, nonzero for $t\ne0$ and zero at $t=0$, so the translated congruence is not Born rigid while its labels keep constant separation $|\xi_1-\xi_2|$. No statement is made about a material rod, a thread or a fracture: a breaking or stress conclusion would require an elasticity model, a constitutive law and a failure criterion, none of which is part of the kinematic model, and no such conclusion is drawn. [step 2.1, step 2.2] ∎

## Remarks

- **Momentary rigidity does not persist.** The expansion is linear in $t$ near $t=0$ and vanishes exactly there, so the congruence is momentarily rigid at the launch time but not rigid on any time neighbourhood; this is the kinematic counterpart of the Bell-type setup, and the constant separation of the labels is a statement about the labelling, not about the metric distances in the rest spaces.

- **Exact data.** Only algebraic functions of $t$, $\alpha$ and $c$ arise; at $c=1$, $\beta=\alpha t$, $\beta'=\alpha$ the formula reads $\theta(s,s)=\gamma^3\beta\beta'$, an exact algebraic expression with no approximation.
