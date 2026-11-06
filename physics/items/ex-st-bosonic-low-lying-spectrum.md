---
id: ex-st-bosonic-low-lying-spectrum
kind: example
title: "Bosonic Low Lying Spectrum"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 12
deps:
  - pthm-st-open-bosonic-lightcone-spectrum
  - pthm-st-closed-bosonic-lightcone-spectrum
dependency_roles:
  pthm-st-open-bosonic-lightcone-spectrum: physical-result
  pthm-st-closed-bosonic-lightcone-spectrum: physical-result
physical_scope: "A conditional level-zero and first-excited-level calculation in the standard flat critical open/closed bosonic spectra; no stable-vacuum or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§2.3–2.3.3, 3.1–3.1.1 and 5.4–5.4.3 (PDF file pp.47–52, 60–61 and 127–131; printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 121–124); spectrum conventions; each level and polarization count is checked locally."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
generation:
  role: example
---

## Example

Under $D=26$ and $a=\widetilde a=1$, the open $N=0$ state has alpha-prime $M^2=-1$ and the $N=1$ level is massless; the closed $N=\widetilde N=0$ state has alpha-prime $M^2=-4$, while $N=\widetilde N=1$ is massless and decomposes into graviton, antisymmetric tensor, and scalar polarizations.

## Example references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§2.3–2.3.3, 3.1–3.1.1 and 5.4–5.4.3 (PDF file pp.47–52, 60–61 and 127–131; printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 120–124); printed pp.40–45, 53–54 and 121–124); spectrum conventions; each level and polarization count is checked locally.

## Facts & Assumptions

[F1] [[pthm-st-open-bosonic-lightcone-spectrum]] gives $\alpha'M^2=N-1$ for nonnegative integer open weighted level $N=\sum_{n>0,i}\alpha_{-n}^i\alpha_n^i$ under $D=26$, $a=1$.

[F2] [[pthm-st-closed-bosonic-lightcone-spectrum]] gives $\alpha'M^2/4=N-1=\widetilde N-1$ at equal nonnegative weighted closed levels $N=\sum_{n>0,i}\alpha_{-n}^i\alpha_n^i$ and $\widetilde N=\sum_{n>0,i}\widetilde\alpha_{-n}^i\widetilde\alpha_n^i$.

[A1] At the first closed excited level, the polarization space is the tensor product of the left and right 24-dimensional transverse vector spaces with the ordinary Euclidean product.

**Given:** Work only under the two critical flat-spectrum interfaces [F1]–[F2].

## Proof

1.1 Substitute $N=0$ and $N=1$ in [F1]. The open ground state has $\alpha'M^2=-1$, while the first excited level has $\alpha'M^2=0$. [given, F1, algebra]

1.2 Substitute $N=\widetilde N=0$ in [F2] to obtain $\alpha'M^2/4=-1$, hence $\alpha'M^2=-4$. Substituting $N=\widetilde N=1$ gives $M^2=0$. The first closed massless polarization space is $\mathbb R^{24}\otimes\mathbb R^{24}$ by [A1]. [given, F2, A1, algebra]

2.1 Identify that tensor product with real $24\times24$ matrices. Every matrix $A$ decomposes uniquely as $\frac12(A+A^T)+\frac12(A-A^T)$ into symmetric and antisymmetric parts; the symmetric part decomposes uniquely into its traceless part plus $\frac{\operatorname{tr}A}{24}I$. Their dimensions are $24\cdot25/2-1=299$, $24\cdot23/2=276$, and $1$, whose sum is $576=24^2$. These are the symmetric-traceless tensor, antisymmetric tensor, and scalar polarizations. [step 1.2, algebra] ∎

## Remarks

The negative values of $M^2$ at level zero are tachyonic mass-squared values in this model; they do not state that a stable vacuum exists.
