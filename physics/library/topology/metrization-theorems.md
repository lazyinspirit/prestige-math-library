---
page: metrization-theorems
title: "Metrization: Urysohn, Nagata–Smirnov, Bing, Smirnov"
status: published
items: [def-discrete-family-and-sigma-bases,
        lem-discrete-families-are-locally-finite,
        def-locally-metrizable-space,
        def-compatible-normal-sequence-of-open-covers,
        lem-alexandroff-urysohn-metrization-lemma,
        lem-metric-spaces-have-sigma-locally-finite-bases,
        thm-nagata-smirnov-metrization,
        thm-bing-metrization,
        cor-urysohn-metrization,
        lem-locally-finite-union-of-sigma-locally-finite-bases,
        thm-smirnov-local-metrization]
examples: []
---

Metrizability is controlled here by families of open sets: locally finite and discrete decompositions of a basis, and normal sequences whose stars shrink around points. The development uses the library’s convention that regularity does not include $T_1$, so the separation axiom is always stated separately. Choice is a sufficient hypothesis for the cover and well-ordering constructions used in the proofs.

The Nagata–Smirnov proof constructs cozero functions and an $\ell^2$ metric
from a sigma-locally-finite base. Under AC,
[[lem-metric-spaces-have-sigma-discrete-open-bases]] supplies the discrete-base
direction used by Bing; the sigma-locally-finite metric-space basis supports
Nagata–Smirnov. The second-countable Urysohn theorem follows as a corollary. The
normal-sequence construction supplies a separate metrization tool. Smirnov’s
local criterion merges local bases along a closure-controlled locally finite
shrinking $\overline{W_s}\subseteq U_s$.
