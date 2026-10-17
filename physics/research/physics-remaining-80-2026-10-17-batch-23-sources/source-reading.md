# Batch 23 source reading — positive harmonic conformastatic electrovac data

Run: physics-remaining-80-2026-10-17  
Batch: 23  
Pages: emg-ms03 (A), emg-ms03-examples (B)  
Reading date: 2026-10-17

## Full-text treatments

### Sean M. Carroll

Sean M. Carroll, *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019v1, complete 238-page PDF: <https://arxiv.org/pdf/gr-qc/9712019v1>.

I inspected the complete relevant derivations and surrounding convention statements in Chapter 3: equations (3.65)–(3.67), PDF pages 81–82, for the covariant-derivative commutator and coordinate Riemann order; equations (3.90), (3.92), and (3.95), PDF pages 87–88, for Ricci, scalar, and Einstein contractions. Chapter 4's curved-spacetime Maxwell form and tensor equations were checked as convention context. The local items recompute their component equations; no result is imported without its hypotheses.

| Harvested result | Supported item | Disposition |
|---|---|---|
| Chapter 3, equations (3.65)–(3.67): commutator and coordinate Riemann convention | thm-emg-xs-mp-verification | inline; used as a sign/order cross-check while the item recomputes the connection and Ricci components from the current conformastatic supplier. |
| Chapter 3, equations (3.90), (3.92), and (3.95): Ricci, scalar, and Einstein contractions | thm-emg-xs-br-verification | inline; the item computes both product-factor Ricci tensors and uses the locally stated geometric electrovac equation. |
| Chapter 3, equations (3.65)–(3.67): curvature order and sign | thm-emg-xs-null-wave-verification | inline; the item computes the plane-wave Christoffel and Ricci components under the same explicit convention. |
| Chapter 3, equations (3.90), (3.92), and (3.95): tensor contractions | prop-emg-xs-null-invariants | inline; the null contractions are proved from the local component pattern. |
| Chapter 4: curved-spacetime Maxwell conventions | thm-emg-xs-mp-verification | inline; the local current-form supplier supplies the exact Hodge sign, and the component divergence is evaluated in the item. |

### David Tong

David Tong, *General Relativity*, complete author-hosted lecture notes: <https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf>. The 290-page full-text PDF was fetched and checked. I inspected §§3.2–3.4 for differential-form, curvature, and Einstein-Maxwell conventions; §6.2.1 for Reissner–Nordström; §6.2.5 for the extremal throat and Robinson–Bertotti product; and the following “Multi-Black-Hole Solutions” section for the harmonic ansatz.

| Harvested result | Supported item | Disposition |
|---|---|---|
| Section 6, “Multi-Black-Hole Solutions”: single-center harmonic conformastatic metric and Laplace condition | def-emg-xs-harmonic-mp | included; the definition gives the exact open-domain, smoothness, potential, orientation, and unit conventions. |
| Section 6, “Multi-Black-Hole Solutions”: finite harmonic-center form | prop-emg-xs-mp-multicenter | included; the proposition proves positivity, harmonicity, electrovac equations, and signed regular-sphere fluxes directly. |
| §§6.2.1 and 6.2.5: RN data and extremal throat forms | prop-emg-xs-mp-extremal-rn | included; the exact exterior diffeomorphism, metric, and two-form equality are calculated locally. |
| §6.2.5: near-horizon Robinson–Bertotti product | def-emg-xs-br-products | included; the item defines both product patches and their field data without treating the source's presentation as a proof of the equations. |
| §6.2.5: extremal RN throat scaling context | thm-emg-xs-rn-near-horizon | included; the theorem proves exact pullbacks and \(C^\infty_{\rm loc}\) convergence on \(R>0\), beyond the source's leading near-horizon description. |
| §§3.2–3.4: differential-form, curvature, and Einstein-Maxwell conventions | thm-emg-xs-null-wave-verification | inline; conventions are cross-checked, while all plane-wave field equations are derived locally. |

### Reinhard Meinel and Moritz Hütten

Reinhard Meinel and Moritz Hütten, *On the black hole limit of electrically counterpoised dust configurations*, arXiv:1105.3807v3, complete 8-page paper: <https://arxiv.org/pdf/1105.3807>.

I inspected the full relevant §2 sequence, equations (1)–(7), PDF pages 2–3, the adjacent domain conditions, and the unit footnote. The paper uses \(c=G=1\), Gaussian electromagnetic units, and an electrically counterpoised dust matter model. Those units, dust equations, and matter claims are not imported into the source-free mathematical items.

| Harvested result | Supported item | Disposition |
|---|---|---|
| §2, equations (1), (3), and (4): static conformastatic metric and potential | def-emg-xs-harmonic-mp | included; the item states its own geometric units, sign, smooth positive harmonic hypothesis, and candidate status. |
| §2, equations (5)–(7): dust field equations and Laplace reduction | thm-emg-xs-mp-verification | out-of-scope; these equations govern the paper's matter-bearing dust branch. The assigned pair treats source-free electrovac data and does not assert or import dust equations. |

## Retrieval and source history

The current batch coverage file records the original successful full-body fetch for each source, including timestamp, byte count, SHA-256 prefix, file kind, and page count. The command

node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-23.coverage.json --stamp

returned “3/3 source(s) fetch-verified (0 newly stamped)” and “3/3 source(s) resolved (0 documented drops)”. There were no failed retrievals, recovery retries, source drops, or source-resolution escalations; source_resolution is empty. All 13 harvested source results above have dispositions, also recorded in batch-23.coverage.json.
