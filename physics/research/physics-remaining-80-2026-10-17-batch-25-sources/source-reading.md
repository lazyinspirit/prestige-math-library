# Batch 25 source reading — Harmonic static multicenter electrovac model

Run: physics-remaining-80-2026-10-17  
Batch: 25  
Pages: emg-s02 (A), emg-s02-examples (B)  
Reading date: 2026-10-17

## Full-text treatments

### David Tong

David Tong, *General Relativity*, complete author-hosted 290-page PDF: <https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf>.

The complete PDF is archived at
research/physics-remaining-80-2026-10-17-batch-25-sources/raw/tong-gr.pdf.
I read the full displayed sequence in §6.2.5 from the extremal RN metric
through its leading near-horizon AdS2 × S2 form, and the following complete
“Multi-Black-Hole Solutions” section through the harmonic finite-center
ansatz. I also inspected the stated horizon and force-balance interpretations
so their scope is not silently imported. Sections 3.2–3.4 were read for the
curved Maxwell, curvature, and Einstein–Maxwell conventions. The local
mathematical items supply the exact hypotheses and proofs used here.

| Harvested result | Supported item | Disposition |
|---|---|---|
| §6.2.5, extremal RN throat and Robinson–Bertotti near-horizon form | pthm-emg-xs-br-limit | included as solution context; the local predecessor proves exact pullbacks and C-infinity local convergence. |
| §6, harmonic conformastatic metric and finite-center ansatz | pthm-emg-xs-mp-model | included; the current mathematical suppliers give the punctured domain, smoothness, field equations, and finite fluxes. |
| §§3.2–3.4, curved Maxwell, curvature, and Einstein–Maxwell conventions | pthm-emg-xs-geometric-to-si-model | inline convention check; the SI scaling proof is local. |
| Multi-black-hole horizon and force-balance interpretation | None | out-of-scope; this batch makes no horizon-extension, stability, black-hole-realization, or physical-process claim. |

### Sean M. Carroll

Sean M. Carroll, *Lecture Notes on General Relativity*, complete 238-page
arXiv PDF: <https://arxiv.org/pdf/gr-qc/9712019v1>.

The complete PDF is archived at
research/physics-remaining-80-2026-10-17-batch-25-sources/raw/carroll-grnotes.pdf.
I read Chapter 7’s charged RN sequence, equations (7.151)–(7.161), including
the electromagnetic stress, field components, horizon roots, and extremal
case. Chapter 4’s complete curved Maxwell differential-form and
Einstein–Maxwell normalization discussion was checked as convention context.
The source’s Gaussian charge normalization and global black-hole interpretation
are not imported; local SI formulas and open-domain limits come from the
named suppliers and complete local arguments.

| Harvested result | Supported item | Disposition |
|---|---|---|
| Chapter 4, curved Maxwell and Einstein–Maxwell stress conventions | pthm-emg-xs-geometric-to-si-model | inline; the exact SI conversion is derived locally from the adopted postulate and mathematical definition. |
| Chapter 7, equations (7.152)–(7.160), charged RN metric and field | pthm-emg-xs-mp-extremal | inline; the MP/RN equality and SI parameter substitution are proved locally. |
| Chapter 7, Case Three, extremal RN parameter relation | pthm-emg-xs-mp-extremal | included; the item states the local extremal relation as |q_e|=M. |
| Chapter 7 interior and horizon interpretation | None | out-of-scope; this batch establishes only the exact open exteriors and a local limit. |

### Y. Nutku

Y. Nutku, *Electrovac pp-waves*, arXiv:gr-qc/0502049v2, complete
three-page paper: <https://arxiv.org/pdf/gr-qc/0502049v2>.

The complete PDF is archived at
research/physics-remaining-80-2026-10-17-batch-25-sources/raw/nutku-electrovac-pp-waves.pdf.
The paper was read in full, all three pages. Section 1’s equations (1)–(3)
give exact plane-fronted electromagnetic-wave and Bertotti–Robinson context;
§2 gives a separate pp-wave class; §4 gives a complex holomorphic profile
family. Its signature and normalization differ from the local framework.
The batch uses its exact examples only as context and proves the current
smooth real profile class and all SI transformations through named local
suppliers.

| Harvested result | Supported item | Disposition |
|---|---|---|
| §1, equations (1)–(2), Baldwin–Jeffery electromagnetic pp-wave | pthm-emg-xs-null-wave-model | included as independent exact-wave context; the local item proves the stated broader real harmonic profile class. |
| §1, equation (3), Bertotti–Robinson product | pthm-emg-xs-br-model | inline context; the full product equations are supplied by the local mathematical predecessor. |
| §2 and §4, separate complex-profile pp-wave families | None | out-of-scope; their complex holomorphic hypotheses and normalization are not part of the assigned real harmonic profile class. |

## Retrieval and source history

The three full-text documents are archived in the batch source directory with
exact SHA-256 hashes recorded in batch-25.coverage.json. Two independent
complete lecture-note treatments back the A page; the specialized three-page
paper adds plane-wave context. No retrieval failure, recovery retry, source
drop, or source-resolution escalation occurred; source_resolution is empty.
After the coverage record was complete, the actual command
node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-25.coverage.json --stamp
returned 3/3 sources fetch-verified (3 newly stamped) and 3/3 sources resolved (0 documented drops). The complete PDF stamps record 290, 238, and 3 pages respectively. No retrieval failed and no recovery retry, source drop, or source-resolution escalation was needed.

