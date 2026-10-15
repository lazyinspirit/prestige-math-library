---
id: def-td-scaled-products-and-comparison
kind: definition
title: Tagged scaled systems and separated products
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: The formal state and comparison bookkeeping for the declared family of separated bulk systems; mixed-composition transitions are excluded here and are defined separately.
deps: [def-td-adiabatic-accessibility, def-td-equilibrium-state-domain, def-td-process-and-protocol, post-td-bulk-additivity]
dependency_roles:
  def-td-adiabatic-accessibility: formulation-prerequisite
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.A–II.C
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §2"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
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
dependency_level: 5
---

## Definition

Fix a family $I$ of primitive material labels. A tagged type $c\in I$ retains its identity even if another type has the same coordinate domain. For the accessibility/contact branch, select a fully scalable model family: for every declared type $c$ and every dimensionless $\lambda>0$, explicitly assume the tag $c^{(\lambda)}$ exists, $B_{c,\lambda}=D_c$, and $D_{c^{(\lambda)}}=\delta_\lambda(D_c)$, with $\delta_\lambda:D_c\to D_{c^{(\lambda)}}$ the coordinate-multiplication bijection. The inverse divides coordinates by $\lambda$. These are additional model conditions; the general, partial-domain postulate [[post-td-bulk-additivity]] alone does not supply them. On a declared energy/work chart $X_c$ the same condition means $X_{c^{(\lambda)}}=\lambda X_c$, scaling every numerical extensive coordinate and the fixed material amounts. An ordered finite separated type $T=(c_1^{(\lambda_1)},\ldots,c_k^{(\lambda_k)})$, $\lambda_i>0$, has the full state domain $X_T=\prod_{i=1}^kD_{c_i^{(\lambda_i)}}$. A separated state retains its tagged constituent tuple. Permuting factors together with their states and reassociating products give the declared identifications; a compound state means the resulting equivalence class of these representatives. The empty type has the singleton state domain $\{()\}$. The aggregate extensive quantities are the sums specified by [[post-td-bulk-additivity]] wherever that postulate admits composition; those sums do not replace the constituent tuple or identify different decompositions.

Supply a process model on these endpoint domains as follows. For each ordered pair $T,T'$ with the same formal composition defined below, declare a configuration set $Z_{T,T'}$ containing the system, auxiliaries and work devices, equilibrium endpoint subsets $Z^-_{T,T'},Z^+_{T,T'}$, and endpoint maps $\xi^-_{T,T'}:Z^-_{T,T'}\to X_T$, $\xi^+_{T,T'}:Z^+_{T,T'}\to X_{T'}$. Also declare control/contact and transfer-record sets $\mathcal K_{T,T'},\mathcal R_{T,T'}$ and a selected outer boundary. The typed records are tuples $P=(I_P,A^-,A^+,z_P,\kappa_P,r_P)$ with a finite time interval $I_P=[t_0,t_1]$, $t_0<t_1$, in seconds, $A^-\in X_T$, $A^+\in X_{T'}$, $z_P:I_P\to Z_{T,T'}$, $\kappa_P\in\mathcal K_{T,T'}$, $r_P\in\mathcal R_{T,T'}$, and $z_P(t_0)\in Z^-_{T,T'}$, $z_P(t_1)\in Z^+_{T,T'}$ mapping to $A^-,A^+$. No regularity of $z_P$ is presumed. The model specifies an admitted subset $\mathcal P_{T,T'}$ of these records, including its auxiliary and work-device endpoint conditions and any adopted conservation constraints. Each admitted transfer record supplies the nonnegative, nondecreasing cumulative maps $H_P^{\mathrm{in}},H_P^{\mathrm{out}}:I_P\to[0,\infty)$, initially zero and with numerical values in joules, with exactly the outer-boundary convention of [[def-td-process-and-protocol]]; internal thermal exchanges between constituents are excluded from these totals. No admission or balance law follows from the tuple types.

For $A\in X_T$, $B\in X_{T'}$ of equal composition, define $A\prec B$ exactly when there is $P\in\mathcal P_{T,T'}$ with $A^-=A$, $A^+=B$ and $H_P^{\mathrm{in}}(t)=H_P^{\mathrm{out}}(t)=0$ for every $t\in I_P$. Require the declared permutation and reassociation maps to transport admitted records bijectively, preserving endpoint maps, the selected boundary, thermal transfers and auxiliary/work-device conditions. Hence existence of an adiabatic witness is independent of representatives. For one-factor endpoints $D_c$, require this record model to reproduce the records and endpoint conditions of [[def-td-adiabatic-accessibility]], so its restriction is $\prec_c$. On fixed-amount charts use the constituent coordinate embeddings into these domains. A later contact model may add joined endpoint domains using this same typed-record scheme and must agree with this relation on existing endpoints. Product accessibility is additional process data, not the coordinate-sum pullback and not necessarily the componentwise relation. As for single systems, write $A\sim B$ when both directions hold and $A\prec\prec B$ when only the forward direction holds.

Scaling a separated compound scales each factor. Adopt coherent preparation transport: $1x$, $x$, $s(tx)$ and $(st)x$ denote the same preparation after their declared tag transport, and scaling commutes with permutation, reassociation and finite separated product. Their raw tags remain distinct; the model declares these transports reversible under $\prec$, and transports of later joined types commute with the same operations. This is an explicit accessibility assumption, not an inference from coordinate multiplication. Merging or splitting copies of one preparation is reversible when A5 is adopted.

The formal composition vector of a compound records, for each primitive label $c$, the sum of its positive scale coefficients. Two compounds have the same composition exactly when these vectors agree. The distinct **formal mass** $m(A)$ is the sum of all scale coefficients in $A$, a dimensionless bookkeeping quantity; it is not physical mass in kilograms, mole amount, energy, or volume. Same-composition compounds have equal formal mass. In particular the relation just defined includes states of the same compound type and may compare different decompositions of the same composition when the model admits a witness.

An equal-composition comparison is a comparison between states of types with the same formal composition vector. The later reaction-network definition may separately admit transitions between distinct composition types, but the mathematical supplier still requires equal formal mass at both endpoints. A physical application must state how its channel preserves the chosen formal mass and separately record its dimensioned conservation balances. The empty unit has one state and formal mass zero. No identity is imposed between a primitive type and a scaled tag, or between two different decompositions of a compound, beyond the explicitly declared reassociation, permutation, and bulk-composition maps.
