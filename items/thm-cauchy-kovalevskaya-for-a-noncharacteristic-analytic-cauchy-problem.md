---
id: thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem
kind: theorem
title: Cauchy–Kovalevskaya on a noncharacteristic analytic hypersurface
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 Corollary 20, printed p. 11, and §5 equations (61)–(68), pp. 12–13; the nonlinear selected-jet and normal-data conventions are explicit local extensions.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.2, Theorem 2.22, PDF p. 24; complete proof §2.3.3, PDF pp. 25–27. That source is quasilinear; the local implicit-branch extension is derived here.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane", "lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form", "thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form", "lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system", "lem-analytic-ordinary-differential-systems-by-coefficient-majorants"]
---

## Statement

An analytic scalar PDE of total order $m\ge1$, locally solved for the highest normal derivative on an analytic noncharacteristic hypersurface, has a unique local real analytic solution germ for prescribed analytic normal jets through order m-1. In solved coordinates the allowed right-hand jets satisfy $|\alpha|+j\le m$ and $j<m$. For an implicit fully nonlinear equation fix a compatible m-jet and require a nonzero derivative in the highest normal jet there; existence and uniqueness hold in its selected local implicit branch. The data are required to induce the lower and mixed components of that compatible jet. Normal jets are the symmetric Euclidean derivatives along the unit normal at the surface, or jets in a specified analytic transverse coordinate.

## Facts & Assumptions

**Given:** The analytic scalar Cauchy equation, analytic initial hypersurface, compatible initial jet and analytic Cauchy data in the statement, with nonzero normal principal coefficient on the selected jet branch.

[F1] Analytic noncharacteristic flattening solves for the normal m-jet near a fixed compatible jet. ([[lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane]]).

[F2] Subtracting the normal Taylor polynomial preserves the solved analytic equation and gives zero data. ([[lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form]]).

[F3] The scalar equation and its data reduce to an analytic first-order jet system; any analytic solution of that system recovers the scalar solution and all data. ([[lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system]]).

[F4] For at least one spatial variable, an analytic first-order system with analytic data has a unique analytic solution germ. ([[thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form]]).

[F5] With no spatial variables, an analytic finite ODE system with prescribed initial value has a unique analytic solution germ. ([[lem-analytic-ordinary-differential-systems-by-coefficient-majorants]]).

## Proof

1.1 Use F1 to choose analytic coordinates carrying the surface to t=0. For Euclidean normal jets use the normal-line coordinates of F1, so the prescribed functions are exactly the coordinate t-jets. At a selected compatible nonlinear jet F1 gives the analytic implicit branch; otherwise the equation is already solved. Every right-hand derivative now has total order at most m and t-order below m, and the lower/mixed initial jets lie in its analytic neighborhood by the data-compatibility hypothesis. [given, F1]

2.1 F2 subtracts the polynomial of the prescribed coordinate jets. F3 constructs the finite first-order jet system with zero analytic data. Its right side is analytic near the zero initial value and spatial jet, because F2 makes the scalar right side analytic at its zero-data centre and F3 replaces each allowed highest jet by a first spatial derivative. If there is at least one spatial variable, F4 supplies an analytic vector solution; with no spatial variables, the system is a finite analytic ODE system and F5 supplies it. F3 then recovers derivative compatibility and proves that the zero-order component solves the scalar zero-data equation. Adding the polynomial restores every prescribed jet. All arguments are local, so shrink finitely until the solution jet stays in the selected branch neighborhood; continuity and its prescribed centre jet ensure this. Composing with the analytic inverse coordinates gives a solution to the original PDE with its original normal data. [step 1.1, F2, F3, F4, F5]

3.1 Two analytic solutions with these data and jets in the selected branch pull back to solutions of the same solved coordinate equation. Subtracting the same polynomial and taking derivative vectors gives two solutions of the same analytic jet system supplied by F3. If there is at least one spatial variable, F4 makes those vector solutions equal; with no spatial variables, F5 does so. Their zero-order components are therefore equal. Adding the polynomial and composing back proves equality of the original germs. No comparison with a different nonlinear branch or with nonanalytic solutions is used. [step 1.1, step 2.1, F2, F3, F4, F5] ∎

## Source notes

Gantumur, §4 Corollary 20, printed p. 11, and §5 equations (61)–(68), pp. 12–13; the nonlinear selected-jet and normal-data conventions are explicit local extensions.
