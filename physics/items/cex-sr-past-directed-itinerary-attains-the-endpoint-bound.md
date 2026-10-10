---
id: cex-sr-past-directed-itinerary-attains-the-endpoint-bound
kind: counterexample
title: "Counterexample: attainment of the endpoint bound does not force the future time orientation"
status: draft
origin: pipeline
domain: mathematics
proof_strategy: direct
deps: [thm-sr-endpoint-proper-time-bound-and-flat-maximum, def-sr-regular-causal-curve-and-worldline, def-sr-proper-time, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-inertial-frame-and-inertial-chart, def-lorentz-form-and-inertia, lem-timelike-cone-has-two-convex-components, thm-of-square-roots, def-ordered-field, lem-integral-elementary-bounds, def-oriented-integral]
dependency_roles:
  lem-integral-elementary-bounds: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-sr-endpoint-proper-time-bound-and-flat-maximum: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.3.3 'The gamma factor' pp. 25-27 and section 1.5 pp. 36-37; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (the twin remark and its orientation assumptions)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), sections 2.2-2.3 pp. 27-30 (timelike and causal curves; curves of extremal proper time); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 11
aliases: []
---

## Statement refuted

The following claim is false: if a piecewise $C^1$ curve
$x:[\alpha,\beta]\to A$ with nonzero timelike tangents runs from an event $p$ to
an event $q$ and attains the endpoint bound
$\sqrt{-\eta(q-p,q-p)}$ in the length-integral sense, that is
$\int_\alpha^\beta\sqrt{-\eta(x',x')}\,\mathrm ds=\sqrt{-\eta(q-p,q-p)}$, then
its tangents must be future timelike, so that $x$ is a worldline of the model.

Counterexample: in the inertial chart $\xi$ with diagonal metric
$\operatorname{diag}(-1,1,1,1)$ let $d:=(5,3,0,0)$, a future timelike
displacement with $\sqrt{-\eta(d,d)}=4$, and put
$p:=\xi^{-1}(0,0,0,0)$, $q:=\xi^{-1}(-5,-3,0,0)=p-d$ and $x(s):=p-s\,d$ for
$s\in[0,1]$. Then $x(0)=p$, $x(1)=p-d=q$, and $x'(s)=-d$ is past timelike for
every $s$, so $x$ is not a future timelike worldline; but its length integrand
is $\sqrt{-\eta(-d,-d)}=\sqrt{-\eta(d,d)}=4$ and its length integral over
$[0,1]$ equals $4$, while $\sqrt{-\eta(q-p,q-p)}=\sqrt{-\eta(-d,-d)}=4$: the
bound is attained with equality by a past-directed parametrization. Attainment
of the length bound therefore does not force the future time orientation; the
model's clock interpretation separately restricts its readings to future
timelike worldlines ([[def-sr-proper-time]],
[[def-sr-regular-causal-curve-and-worldline]]). Within the future timelike
worldline class the equality case is characterized by
[[thm-sr-endpoint-proper-time-bound-and-flat-maximum]] (ii).

## Facts & Assumptions

**Given:** An inertial frame with chart $\xi$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$; the coordinate vector $d=(5,3,0,0)$; the events $p=\xi^{-1}(0,0,0,0)$, $q=\xi^{-1}(-5,-3,0,0)$; and the curve $x(s)=p-s\,d$ on $[0,1]$ ([[def-inertial-frame-and-inertial-chart]]).

[L1] Pairing in the frame: $\eta(r,r')=-r^0r'^0+r^1r'^1+r^2r'^2+r^3r'^3$ for coordinate vectors, by the diagonal form and bilinearity ([[def-inertial-frame-and-inertial-chart]], [[def-lorentz-form-and-inertia]]).

[L2] Causal classification and cone coordinates: $r$ is timelike when $\eta(r,r)<0$, spacelike when $\eta(r,r)>0$; in a frame with future first vector, $r$ is future timelike exactly when $r^0>|r_s|$ and past timelike exactly when $r^0<-|r_s|$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[lem-timelike-cone-has-two-convex-components]]).

[L3] Worldlines ([[def-sr-regular-causal-curve-and-worldline]]): a future timelike worldline is a $C^1$ curve all of whose tangents are future timelike; the parametrization is part of the curve, and the image of a future timelike worldline is also the image of the past-directed curve $s\mapsto x(-s)$, which is not a worldline of the model.

[L4] Constant-integrand evaluation ([[lem-integral-elementary-bounds]], [[def-oriented-integral]]): for a real constant $K$ and $a<b$, the Riemann integral is $\int_a^b K=K(b-a)$. For any timelike $w$ the number $K=\sqrt{-\eta(w,w)}$ is real; this computation uses no future-orientation or clock-reading premise.

[L5] Square roots ([[thm-of-square-roots]], [[def-ordered-field]]): $\sqrt{16}=4$, and $4>0$.

[L6] The endpoint bound and its equality case ([[thm-sr-endpoint-proper-time-bound-and-flat-maximum]]): for a weak piecewise $C^1$ future timelike worldline from $p$ to $q$, $c\Delta\tau\le\sqrt{-\eta(q-p,q-p)}$ with equality exactly for the strictly increasing reparametrizations of the straight segment; the theorem is stated for future timelike worldlines and attaches no reading to past-directed curves.

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $\eta(d,d)=-25+9=-16<0$ and $\eta(-d,-d)=-16<0$, while $d^0=5>3=|d_s|$ and $(-d)^0=-5<-3=-|(-d)_s|$; by [L2] $d$ is future timelike and $-d$ is past timelike, so $\sqrt{-\eta(d,d)}=\sqrt{16}=4$ by [L5] and $q-p=-d$. [given, L1, L2, L5, algebra]

2.1 The curve $x(s)=p-s\,d$ is $C^1$ (indeed affine) on $[0,1]$ with $x(0)=p$ and $x(1)=p-d=q$; its constant tangent is $x'(s)=-d$, which is nonzero and timelike but past-directed at every $s$, so by [L3] $x$ is not a future timelike worldline of the model, although it satisfies the 'piecewise $C^1$ with nonzero timelike tangents from $p$ to $q$' hypothesis of the refuted claim. [step 1.1, L3]

3.1 Its length integral is $\int_0^1\sqrt{-\eta(-d,-d)}\,\mathrm ds=\sqrt{-\eta(-d,-d)}=4$ by [L4] and step 1.1, and the endpoint bound is $\sqrt{-\eta(q-p,q-p)}=\sqrt{-\eta(-d,-d)}=4$; hence the length integral equals the endpoint bound, with equality. [step 1.1, step 2.1, L4, algebra]

4.1 The witness therefore refutes the claim: the length bound can be attained with equality by a past-directed parametrization with no future timelike tangent, so attainment of the bound does not force the future time orientation. This does not contradict [L6], which is stated for future timelike worldlines and whose equality case characterizes the strictly increasing reparametrizations within that class; it distinguishes a numerical length equality from the additional future-orientation convention of the model's worldlines and clock readings. [step 2.1, step 3.1, L3, L6] ∎
