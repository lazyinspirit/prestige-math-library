---
id: def-fd-conserving-bgk
kind: definition
title: Single-species BGK relaxation operator
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-fd-kinetic-density
  - prop-fd-maxwellian-moments
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.5.1, pp. 45–46"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "Nicola Zamponi, From the Boltzmann Equation to Hydrodynamic Models, §3.2, pp. 11–12"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf"
verification:
  precheck: pending
---

## Definition

For a nonnegative velocity density $f$ with finite absolute third moment, set $n:=\int f\,dv$ and, where $n>0$, set $u:=n^{-1}\int vf\,dv$ and $T:=m(3k_Bn)^{-1}\int|v-u|^2f\,dv$, using the particle mass $m>0$, Boltzmann constant $k_B>0$, and Lebesgue measure fixed in the kinetic-density definition. Where also $T>0$, put $\theta:=k_BT/m$ and define
$$M[f](v):=n(2\pi\theta)^{-3/2}\exp(-|v-u|^2/(2\theta)).$$
For a fixed relaxation time $\tau>0$ measured in seconds, define the single-species Bhatnagar–Gross–Krook (BGK) relaxation operator by
$$Q_{\rm BGK}(f):=\frac{M[f]-f}{\tau}.$$
The corresponding accelerated homogeneous model with dimensionless parameter $\epsilon>0$ is $\partial_t f=Q_{\rm BGK}(f)/\epsilon$. This is a prescribed relaxation model. It is distinct from the binary collision operator and does not by itself assert a derivation from microscopic mechanics or an inhomogeneous hydrodynamic limit.

## Definition references

[Tong, §2.5.1, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Zamponi, §3.2, full lecture notes](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf)
