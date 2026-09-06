---
page: logarithmic-space-nl-and-reachability
title: "Logarithmic Space, NL, and Reachability"
status: draft
items: [def-read-only-input-logspace-machine, def-l-and-nl, lem-logspace-machines-have-polynomially-many-configurations, def-logspace-many-one-reduction, lem-logspace-reductions-compose, def-directed-st-connectivity, thm-directed-st-connectivity-is-nl-complete, thm-read-only-input-savitch-simulation, thm-nl-is-contained-in-dspace-log-squared-n, def-inductive-reachable-vertex-count, lem-reachability-count-is-verifiable-in-nl, lem-nonreachability-has-an-inductive-counting-certificate, thm-immerman-szelepcsenyi-nl-equals-conl, cor-nspace-is-closed-under-complement-above-logspace, def-logspace-uniform-circuit-family, def-p-complete-under-logspace-reductions, lem-polynomial-time-computations-have-logspace-uniform-circuits, thm-circuit-value-is-p-complete, fs-nl-equals-conl-follows-by-state-swapping]
examples: []
---

This page fixes the uncharged read-only-input convention for logarithmic work
space, develops configuration-graph reductions and directed reachability, and
then proves the two central closure results. It finishes with uniform circuit
compilation and Circuit Value, keeping the open question $\mathrm L=\mathrm{NL}$
separate from the proved equality $\mathrm{NL}=\mathrm{coNL}$.
