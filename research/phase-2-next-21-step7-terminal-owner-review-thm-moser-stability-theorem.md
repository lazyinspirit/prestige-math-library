# Step-7 terminal owner-review draft: `thm-moser-stability-theorem`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `231d752c9d267a3ef414fdb98167a08a8cef2b590ccdbde7b669afc5d8cbdca2`  
**Rejected-item SHA-256 (historical):** `e74526d05a927ad2349a145b1129dc0e07fe986f22b5fc91b6b903b14e6bed7b`  
**Proposed disposition:** `repair-required`

## Mathematical review

Published F3 requires the time-dependent field on an open interval I. Step 1.1 only obtains X_t for 0≤t≤1 and Step 2.1 invokes F3 to continue trajectories at the finite endpoint. The hypotheses do not state that the path, primitive or field has an open-interval extension; in this library “finite-dimensional parameter manifold” also defaults boundaryless, whereas Step 1.1 passes P=[0,1] to F1. Compactness handles spatial escape once an open-time field exists, but cannot supply the missing endpoint domain by itself.

## Repair disposition

Establish the closed-parameter version of F1 or explicitly extend the smooth path/primitive in time, then extend X_t smoothly to an open interval around [0,1], keeping the forms nondegenerate on a common interval by compactness. Apply F3 there and use the usual compactness continuation; make the endpoint convention and P=[0,1] application explicit.

## Implemented repair — draft owner evidence

**Repaired item SHA-256:** `179e7e2cc1ba42b8b0245da07dd95455c104a180b0375a4f728c3b138050215b`  
**State:** local repair implemented; terminal owner decision and judge verdict still pending.

Step 1.1 applies the fixed finite parametric primitive construction to the exact family ω_t−ω_0 and explains preservation of smooth one-sided endpoint derivatives, avoiding an unjustified P=[0,1] invocation of the boundaryless parameter-manifold Statement. New F4 and Step 2.1 use the published smooth step τ: the rescaled field Y_s=τ′(s)X_{τ(s)} extends by zero to a smooth field on open time R because τ is flat at both endpoints. The open-interval evolution theorem now applies literally; compactness prevents spatial escape. The original-time integral equation gives joint smoothness of φ_t at t=0,1 despite τ^{-1} not being smooth there. Batch 10 manifest, citation, derivation and endpoint worksheet match this repair.
