# Fluid Dynamics research dossier

This is the 2026-10-03 draft design for a broad first-principles Fluid Dynamics category. It supplies explicit continuum postulates and SI quantity conventions, supplier-first mathematical developments and physical consequences, complete local arguments, exact inspected supplier/source statuses, and paired A/B reading paths. It does not edit production items, mathematics originals/imports, engine plans/state or publication.

Read [prose-scaffold.md](prose-scaffold.md) for the continuum models and conceptual route, then [inventory-and-pathway.md](inventory-and-pathway.md) for the actual supplier-first order. [proposed-inventory.json](proposed-inventory.json) carries precise per-item domains, kinds, scopes, prerequisite roles and argument homes. [claim-coverage.json](claim-coverage.json), [supplier-map.json](supplier-map.json) and [closure-ledger.json](closure-ledger.json) separate complete conditional arguments from nonconsumed stronger topics. [supplier-dispositions.md](supplier-dispositions.md) records the integrator's actual reading and links specialist source evidence.

The core covers compressible/incompressible, inviscid/viscous and thermal/non-Newtonian constitutive branches; smooth transport and local/control-volume balances; local smooth incompressible and polytropic Euler evolution; global two-dimensional periodic smooth Navier–Stokes; torus and bounded no-slip Leray–Hopf evolution; rectangular velocity/pressure construction; conservation jumps and scalar entropy selection; exact flows/waves/scaling/stability; and precise kinetic moments, entropy/equality and controlled relaxation/conditional continuum connections. Three-dimensional global smooth regularity, unrestricted hydrodynamic limits and turbulence universality remain unproved discussions.

Proof modules are [foundations](workers/foundations/foundation-proofs.md), [smooth PDE](workers/smooth-pde/proofs.md), [weak/kinetic](workers/weak-kinetic/developments.md), [examples](workers/examples/proofs.md) and the integrator's [averaging arguments](complete-local-arguments.md). Full source PDFs/text remain ignored in worker raw/source directories; their provenance and actual reading extents are retained in tracked source records. Every proof-review/check here is local; no independent acceptance is claimed.

Reproduce the metadata survey and local structural checks from the repository root:

```bash
python3 physics/research/extended-frameworks-2026-10-03/fluid-dynamics/catalogue-suppliers.py
python3 physics/research/extended-frameworks-2026-10-03/fluid-dynamics/integrate-and-check.py
```

The first command catalogs all 35 root mathematics prose-plan families with actual item-file publication statuses where present; its index is metadata inspection, never a substitute for proof reading. The second integrates the stable worker inventories, checks exact argument files/anchors and item/page graphs, homogeneous library classification, unique homes, prerequisite roles, B leaves and 100-item caps, and writes deterministic canonical maps and receipts. [final-report.md](final-report.md) records the final evidence and precise limitations.
