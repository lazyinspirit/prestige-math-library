---
id: def-td-thermal-contact-constraints
kind: definition
title: Thermal contact family and constraints
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Admitted pair contacts between equilibrium macrostates of the nonrelativistic macroscopic thermodynamic framework; no temperature scale or contact transitivity is defined here.
deps: [def-td-equilibrium-state-domain, def-td-system-and-permitted-exchanges, def-td-process-and-protocol]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §4.1
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §2.2
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
dependency_level: 4
---

## Definition

For each material constitution $c$, let $D_c$ be the equilibrium state domain from [[def-td-equilibrium-state-domain]]. A **thermal-contact family** is a model-declared set $\mathcal T$ of tagged pairs $a=(c_A,x_A)$ with $x_A\in D_{c_A}$. Its tag and coordinate projections are $\operatorname{tag}(a)=c_A$ and $\operatorname{coord}(a)=x_A$; equal numerical coordinate tuples with different constitution tags are not identified.

Fix two members $a=(c_A,x_A)$ and $b=(c_B,x_B)$, named constituents $A,B$ of those constitutions, and a declared contact-protocol convention. A **thermal-contact protocol** is an admitted preparation/process record $P$ of their compound system $A\sqcup B$, with the configuration curve $z_P:I_P\to Z_{A\sqcup B}$ and equilibrium endpoint configurations specified in [[def-td-process-and-protocol]]. The contact model supplies constituent endpoint-coordinate maps

$$\xi_A:Z_{A\sqcup B}^{\mathrm{eq}}\to D_{c_A},\qquad \xi_B:Z_{A\sqcup B}^{\mathrm{eq}}\to D_{c_B},$$

and requires $\xi_A(z_P(t_0))=x_A$ and $\xi_B(z_P(t_0))=x_B$. These constituent maps are additional declared model data; they are not inferred from the compound's coordinate tuple. Write $x_A^+=\xi_A(z_P(t_1))$ and $x_B^+=\xi_B(z_P(t_1))$ for the constituent final coordinates. The two constituents are separated by a declared diathermal contact: matter transfer and mechanical or composition work across that contact are forbidden, while the protocol permits thermal energy transfer between the constituents. The compound's external boundary and all retained constraints are specified as in [[def-td-system-and-permitted-exchanges]] and [[def-td-process-and-protocol]]. No continuity or differentiability of the configuration curve is added here.

The pair is in **thermal contact equilibrium**, written $a\sim_T b$, when, under that declared protocol convention, its admitted contact preparation has $x_A^+=x_A$ and $x_B^+=x_B$, is an equilibrium preparation, and permits no net heat transfer between the constituents. This criterion is protocol-dependent: changing the admitted contact preparation or retained constraints can change the relation. For fixed constitutions, coordinate notation $x_A\sim_T x_B$ abbreviates $(c_A,x_A)\sim_T(c_B,x_B)$ using the two specified tag embeddings. It does not define a relation on untagged coordinates across unspecified material types. The relation is defined only on the stated family $\mathcal T$ and for the declared contact protocols. This definition does not assert that $\sim_T$ is reflexive, symmetric, or transitive, and it does not assign a real-valued temperature to its equivalence classes.
