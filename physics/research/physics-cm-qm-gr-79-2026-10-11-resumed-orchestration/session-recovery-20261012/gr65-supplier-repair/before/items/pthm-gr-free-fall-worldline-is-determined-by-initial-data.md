---
id: pthm-gr-free-fall-worldline-is-determined-by-initial-data
kind: physics-theorem
title: "The free-fall worldline of an ideal test body is determined by its initial event and four-velocity"
status: draft
origin: session
domain: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-ideal-clocks-and-free-fall, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-geodesic-of-an-affine-connection, thm-gr-local-geodesics-and-exponential-map, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
physical_scope: "Model-conditional statement within the classical smooth gravitational framework with its adopted clock, free-fall and light-ray assumptions: under the test-body idealization, two ideal freely falling massive test bodies released at the same event with the same physical four-velocity have the same worldline. It excludes bodies with non-negligible self-field, finite-size or tidal couplings beyond the idealization, self-force and radiation back-reaction, and quantum effects; it makes no empirical claim that all bodies in nature fall alike, and it does not establish the equivalence principle as a law of nature."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.3: free particles move on geodesics of the Levi-Civita connection, and section 6.4: the equivalence-principle motivation and test-body idealization, printed pp. 38 and 57-58 (PDF pp. 39 and 58-59)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 geodesics (3.47) and Ch. 4 the principle of equivalence and physics in curved spacetime, printed pp. 69-73 and 97-103 (PDF pp. 76-80 and 104-110)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.1.2: the point-particle action and geodesic evolution, and section 3.3.2: the equivalence principle and its local limitations, printed pp. 24-30 and 121-122 (PDF pp. 31-37 and 128-129)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let a model of the classical gravitational framework be specified by a
time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with its
metric-selected connection
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and assume the
clock, free-fall and light-ray assumptions of
[[post-gr-ideal-clocks-and-free-fall]]. Let $p\in M$ and let
$U_0\in T_pM$ be a future timelike unit vector,
$g_p(U_0,U_0)=-c^2$ ([[def-causal-classification-of-lorentz-vectors]]).

Suppose $B_1$ and $B_2$ are two ideal freely falling massive test bodies of
the model that are released at the event $p$ with physical four-velocity $U_0$:
their worldlines $\gamma_1$ and $\gamma_2$ pass through $p$ and their
four-vectors there equal $U_0$. Let $\tau_1$ and $\tau_2$ be their proper
times, with origins chosen so that $\gamma_1(0)=\gamma_2(0)=p$. Then
$\gamma_1$ and $\gamma_2$ coincide wherever both are defined:

$$\gamma_1(\tau)=\gamma_2(\tau)\qquad\text{for every }\tau\text{ in the common domain}.$$

and each is the maximal timelike geodesic through $(p,U_0)$. In particular the
worldline of an ideal freely falling massive test body is determined by the
release event and the initial four-velocity alone; parameters that distinguish
the two bodies, such as their rest masses, do not enter.

## Facts & Assumptions

**Given:** A smooth model as in the statement, an event $p$, a future timelike unit vector $U_0\in T_pM$, and two ideal freely falling massive test bodies $B_1,B_2$ released at $p$ with four-velocity $U_0$.

[A1] Clause (ii) of [[post-gr-ideal-clocks-and-free-fall]] is the adopted physical assumption that an ideal freely falling massive test body has as worldline a future timelike geodesic of the metric-selected connection, traversed with physical four-velocity $U=d\gamma/d\tau$ satisfying $g(U,U)=-c^2$; clause (i) is the adopted assumption that an ideal clock measures the proper time of its worldline.

[L1] For the metric-selected connection there is, for every $(p,v)\in TM$, a unique maximal geodesic with $\gamma(0)=p$ and $\gamma'(0)=v$; proper time is an affine parameter of a timelike geodesic, and along it the four-velocity is $d\gamma/d\tau$, with $D_\tau(d\gamma/d\tau)=0$ ([[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-proper-time-reparametrization-and-four-velocity]], [[def-geodesic-of-an-affine-connection]]).

[L2] A worldline with four-velocity $U$ satisfies $g(U,U)=-c^2$ and is future-directed; proper time is strictly increasing along it, so the proper-time parametrization is a bijection from its parameter interval onto its image ([[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

## Proof

**Proof technique:** direct.

1.1 For $i=1,2$, [A1] makes the worldline of $B_i$ a future timelike geodesic traversed with four-velocity $U_i=d\gamma_i/d\tau_i$ satisfying $g(U_i,U_i)=-c^2$, and the four-vector of $B_i$ at $p$ is its tangent with respect to its own proper time at the parameter value where it passes through $p$. Choosing the proper-time origins so that this value is $0$, we have $\gamma_i(0)=p$ and, by the hypothesis, $U_i(0)=U_0$. [A1, L2, given]

2.1 By [L1] there is a unique maximal geodesic $\gamma_{p,U_0}$ with $\gamma_{p,U_0}(0)=p$ and $\gamma_{p,U_0}'(0)=U_0$, and every geodesic with these initial data agrees with it wherever both are defined. Applying this to $\gamma_1$ and to $\gamma_2$ from step 1.1, both coincide with $\gamma_{p,U_0}$ on the intersection of the domains, hence with each other: $\gamma_1(\tau)=\gamma_2(\tau)$ for every common proper-time value. [step 1.1, L1, algebra]

3.1 The initial data of the geodesic initial-value problem are the event $p$ and the tangent vector $U_0$; the geodesic equation $D_\tau(d\gamma/d\tau)=0$ and its solution contain no rest mass, charge, or other parameter of the body, and clause (ii) of [A1] refers only to the worldline. Therefore the common worldline is determined by $(p,U_0)$ alone, and the rest masses or other distinguishing parameters of $B_1$ and $B_2$ do not affect it; this is the stated conclusion. [step 2.1, A1, L1, algebra] ∎

## Remarks

- **Model statement, not an empirical law.** The theorem is a conditional consequence of the adopted free-fall rule and the mathematical initial-value theory. It does not assert that bodies in nature fall alike, does not test the equivalence principle, and carries the test-body exclusions of [[post-gr-ideal-clocks-and-free-fall]]: negligible self-field, no self-force or radiation back-reaction, internal structure small compared with the variation scale of the geometry, and no quantum effects. Empirical comparisons of free-fall universality are separate reported observations with their own apparatus, calibration and uncertainty qualifications; none is recorded here.

- **No new empirical premises.** The proof uses no measured input and no experiment as a premise, so no `empirical_premises` entries are attached; the conclusion inherits the model and idealization qualifications of the postulate.
