---
id: cex-td-tagged-scaling-not-fixed-type-homogeneity
kind: counterexample
title: Tagged bulk scaling need not be homogeneity within one fixed tag
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A formal constitutive-data countermodel to a logical implication between the framework's tagged scaling and entropy-additivity postulates; it is not an empirical model of a material.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
aliases: []
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.9.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
    - title: David Tong, Statistical Physics, complete lecture notes, §1.4.3
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
dependency_level: 5
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

## Statement refuted

The tagged bulk-scaling relation of [[post-td-concave-fundamental-entropy]] together with the additive coordinate composition of [[post-td-bulk-additivity]] forces the fixed-tag identity $S_c(\lambda x)=\lambda S_c(x)$ for each material constitution $c$.

## Facts & Assumptions

**Given:** A dimensionless positive tag $\tau$, positive dimensionless state coordinates $\hat U,\hat V,\hat n$, and the following formal family; their physical coordinates $U,V,n$ use joules, cubic metres, and moles.

[A1] [[post-td-bulk-additivity]]: Independent separated systems may have a composition map that adds the admitted extensive coordinates, and the bulk scaling map may send a state of tag $c$ to a distinct tag $c^{(\lambda)}$.

[A2] [[post-td-concave-fundamental-entropy]]: Entropy is finite and concave on its specified convex domains, additive for admitted independent separated systems, and satisfies the tagged relation $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$. The tag $c^{(\lambda)}$ is not silently identified with $c$.

[F1] [[def-td-equilibrium-state-domain]]: The equilibrium domain uses dimensionless coordinates, with physical values $(U,V,n)$ supplied by its diagonal SI coordinate map. A formal positive chart may be specified as an open subset of those dimensionless coordinates.

[F2] [[def-td-si-quantities]]: $U,V,n$ have units joules, cubic metres, and moles; entropy has units $\mathrm{J\,K^{-1}}$.

## Counterexample

1.1 Let tags be $\tau>0$, compose them by $\tau_A\oplus\tau_B=\tau_A+\tau_B$, and scale by $\tau^{(\lambda)}=\lambda\tau$. For each tag use the open dimensionless state domain $D_\tau=(0,\infty)^3$ with coordinates $x=(\hat U,\hat V,\hat n)$ and physical map $\Phi_\tau(x)=(\hat U\,\mathrm J,\hat V\,\mathrm{m^3},\hat n\,\mathrm{mol})$. Choose $a,b,q>0$ in $\mathrm{J\,K^{-1}}$ and define $S_\tau(x)=a\hat U+b\hat V+q\tau$. The corresponding physical-coordinate representative is $S_\tau^{\mathrm{SI}}(U,V,n)=aU/(1\,\mathrm J)+bV/(1\,\mathrm{m^3})+q\tau$. By [F1] the dimensionless domain is open and positive, and [F2] makes every entropy term have units $\mathrm{J\,K^{-1}}$. The function is finite, $C^2$, affine and hence concave; its physical energy derivative is $S_{\tau,U}^{\mathrm{SI}}=a/(1\,\mathrm J)>0$. [given, F1, F2, algebra]

2.1 For two separated states, define the compound tag as $\tau_A+\tau_B$ and the composition map to add their dimensionless state coordinates. Its physical coordinates are therefore the sums of the constituent physical coordinates. Then $S_{\tau_A+\tau_B}(x_A+x_B)=S_{\tau_A}(x_A)+S_{\tau_B}(x_B)$, so the model satisfies the stated coordinate and entropy additivity. [A1, A2, step 1.1, algebra]

2.2 Under scaling, $S_{\lambda\tau}(\lambda x)=a\lambda\hat U+b\lambda\hat V+q\lambda\tau=\lambda S_\tau(x)$, so the tagged scaling relation in [A2] holds for every $\lambda>0$. [A1, A2, step 1.1, algebra]

3.1 For the same fixed tag $\tau$, however, $S_\tau(2x)=2a\hat U+2b\hat V+q\tau$ whereas $2S_\tau(x)=2a\hat U+2b\hat V+2q\tau$. Since $q\tau>0$, these values differ. Thus tagged scaling plus the stated additivity does not imply fixed-tag homogeneity. [given, A1, A2, step 1.1, step 2.2, algebra] ∎
