<!-- new lines at canonical 28 -->
      url: "https://arxiv.org/pdf/0807.4891v2"

<!-- new lines at canonical 41 -->
For the sutured version, let $E_K$ be the compact knot exterior and put two oppositely oriented meridional sutures $\gamma$ on its boundary torus. Choose a connected oriented annulus $T$, attach $[-1,1]\times T$ along the annular sutured region, and glue the two resulting boundary surfaces by an orientation-compatible diffeomorphism fixing a chosen point from $T$. The result is a closed oriented 3-manifold $\bar Y$ with a distinguished torus $\bar R$; the fixed point determines a standard circle meeting $\bar R$ once. Choose a line bundle $w\to\bar Y$ whose first Chern class is Poincaré dual to that circle, so $\langle c_1(w),[\bar R]\rangle$ is odd. Let $I_*(\bar Y,w;\mathbb Q)$ denote the closed instanton Floer group with rational coefficients, using the admissible fixed-determinant theory in the external input below. For a homology class $z$ of dimension $0$ or $2$ in $\bar Y$, let $\mu(z)$ denote the standard instanton Floer operator associated to $z$; the point and surface operators commute and have degrees $4$ and $-2$, respectively. If $y\in\bar R$, define the closure group $KHI_{\bar Y,\bar R,w}(K;\mathbb Q)$ by

<!-- new lines at canonical 46 -->
This is the simultaneous eigenspace with eigenvalues $(0,2)$ specified by the instanton closure convention. The closure group is considered up to isomorphism, with independence of these auxiliary choices supplied by the external input below and the stated well-definedness justifier; no canonical vector or preferred basis is part of this definition.

## Facts & Assumptions

**Given:** Full AC and the actual based earring and marked admissible closure data in the definition. The singular complex is supplied by the preserved local analytic theorem.

[F1] **External admissible closure input.** Kronheimer–Mrowka, *Knots, sutures and excision*, arXiv:0807.4891v2, §7.1 and Definition 7.3, supplies the ordinary instanton group for a fixed determinant line bundle with odd pairing on an integral surface and the commuting point/surface operators. Definition 7.10 and its following closure-independence argument (§7.4, PDF p. 59), using Theorem 7.7 excision and Propositions 7.8–7.9, give independence of the allowed auxiliary surface and marked gluing choices. The auxiliary surface has a closed curve whose two boundary-surface copies are nonseparating; in this annular knot construction its core has that property. The marked gluing fixes the point determining the standard determinant circle. Genus one is permitted.

[F2] **External torus and coefficient normalization.** The same source's Definition 7.13 (§7.6, PDF pp. 60–61) identifies the knot group with the torus closure above and its simultaneous $(0,2)$ eigenspace; it has half the dimension of the full determinant-one ordinary group, not an additional doubled factor. The source uses complex coefficients for convenience. The rational version used here is explicitly permitted in Kronheimer–Mrowka, *Khovanov homology is an unknot-detector*, §1.1, PDF p. 3, immediately before Proposition 1.4.

These are explicit published external inputs under CLAUDE.md §12 for the current run, not a locally reconstructed ordinary all-genus/excision argument. The well-definedness theorem [[thm-sutured-instanton-khi-rank-detects-unknot]] uses these inputs with the preserved local singular construction. Its proof supplies the rank and rational bridge separately; neither a canonical element nor an integral eigenspace splitting is included in this definition.

<!-- new lines at canonical 72 -->
[Kronheimer–Mrowka, *Knots, sutures and excision* (2008), §§7.1–7.6](https://arxiv.org/pdf/0807.4891v2)

