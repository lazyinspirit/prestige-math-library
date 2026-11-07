---

id: thm-hilbert-eisenstein-special-value-expansion
kind: theorem
title: "Hilbert Eisenstein series and special-value cusp expansion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-hilbert-modular-form-over-a-ring-and-cusp-expansion
  - def-fourier-transform-on-the-total-real-ideal-space
  - thm-functional-equation-for-total-real-ideal-space-l-series
  - thm-siegel-rationality-of-totally-real-abelian-l-values
  - def-totally-real-ray-class-group-and-norm-character
  - def-schwartz-functions-on-the-total-real-ideal-space
  - def-axiom-of-choice
  - def-countable-choice
  - def-hilbert-blumenthal-tate-object-and-cusp
dependency_level: 23
justified_by: []
axiom_use: >-
  AC and Countable Choice are used through the corrected moduli, adelic topology, and analytic integration suppliers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "P. Deligne and G. Pappas"
      url: "https://www.numdam.org/item/CM_1994__90_1_59_0.pdf"
      locator: "Introduction pp. 59\u201360; \u00a7\u00a72.1\u20132.4, 3.1\u20133.5, 4.1\u20134.5."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
    - title: "E. Goren"
      url: "https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf"
      locator: "Ch. 5 \u00a75.1, pp. 65\u201367; \u00a75.2, pp. 147\u2013151."
verification: {}
---
## Statement

Assume AC and Countable Choice through the cited moduli and adelic suppliers. Let $K\ne\mathbb Q$ be totally real of degree $r$, let $\mathfrak f$ be a nonzero integral conductor, and let $\phi$ be a Schwartz function on the ideal space, supported on integral ideal classes, defined modulo $\mathfrak f$, and of parity $(-1)^k$ for an integer $k\ge1$. Fix a nonzero integral ideal $\mathfrak B$ and use polarization module $\mathfrak B^{-1}$. Define the modification $\widetilde\phi$ to be the Schwartz function supported on integral ideals $\mathfrak x\subseteq\mathfrak B$ with $\widetilde\phi(\mathfrak x)=\phi(\mathfrak x^{-1}\mathfrak B)$; for $c\in\mathcal G_K$, set $\widetilde\phi_c(x)=\widetilde\phi(cx)$ and $\phi_c(x)=\phi(cx)$. For $\alpha\in K^\times$, put $\mathfrak a=(\alpha)$ and let $c_\alpha\in\mathcal G_K$ be the cusp class represented by the ideal/finite-idele pair $(\mathfrak a,\alpha^{-1})$. There is a Hilbert Eisenstein series $G_{k,\phi}$ whose expansion at the cusp determined by $\alpha$ is as follows, with formal variables $q^\mu$ indexed by totally positive $\mu\in K$:

For $k>1$,
$$G_{k,\phi}|_\alpha=N(\mathfrak a)^k\left\{2^{-r}L(1-k,\phi_{c_\alpha})+\sum_{\mu\gg0}\left(\sum_{\substack{\mathfrak B\mathfrak a^2\subseteq\mathfrak x}}\phi_{c_\alpha}(\mu\mathfrak x^{-1})N((\mu)\mathfrak x^{-1})^{k-1}\right)q^\mu\right\}.$$

For $k=1$,
$$G_{1,\phi}|_\alpha=N(\mathfrak a)\left\{2^{-r}L(0,\phi_{c_\alpha}+\widetilde\phi_{c_\alpha})+\sum_{\mu\gg0}\left(\sum_{\substack{\mathfrak B\mathfrak a^2\subseteq\mathfrak x}}\phi_{c_\alpha}(\mu\mathfrak x^{-1})\right)q^\mu\right\}.$$

Here $\mu\mathfrak x^{-1}$ in a function argument denotes the ideal-space class of $(\mu)\mathfrak x^{-1}$, and the inner sums are finite. The weight-one constant term uses $L(0,\phi_{c_\alpha}+\widetilde\phi_{c_\alpha})$; it is not obtained by substituting $k=1$ in the $k>1$ formula.

## Facts & Assumptions

**Given:** $K,\phi,\mathfrak f,k$, and an unramified cusp.

[F1] A modular form is a scalar-compatible rule on the corrected Hilbert–Blumenthal moduli problem, and its cusp expansion is obtained by evaluation on the Tate object. [[def-hilbert-modular-form-over-a-ring-and-cusp-expansion]] [[def-hilbert-blumenthal-tate-object-and-cusp]]

[F2] The Fourier transform on the ideal space and the functional equation supply the analytic continuation and Mellin input in the Eisenstein construction. [[def-fourier-transform-on-the-total-real-ideal-space]] [[thm-functional-equation-for-total-real-ideal-space-l-series]]

[F3] Rationality of the constant special values is supplied by the Siegel rationality statement. [[thm-siegel-rationality-of-totally-real-abelian-l-values]]

[A1] The lattice-sum convergence, analytic continuation at weights one and two, and complete cusp-by-cusp divisor-sum calculation have not been reconstructed here. The separate weight-one correction is retained in the statement but its derivation is absent.

[A2] AC and Countable Choice are inherited through the moduli and adelic suppliers and are used in the existence/convergence framework. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The hypotheses above.

1.1 The Hilbert Eisenstein series is constructed by summing the Fourier transform of $\phi$ over invertible $\mathcal O_K$-sublattices in the Tate lattice; the parity condition makes the quotient by the choice of positivity independent of that choice. AC and Countable Choice are carried by [A2]. Its evaluation at a cusp is therefore a candidate modular form with the cusp expansion described in the statement. [F1, F2, A2, given]

2.1 Computing the constant coefficient uses the Mellin continuation in [F2] and [F3]; computing the nonconstant coefficients unfolds the lattice sum into the finite ideal-divisor sum. In weight one, a separate zero-index contribution yields the modified term $L(0,\widetilde\phi_{c_\alpha})$. These computations are not fully established in this carrier, so the theorem is escalated. [F2, F3, A1]

## Statement references

[[def-hilbert-modular-form-over-a-ring-and-cusp-expansion]]

[[def-hilbert-blumenthal-tate-object-and-cusp]]

[[def-fourier-transform-on-the-total-real-ideal-space]]

[[thm-functional-equation-for-total-real-ideal-space-l-series]]

[[thm-siegel-rationality-of-totally-real-abelian-l-values]]

[P. Deligne and K. A. Ribet, Theorem 6.1 and formula (6.2), printed p.267](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)
