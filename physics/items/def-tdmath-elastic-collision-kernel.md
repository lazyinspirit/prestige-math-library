---
id: def-tdmath-elastic-collision-kernel
kind: definition
title: "Elastic collision model and weak collision identity"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-measure","def-measure-space","def-integrable-real-and-complex-functions-and-their-integrals","def-lebesgue-measure-and-the-lebesgue-sigma-algebra"]
justified_by: []
dependency_roles: {"def-measure":"mathematical-premise","def-measure-space":"mathematical-premise","def-integrable-real-and-complex-functions-and-their-integrals":"mathematical-premise","def-lebesgue-measure-and-the-lebesgue-sigma-algebra":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf
      locator: "Complete 39-page lecture-note part retrieved and read; §2.1, pp.14–16, Liouville phase-space volume; §§2.2–2.3, pp.20–35, Boltzmann equation and H-theorem."
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html
      locator: "Complete author-hosted HTML section read; equations (3.123)–(3.144), collision production, detailed balance, and Maxwellian form."
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

## Definition

Fix $d\ge2$. The **elastic collision set** is
$$Q_{\rm el}:=\{(v,w,v',w')\in\mathbb R^{4d}:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\},$$
with its relative Borel sigma-algebra. A collision measure is a nonnegative countably additive measure $\nu$ on this measurable space. It is symmetric if it is invariant under the exchanges $(v,w)\leftrightarrow(w,v)$, $(v',w')\leftrightarrow(w',v')$, and $(v,w)\leftrightarrow(v',w')$. These invariances are hypotheses on $\nu$, not consequences of energy and momentum conservation.

Fix the velocity measure space $(\mathbb R^d,\mathcal L(\mathbb R^d),dv)$, where $dv$ is the Lebesgue set function of [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] and its countably additive measure-space structure is assumed as part of the data. This definition makes no existence assertion for that structure or for the collision operator. An input density is a finite-valued positive Lebesgue-measurable function $f:\mathbb R^d\to(0,\infty)$ whose four coordinate evaluations $f(v),f(w),f(v'),f(w')$ on $Q_{\rm el}$ are $\nu$-measurable. Let $\mathcal D_\nu$ be a declared set of such inputs. Put $\mathcal L^1_{\rm loc}:=\{q:\mathbb R^d\to\mathbb R:q\text{ is Lebesgue measurable and }\int_K|q|\,dv<\infty\text{ for every compact }K\subset\mathbb R^d\}$. Its elements here are chosen function representatives, rather than equivalence classes. A collision model includes a specified map $Q_\nu:\mathcal D_\nu\to\mathcal L^1_{\rm loc}$; write $Q(f):=Q_\nu(f)$.

For $f\in\mathcal D_\nu$, put $A=f(v)f(w)$ and $B=f(v')f(w')$. For a finite-valued complex Lebesgue-measurable function $\varphi$ on velocity space, put $\delta\varphi:=\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w')$. Define the complete admissible test class $\mathcal T_f$ to consist of exactly those $\varphi$ for which $\delta\varphi$ is $\nu$-measurable and
$$\int_{\mathbb R^d}|\varphi(v)Q_\nu(f)(v)|\,dv<\infty,\qquad \int_{Q_{\rm el}}|(B-A)\delta\varphi|\,d\nu<\infty.$$
Absolute integrability is in the sense of [[def-integrable-real-and-complex-functions-and-their-integrals]]. The model also declares, for each $f\in\mathcal D_\nu$, a complex linear testing subspace $\mathcal S_f\subseteq\mathcal T_f$ containing at least one nonzero test. Require the following **weak collision identity** for every $f\in\mathcal D_\nu$ and every $\varphi\in\mathcal S_f$. A formulation adopting all admissible tests specifies $\mathcal S_f=\mathcal T_f$; a result using only particular tests names those tests and their linear span explicitly:
$$\int_{\mathbb R^d}\varphi(v)Q(f)(v)\,dv=\frac14\int_{Q_{\rm el}}(f(v')f(w')-f(v)f(w))(\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w'))\,d\nu,$$
Both sides are absolutely convergent by the test-class definition. Admissible tests need not be bounded or compactly supported: $1$, velocity coordinates, squared speed, and $\log(f/f_{\rm ref})$ for a positive constant $f_{\rm ref}$ belong to $\mathcal T_f$ whenever they meet the displayed measurability and integrability conditions. A consumer invoking one of these tests must establish or assume those conditions and require it to belong to the declared testing domain $\mathcal S_f$. In particular, the entropy branch uses the span of $1$ and $\log(f/f_{\rm ref})$, with absolute convergence explicitly assumed. The map $Q_\nu$, its input domain and its testing domains are adopted model data; the weak identity is their admissibility condition, not an assertion that every positive density and collision measure admit such a map or that these tests alone uniquely determine it. Molecular chaos or a microscopic derivation of the identity is not part of the definition.

## Scope

The measure's normalization is chosen so $Q(f)$ has units of $f$ per unit time in an application. No specific cross-section or measured collision rate is asserted.
