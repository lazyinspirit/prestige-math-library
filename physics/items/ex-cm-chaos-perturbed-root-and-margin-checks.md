---
id: ex-cm-chaos-perturbed-root-and-margin-checks
kind: example
title: "Explicit root margins at $a=100$: endpoint signs $25$ and $43$, and $d=2/13$ for $\\eta=1$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [lem-close-map-first-component-has-uniform-inverse, lem-perturbed-scalar-recurrence-root-bounds, def-bilateral-symbol-and-bounded-sequence-space, thm-of-square-roots, def-abs-value, lem-of-abs-value, def-interval]
dependency_roles:
  lem-close-map-first-component-has-uniform-inverse: mathematical-premise
  lem-perturbed-scalar-recurrence-root-bounds: mathematical-premise
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, quadratic root location in the horseshoe region"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Chapter 13, perturbation bounds for the horseshoe region"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
---

## Example

Take $a=100$ in [[lem-perturbed-scalar-recurrence-root-bounds]], so that $R=13$, $l=7$, and suppose the defect bound is $\eta=1$. Then:

1. for all $u,w\in[-13,13]$ the unperturbed quadratic $v^2-100-u-w$ satisfies

$$v^2-100-u-w\Big|_{v=7}\le49-100+26=-25,\qquad v^2-100-u-w\Big|_{v=13}\ge169-100-26=43,$$

so the signs at the endpoints are strictly opposite with margins $25$ and $43$;
2. the derivative bound is $d=(1+\eta)/(2l-\eta)=(1+1)/(14-1)=2/13$, and

$$2d=\frac4{13}<1,\qquad d\Bigl(\frac12+2\Bigr)=\frac5{13}<1,\qquad \frac d{1-d/2}=\frac{2/13}{12/13}=\frac16<\frac23;$$

3. the root margins are at least $24/27>3/4$ and $42/27>3/4$, since the slope of $P_{u,w}$ is bounded by $2R+\eta=27$ on $[7,13]$.

## Facts & Assumptions

**Given:** The parameter $a=100$, $R=13$, $l=7$, the defect bound $\eta=1$, the perturbed recurrence data of [[lem-perturbed-scalar-recurrence-root-bounds]] and the inverse-branch estimates of [[lem-close-map-first-component-has-uniform-inverse]].

[L1] Perturbed root data ([[lem-perturbed-scalar-recurrence-root-bounds]]): with $\eta$ as the defect bound, the root map satisfies $|\partial_uM_s|,|\partial_wM_s|\le d=(1+\eta)/(2l-\eta)$ and every root $v=M_s(u,w)$ satisfies $sv-l\ge\tfrac34$ and $R-sv\ge\tfrac34$.

[L2] Elementary arithmetic ([[thm-of-square-roots]], [[def-abs-value]], [[lem-of-abs-value]], [[def-interval]]): $7^2=49$, $13^2=169$, $2\cdot13=26$, $14-1=13$, $4/13<1$, $5/13<1$, $1/6<2/3$, and $24/27>3/4$, $42/27>3/4$.



## Verification

**Proof technique:** direct; evaluate the quadratic at the two endpoints in the worst case and substitute the numerical data into the general bounds.

1.1 Endpoint signs: for $u,w\in[-13,13]$ the sum $u+w$ ranges over $[-26,26]$, so $v^2-100-u-w$ at $v=7$ is at most $49-100+26=-25<0$, and at $v=13$ is at least $169-100-26=43>0$. [given, L2, algebra]

1.2 Derivative bound and cone constants: substituting $l=7$, $\eta=1$ into $d=(1+\eta)/(2l-\eta)$ gives $d=2/13$, and the displayed inequalities follow from [L2]. [given, L1, L2, algebra]

2.1 Margins: with $\eta=1$ and $2R+\eta=27$, the endpoint margins guaranteed by the root lemma are $24/27$ and $42/27$: the endpoint values of $P_{u,w}$ have magnitudes at least $25-1=24$ and $43-1=42$, and $|P'_{u,w}|\le27$ on $[7,13]$. Thus the root distances are at least $24/27>3/4$ and $42/27>3/4$, consistent with the general margins of [L1]. [given, step 1.1, L1, L2, algebra] ∎


## Remarks

- Every number is evaluated symbolically at the worst case $a=100$ and $\eta=1$; larger $a$ or smaller $\eta$ only improve the margins.
