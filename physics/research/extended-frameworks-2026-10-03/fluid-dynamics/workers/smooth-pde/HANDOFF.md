# Smooth PDE handoff

Completed research artifacts, 2026-10-03:

- `proofs.md`: S01–S10 and PS01/PS02 complete arguments/conditional uses. Includes explicit Fourier spaces and pressure, local smooth incompressible and polytropic compressible Euler IVPs, continuation/stability, fixed-time smooth torus inviscid limit, wall/exterior conditional balances, exact compatible channel evolution, linear acoustics/scaling, global smooth 2D periodic Navier–Stokes, and rectangular stationary no-slip Stokes with velocity H1_0 and pressure Hminus1 modulo constants.
- `inventory.json`: 42 proposed items in five homogeneous-domain A/B pairs. FD-S01 11/2; FD-S02 6/4; FD-S03 9/3; FD-PS01 3/1; FD-PS02 2/1. All B items are leaves. Foundation physical IDs are coordinator-confirmed reservations, not published suppliers.
- `sources-and-suppliers.json`: exact inspected files/current publication status and reading extent, checked E30/E13/E14/E23/E24/M34 uses, root planned analysis discovery, authoritative Fefferman problem-description retrieval and six-page reading including errata. It explicitly denies transitive independent proof certification and whole-book reading. Raw PDF/text retained under ignored `sources/raw/`; absence of pdftotext was recovered with installed fitz.
- `closure-ledger.json`: repairs and affected local consumers, completed scope, genuinely missing stronger supplier chains, named known-open problems.
- `build-records.py` and `structural-checks.json`: reproducible local graph/domain/B-leaf/page-count checks. Run `python3 physics/research/extended-frameworks-2026-10-03/fluid-dynamics/workers/smooth-pde/build-records.py` from the root. This rebuilds source hashes and inventories, so run only when accepting current source snapshots.

The pressure theorem includes arbitrary L2 forcing, true distributional momentum, pressure uniqueness modulo constants and a bounded Hminus1 pressure map. It makes no stronger L2 pressure claim. No-slip is exactly H1_0 completion; interpreting it through an explicit trace map uses the separate trace theorem. Global2D viscosity is proved by an actual logarithmic Fourier closure after enstrophy, not inferred from the vorticity equation alone.

Important repaired findings: streamwise-periodic Poiseuille needs body force or a nonperiodic infinite channel; local uniqueness now has an earlier given-solution difference lemma, eliminating a concealed proof cycle; compressible bulk-viscosity convention matches foundations' 2ηD0+ζ(divu)I.

Required stronger scopes are honest obligations: general nonlinear nonuniform-density compressible viscous smooth IVP; full arbitrary-wall/exterior smooth IVP; stronger L2 pressure and boundary regularity; global smooth 2D Euler. None supplies an asserted theorem here. Unrestricted 3D global smooth NS/Euler remain named open problems.

No original/imported mathematics, existing physics scaffold, workflow engine, gate, publication or independent acceptance receipt changed. All writes remain inside this worker directory. Coordinator/root own integration and any decision to assert stronger required scopes.
