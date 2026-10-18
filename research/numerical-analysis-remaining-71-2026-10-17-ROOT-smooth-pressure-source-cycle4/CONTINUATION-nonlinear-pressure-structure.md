# Fresh nonlinear/tensor-pressure source continuation

Research only. The question here is global pressure for actual energy-class no-slip NS with better initial data (V or smooth H2), and corresponding genuine Galerkin estimates, rather than a generic L6/5-force resolvent. The original smooth MINI instantaneous estimate is not resolved by the sources inspected here. This note does not reuse the generic H_sigma-initial-data counterexample as an obstruction to the smooth claim.

## 1. Actual no-slip Faedo–Galerkin NS source

Jean-Luc Guermond, *Faedo–Galerkin weak solutions of the Navier–Stokes equations with Dirichlet boundary conditions are suitable*, J. Math. Pures Appl. 88 (2007), 87–106, DOI 10.1016/j.matpur.2007.04.009.

Actual author full text: https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_JMPA_2007.pdf . Saved as `guermond_JMPA_2007.pdf` and `.txt`, 20 pp.

Actually inspected §§1.1–1.2 domain assumptions, §2 discrete setting and recurrence, §§3.1–3.4 including the pressure Lemma 3.5 and full Fourier-based derivative-to-pressure argument, and §5's collected assumptions and main theorem. The commutator passage-to-limit arithmetic and every cited fractional norm theorem were not independently reverified.

This paper treats actual three-dimensional nonlinear Navier–Stokes with homogeneous Dirichlet boundary conditions. It is therefore materially different from merely placing an arbitrary load in a proposed Stokes theorem.

Section 3.2 explicitly explains the desired continuous mechanism: energy interpolation gives u dot grad u in L^p_t L^q_x on the line 2/p+3/q=4; citing Sohr–von Wahl, the text describes mixed-norm nonstationary Stokes estimates for p,q>1; q=6/5 then leads by Sobolev to pressure in L4/3_t L2_x. The text immediately says that reproducing this mixed-norm pressure estimate on the discrete level requires an Lp(Lq) resolvent theory that was not available to the author, and instead pursues fractional Hilbert-space estimates. The displayed (3.3)–(3.4) are a discussion of the mechanism, not a self-contained proof of the cited Sohr–von Wahl theorem; in particular one must account for the nonlinear right side and the initial value rather than reading their shorthand right side as a forcing-only estimate for arbitrary u0.

The actual hypotheses and resulting discrete theorem are decisive:

- Equations (1.4) and (1.8) assume H2 regularity of the Dirichlet Laplacian and Stokes operator. The paper names convex or C1,1 domains as sufficient. These assumptions do not follow for every original Lipschitz polyhedron.
- Equation (3.14) assumes u0 in V2=H2 intersect V_sigma and suitable f in L2H^-1 intersect LpLq. Thus the original smooth H2 initial datum does meet this *initial* requirement; the old generic H_sigma initial-data objection is irrelevant to this part of the source.
- The Galerkin initialization is the actual mass projection Phu0, so the paper's analysis really encounters the same type of initialization rather than silently replacing it with Ritz data.
- Its spatial fractional discrete norm equivalences and global inverse inequalities are explicitly tied to quasiuniform meshes in the collected hypotheses on PDF p.15. They are not original arbitrary shape-regular mesh suppliers.
- The scheme is continuous in time (Faedo–Galerkin), not arbitrary-partition backward Euler.
- Actual pressure Lemma 3.5 is **not** an instantaneous L4/3L2 estimate. It proves pressure bounded in H^-r_t H^{1-s}_x for 1/2<=s<=7/10 and r>3/4−s/2. The Fourier argument controls distributional time regularity, and uses it to pass to the pressure-velocity product. It does not permit differentiating a primitive or upgrading a negative-time norm to the original instantaneous norm.

This source identifies precisely the useful pressure structure and the genuinely difficult discrete analogue. It cannot discharge the original graded, arbitrary-time-partition obligation. It also provides no source-backed reason to call the original smooth assertion false or an open problem.

## 2. Why the earlier periodic Galerkin pressure theorem does not supply the boundary case

The author full text `galerkin_suitable_JMPA_2005.pdf` (14 pp) is the paper *Finite-element-based Faedo–Galerkin weak solutions to the Navier–Stokes equations in the three-dimensional torus are suitable*, published JMPA 85 (2006), 451–464.

Full source: https://people.tamu.edu/~guermond/PUBLICATIONS/galerkin_suitable_JMPA_2005.pdf . Saved with `.txt`.

Actually inspected its opening domain definition and the full pressure duality Lemma 3.2. That lemma does give a discrete L4/3_t L2_x pressure estimate. Its periodic Poisson/gradient dual test relies on the torus, exactly as the 2007 paper explains. The test does not address no-slip tangential traces, and importing it would replace the original boundary problem. It is retained only as a precise source comparison, not a logical supplier.

## 3. Local/distributional-pressure regularity source does not establish global no-slip pressure

Hyunju Kwon, *The role of the pressure in the regularity theory for the Navier–Stokes equations*, arXiv:2104.03160v3, 1 September 2021, 24 pp.

Full source: https://arxiv.org/pdf/2104.03160 . Saved `pressure-role2021.pdf` and `.txt`.

Actually inspected the entire introduction and solution definitions pp.1–5, and the localized Leray/harmonic decomposition setup §2. The epsilon-regularity iteration in the remainder is not claimed checked.

Its dissipative solution definition is on spacetime balls, permits p in D', and uses compactly supported interior tests. Its short-time Theorem 1.6 proves regularity on a smaller interior ball under an initial L3 smallness condition. The phrase “bounded domain” in the introduction does not mean that the theorem imposes or analyzes the original no-slip boundary. The source deliberately permits distributional harmonic pressure; it does not globally convert that pressure to L4/3_t L2_x. Neither its local smoothing theorem nor its tensor decomposition can be imported as an original global no-slip pressure result.

## 4. Direct original/review source retrieval limit

Located original Sohr–von Wahl, *On the regularity of the pressure of weak solutions of Navier–Stokes equations*, DOI 10.1007/BF01210782, and Reinhard Farwig's 2023 review *Ls(Lq)-estimates of the pressure — The proof of Sohr-von Wahl and its impact on mathematical fluid dynamics*, DOI 10.1007/s00013-023-01899-2.

The actual original/review full texts were not obtained. Springer and its redirect returned client-challenge HTML. The Darmstadt repository record 28340, old PDF route, export endpoint and new handle/API routes returned challenge HTML as well. Crossref/OpenAlex/Datacite supplied metadata only. No theorem, detailed initial-data condition or original proof is attributed to either unread paper. The 2007 Guermond full text is the actual checked source for the discussion above; its citation is not a locally completed proof of the original theorem.

A nominal Project Euclid Masuda download returned a one-page challenge document and was removed, with no mathematical conclusion drawn from it.

## Disposition

The new source evidence supports continuing to seek an actual mixed parabolic pressure estimate using the special NS load/initialization structure. It does not authorize a generic L6/5 load theorem already ruled out by the local resolvent construction, and it does not supply the required arbitrary-graded-MINI/arbitrary-partition fractional estimate. No new canonical item is ready from this lane, and no exact-scope smooth counterexample was obtained. Only files under this research directory were written; canonical content, consumers, metadata and workflow controls were untouched.
