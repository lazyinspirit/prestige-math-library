---
id: def-td-adiabatic-accessibility
kind: definition
title: Adiabatic accessibility
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Model-defined transitions between equilibrium states of a fixed thermodynamic composition when the admitted process has no heat transfer; no claim is made that a proposed transition is physically realizable without a process witness.
deps: [def-td-equilibrium-state-domain, def-td-process-and-protocol, def-td-system-and-permitted-exchanges]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.A–II.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §2"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
    - title: "Samuel J. Ling, William Moebs, and Jeff Sanny, University Physics Volume 2, §4.1 Reversible and Irreversible Processes"
      url: https://openstax.org/books/university-physics-volume-2/pages/4-1-reversible-and-irreversible-processes
    - title: Goddard, The second law of thermodynamics as variation on a theme of Carathéodory, §§2–3
      url: https://escholarship.org/content/qt27k6m59q/qt27k6m59q.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
dependency_level: 4
---

## Definition

Fix a material constitution $c$ and its equilibrium state domain $D_c$ from [[def-td-equilibrium-state-domain]]. For each admitted record $P\in\mathcal P_s$, use the nonnegative, nondecreasing cumulative incoming and outgoing thermal-energy maps $H_P^{\mathrm{in}},H_P^{\mathrm{out}}:I_P\to[0,\infty)$ of [[def-td-process-and-protocol]], with numerical values in joules and initial values zero. For $x,y\in D_c$, write $x\prec_c y$, and say that $y$ is adiabatically accessible from $x$, exactly when the declared process model admits at least one record $P\in\mathcal P_s$ with $x_P^-=x$, $x_P^+=y$, $H_P^{\mathrm{in}}(t)=H_P^{\mathrm{out}}(t)=0$ for every $t\in I_P$, and the model’s stated auxiliary and work-device endpoint conditions satisfied. The material constitution is the same at both endpoints. The process record must account for the selected outer boundary and every auxiliary included by its protocol; transfers inside that boundary are internal. These maps are supplied on all admitted records, but no energy-balance law outside the core closed-record class follows.

The sign convention is $Q>0$ for net heat into the system and $W_{\mathrm{on}}>0$ for work done on it, as fixed in [[def-td-process-and-protocol]]. An adiabatic record has $Q[P]=0$, but zero net heat alone is insufficient: equal nonzero incoming and outgoing transfers cancel in $Q$. Adiabatic means absence of thermal transfer across the selected boundary throughout the record; it imposes neither zero work nor zero energy change, isolation, quasistatic evolution, or reversibility. The relation concerns equilibrium endpoints only; intermediate configurations may be nonequilibrium. Existence of a witness record is model input, not a consequence of this definition.

When the constitution is clear, write $x\prec y$. Define $x\sim y$ by $x\prec y$ and $y\prec x$, and $x\prec\prec y$ by $x\prec y$ and not $y\prec x$. These are respectively accessibility equivalence and strict one-way accessibility; neither is defined by equality of energy alone.

The order-theoretic relation of Lieb and Yngvason is an abstract model of this operation. Goddard’s Carathéodory formulation uses a distinct local-inaccessibility route; it is cited as context and does not supply the product comparison results used later.
