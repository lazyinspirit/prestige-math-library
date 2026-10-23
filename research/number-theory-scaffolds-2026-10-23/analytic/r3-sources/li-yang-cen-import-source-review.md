# Source audit for Li–Yang and Cen circle/divisor inputs

**Review date:** 2026-10-23. **Owner:** analytic-NT R3. **Scope:** audit the exact exponential-sum, spacing, decoupling, and mean-value inputs cited by Li–Yang (2023) and Cen–Gao–Zhang–Zhang (2026). This is a source review only; it creates no library item and changes no R1 artifact.

## Summary and proof-status distinctions

1. The 2017 arXiv-v1 paper of Bourgain–Watt, *Mean square of zeta function, circle problem and divisor problem revisited*, states a divisor/circle exponent `517/1648 = 0.31371…`, and §7 gives a detailed Huxley Theorem 1 parameter invocation. However, the arXiv record now says the paper was withdrawn in 2023. Nigel Watt’s withdrawal comment identifies gaps in Propositions 2 and 3 and a problem in Proposition 1′, so Theorems 1–3 “lose their status as theorems.” That exponent is **not** a theorem supplier and must not be used to dispute Li–Yang or to claim a stronger bound. The §7 calculations remain useful only as a record of what that withdrawn manuscript attempted to invoke.
2. Li–Yang’s Bombieri–Iwaniec argument directly uses the variant double-large-sieve inequality in Bourgain–Watt 1505.04161v1, §5, and Huxley 2003 second-spacing results through its own §4. The §5 inequality is fully read; the Huxley 2003 primary article is not accessible in the local source environment, so its theorem proof remains an explicit local authoring/source gap. Huxley 2005 is historical context in the consulted Bourgain–Watt discussion, not an additional direct Li–Yang theorem input identified in Li–Yang’s proof.
3. In Cen et al. the amplitude-dependent Guth–Maldague cone wave-envelope estimate and BDG’s degree-five Vinogradov mean value theorem are **separate** inputs. BDG does not prove Guth–Maldague Theorem 2. Cen uses Guth–Maldague for its large-range first-spacing distribution estimate (Theorem 6.1), and uses the degree-five VMVT separately in the small-range count (equation (3.12), with `s=15`).
4. Cen’s Robert–Sargos estimates are identified exactly by its own proof locators and parameter substitutions below, but I could not retrieve the complete 2006 primary paper from the author or publisher endpoints. Do not mark an R–S theorem proof locally closed on the basis of Cen’s citation or search-index snippets. Watt’s complete 2004 article is local and the exact Lemma 8.2 application is read, but Watt’s Lemma 8.1 proof imports deep Huxley material and Huxley–Watt 2000, so the complete local proof chain for that supplier also remains open.

## Source evidence and exact use

### Li–Yang and Cen consumer texts

- **Li–Yang:** Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem,” arXiv:2308.14859v2. R1’s local source files are `analytic/r1-sources/li-yang-divisor-circle-arxiv2308.14859v2.pdf/.txt` (PDF SHA-256 `c1e3578d9330bf6910559eb40e8e1d82e281c964487e5330de3d2a63cb2b38ad`; text SHA-256 `f5333acfd12be8be7b260f884de36d3f299e27cef9826f28419425817179485c`). R1’s source ledger records that the full 32-page v2 was read. In this supplement I checked the cited argument locations in §§3.1–3.2, §§4.1–4.2, and §5.
- **Cen et al.:** Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for Gauss’s Circle Problem,” arXiv:2610.21730v1, submitted 15 October 2026. R1’s local files are `analytic/r1-sources/gauss-circle-new-bound-arxiv2610.21730.pdf/.txt` (PDF SHA-256 `6736b7bf18dea08ac5060be511ef2e0f5ba53bb6bd0b5f033db0f3a6427c941b`; text SHA-256 `c5f36d4e377b4cbe7145bc2bbea3e16c97e5441528d9d02c98be781b0e540e18`). R1’s source ledger records that the full 34-page v1 was read. In this supplement I read the exact cited passages in §3.2 (BDG, (3.12)); §4.16–4.17 (Robert–Sargos, (4.16)–(4.17)); all §5.1–5.4 (Watt and its later double-large-sieve use); and §6.1–6.2 (Guth–Maldague Theorem 2, Theorem 6.1, and the complete proof of Cen’s Lemma 6.1).
- The source status/date above is limited to the identified versions. Cen’s 2026 v1 theorem is reported as the result asserted by that dated preprint, not as an exhaustive present-frontier claim.

### Bourgain–Watt, arXiv:1709.04340v1 — withdrawn; source-history only

- **Primary source:** Jean Bourgain and Nigel Watt, “Mean square of zeta function, circle problem and divisor problem revisited,” arXiv:1709.04340, v1 submitted 13 September 2017. The v1 PDF source is <https://arxiv.org/pdf/1709.04340v1>.
- **Local v1 files:** `bourgain-watt-zeta-circle-divisor-arxiv-1709.04340v1.pdf/.txt`; PDF SHA-256 `47cd84eeccd69b04aae141f4e24009102ef8883ca4da2908f90c65a6f2e5f96b`; text SHA-256 `a84c2711833f9cbeb0eaddf3af658ce54f241ca67e68deba49173f4c4aa54c06`.
- **Actual reading extent:** the full relevant path was read: §1, §3, Theorem 3 statement in §4, §§5–6 proof of Theorem 3, and §7 proof of Theorem 2. The paper has eight sections; §§2 and 8 were not included in this proof-path read. The local PDF is the withdrawn v1 text, not the one-kilobyte v2 withdrawal notice.
- **Attempted Huxley input (paper §7, printed pp. 18–19):** the paper reduces both divisor and circle remainders to a dyadic sum (R(M,T;a,b)), with (|a|+|b|\le1), (3\le M\le\sqrt T), and attempts to prove (R(M,T;a,b)\ll T^{517/1648+2\epsilon}). After a sawtooth approximation and an exponent-pair estimate, the remaining parameter range is (7.6); the proof sets (F(x)=(x+a/(4M))^{-1}+bM/(4T)), (g(x)=x^{-1}), (G(x)=1), and applies the manuscript’s Theorem 3 except in a Case I subrange.
- **Exact Huxley Theorem 1 conditions as quoted there:** in Case I (7.8), the manuscript invokes [H03, Theorem 1] under [H03, (1.7)], the (r=1,2,3) cases of (1.5) and (1.6), and the parameter case (κ=3/10,λ=57/140,C_5=C_6=1) of (1.9), (1.13), and (1.14). It says the (1.9) condition is (H\le B_1MT^{-49/164}(\log T)^{969/22960}), follows from its (4.5) once (T\ge\exp(B_1^{-24})) (up to an absolute threshold), the (1.13) case is equivalent to its Case I condition (7.8), and (1.14) follows from (3\le M\le\sqrt T). It takes (B_1>0) absolute by [H03, Theorem 1 and Proposition 1]. The resulting normalized second-spacing estimate is its (7.9):
  \[
  |S|/H\ll (H/M)^{1/25}T^{131/400+\epsilon}.
  \]
  This is the exact attempted parameter range/locator requested; it is not usable after the withdrawal.
- **Authoritative status source:** official arXiv record <https://arxiv.org/abs/1709.04340>, saved as `bourgain-watt-1709-withdrawal-arxiv-page.html`. The record says “This paper has been withdrawn by Nigel Watt,” v2 dated 16 July 2023. Nigel Watt’s withdrawal comment identifies (i) a gap/fault in the argument from expression (3.9) to (3.11) in Propositions 2 and 3 and (ii) a difficulty justifying a Bourgain–Guth reduction in Proposition 1′, and concludes that Theorems 1, 2, and 3 lose theorem status. This status governs every exponent claim above.
- **Adjacent source distinction:** Li–Yang’s reference [6] cites this withdrawn arXiv item and uses it for method descriptions/formula comparisons. No theorem/proof dependency may be inherited from it without an independent replacement proof.

### Bourgain–Watt, arXiv:1505.04161v1 — variant double large sieve

- **Primary source:** Jean Bourgain and Nigel Watt, “Decoupling for Perturbed Cones and the Mean Square of |ζ(1/2+it)|,” arXiv:1505.04161v1; later published in IMRN 2018, 5219–5296. Full v1 PDF: <https://arxiv.org/pdf/1505.04161v1>.
- **Local files:** `bourgain-watt-perturbed-cones-arxiv-1505.04161v1.pdf/.txt`; PDF SHA-256 `968e5bc1dca05f367fb144b1e616e331962da5ee6b8674e02ad91a0edc44cffa`; text SHA-256 `0ee5a7688c577b0936bc2240dddd34fb6c1944d02ada1693e11d7d19a8393e5f`.
- **Actual read extent:** complete §5, “A variant of the double large sieve,” and complete §10 second-spacing context. The other sections were not all read for this particular R1 request.
- **Exact result:** §5, (5.1)–(5.5), for bounded finite (X,Y\subset\mathbb R^d) with (|x_i|<U_i), (|y_i|<V_i), and (2<q<\infty), proves a variant inequality bounding 
  \[
  \left|\sum_{x\in X}\sum_{y\in Y}e(x\cdot y)\right|
  \]
  by ∏_i((1+U_iV_i)^{1/q}), (|X|^{1-2/q}), the (q)-root of the number of pairs (x,x'\in X) with every coordinate difference (<1/V_i), and the normalized (L^q) mean of (|\sum_{y\in Y}e(x\cdot y)|) over the box (prod_i[-U_i,U_i]). This follows from conditional expectation at scales (min(U_i,V_i^{-1})), interpolation, and the displayed (L^2) pair-count identity (5.4).
- **Li–Yang interface:** Li–Yang §3.1 explicitly says its DLS inequality is derived by Hölder as in [5, §5] and chooses a norm exponent (q>4). It is a direct inequality input to its first-spacing argument; it is not a theorem about Huxley’s second spacing.
- **Second-spacing boundary:** §10 records Huxley 2003 Lemmas 2.3–2.5 and 3.4 as the second-spacing estimates used in the later Bourgain–Watt method. It notes the relationship to Huxley 2005 resonance curves. This discussion is read context, not a complete Huxley proof.

### Huxley 2003/2005 — precise invocation versus inaccessible primary proof

- **Huxley 2003 citation:** M. N. Huxley, “Exponential Sums and Lattice Points III,” *Proceedings of the London Mathematical Society* 87 (2003), 591–609, DOI <https://doi.org/10.1112/s0024611503014485>. Its publisher PDF endpoint <https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7B28024FEB1C199035C5C7D7F6783072/S0024611503014485a.pdf/div-class-title-exponential-sums-and-lattice-points-iii-div.pdf> redirects to subscriber metadata in this environment; no full article text was read.
- **Huxley 1996 citation also present:** M. N. Huxley, *Area, Lattice Points, and Exponential Sums* (OUP, 1996). Li–Yang §3.2 cites Theorem 13.2.4 for the classical first-spacing `q=4` estimate `G_4 ≪ε K^ε(KL)^{1/2}`; this is presented as a baseline before Li–Yang proves its `q>4` Proposition 3.1, not as the proof of that proposition. Li–Yang §4 overview cites [14] and [15] for the second-spacing method; the formal Huxley invocation in Lemma 4.1 is [15, Theorem 1] (Huxley 2003). The full OUP text of the 1996 book was blocked in the source search; no chapter text is claimed read here.
- **Li–Yang’s exact second-spacing interface:** §4.1 defines `S = Σ_{H≤h≤2H} g(h/H) Σ_{M≤m≤2M} G(m/M)e((hT/M)F(m/M))`, with `F∈C³[1,2]`, `g,G` of bounded variation, and fixed `C_1,…,C_5≥2`. It assumes `C_r≥|F^(r)(x)|≥C_r⁻¹` for `r=1,2,3`, and `|F'F'''−3(F'')²|≥C_4⁻¹`, equations (4.1)–(4.3). Case (A), equation (4.4), requires `H≥M⁻⁹T⁴(log T)^(171/140)` if `M<T^(7/16)`, `H≥M¹¹T⁻⁶(log T)^(171/140)` if `M>T^(9/16)`, and `H≤MT⁻⁴⁹/¹⁶⁴`. Case (B), equation (4.5), requires `M≤C_5T^(1/2)` and `H≤min{M^(35/69)T^(−2/23), B_0M^(3/2)T^(−1/2)}`, where `B_0` depends on the `C_i`. Lemma 4.1 additionally assumes its equation (4.6) for `N,q,H,M,T`, then states the exact bound (4.7); Theorem 4.2 spells out the applicable Case (A)/(B) subranges and simplified estimate (4.10). These exact source equations are the hypotheses to preserve if one plans a local Huxley-application theorem.
- **Huxley 2005 citation:** M. N. Huxley, “Exponential Sums and the Riemann Zeta Function V,” *Proceedings of the London Mathematical Society* 90 (2005), 1–41, DOI <https://doi.org/10.1112/s0024611504014959>. The publisher PDF endpoint likewise returned subscriber metadata; no full article text was read. The read Bourgain–Watt §10 describes Huxley 2003 Lemma 3.4 as arising from resonance-curve work in Huxley 2005. The direct Li–Yang step is Huxley 2003; 2005 is not an independently verified theorem input to Li–Yang’s proof.
- **Disposition:** both primary Huxley articles remain missing local proof sources. For Huxley 2003 the BW1709 quotation above gives a precise attempted interface but that BW theorem is withdrawn. A local theorem requiring Huxley’s spacing result must independently prove the exact restricted statement or remain proof-gated.

### Guth–Maldague, arXiv:2206.01093v2 — exact cone wave-envelope input

- **Primary source:** Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in \(\mathbb R^3\),” arXiv:2206.01093v2, <https://arxiv.org/pdf/2206.01093v2>.
- **Local files:** `guth-maldague-wave-envelope-arxiv-2206.01093v2.pdf/.txt`; PDF SHA-256 `430c065d8780e0a45fcc1adb393ce4024da2775c2a5421c7b8b7a4225d895fd3`; text SHA-256 `cd085a8083ae2d2bb3ffbd24307551449ecc7e4fc579f1e2d57070237f489ab2`.
- **Actual read extent:** Theorem 2 and cone conventions in §1 (printed pp. 1–2); the statement/outline of the parabola estimate Theorem 4 and its proof path in §§2–3; the complete Theorem 2 proof §§5–9, including the Kakeya step (Lemma 9 proved through Proposition 10, §7), parabola base case (Lemma 10, §8), Lorentz rescaling (Lemma 11, §9), Proposition 9, and the final pigeonhole transfer from Proposition 9 to Theorem 2 in §6. I also read Appendix §11.1 (printed pp. 42–44), specifically the setup and complete proofs of Lemmas 19–20. Other small-cap material §4 and §10 and appendix §§11.2 onward are outside this requested read extent.
- **Exact Theorem 2 contract (printed p. 2):** for sufficiently large `R`, Schwartz `f : ℝ³ → ℂ` with `f̂` supported in the `R⁻¹`-neighborhood of the truncated cone `Γ = {ξ₁²+ξ₂²=ξ₃², 1/2≤|ξ₃|≤1}`, and every `α>0`,
  \[
  \alpha^4|\{x:|f(x)|>\alpha\}|
  \lesssim_\epsilon R^\epsilon\sum_{R^{-1/2}<s<1\atop s\text{ dyadic}}\sum_{\tau\in\mathcal S_s}\sum_{U\in\mathcal G_\tau(\alpha)}|U|^{-1}\|S_Uf\|_2^4.
  \]
  Here (U\parallel U_{\tau,R}) are wave envelopes, (S_Uf) is the partial localized square function, and (U\in\mathcal G_\tau(\alpha)) requires (C_\epsilon R^\epsilon|U|^{-1}\|S_Uf\|_2^2\ge \alpha^2/(\#\tau)^2); #τ is the number of active coarse (s)-sectors with (f_\tau\not\equiv0). The complete definitions are in §§1 and 5, especially (29)–(30) and items (1)–(5), printed pp. 22–23.
- **Cen application:** Cen et al. §6.1 (printed pp. 24–27), Theorem 6.1, maps its discrete exponential sum frequencies to a truncated cone. It splits the height band `1/2≤z₃≤3/2` into finitely many radial pieces and dilates to Guth–Maldague’s `1/2≤|ξ₃|≤1` model. It chooses a power-of-four scale `R` with `R≤η⁻¹<4R`, applies GM (29)–(30), and uses its Definition 4/(36) weight majorant. Cen explicitly notes that the GM #τ is the number of active coarse sectors at scale σ=Δ/K, not the finest sectors within one coarse sector. Its resulting (6.5) distribution integral is then combined with the separate local integer count Lemma 6.1 to prove (6.2).
- **Not BDG:** GM Theorem 2 is proved inside GM §§5–9. Its proof chain uses their own parabola Theorem 4 (§§2–3), wave-packet/high-low induction, Kakeya pruning, and Lorentz rescaling. It is not a consequence of BDG moment-curve decoupling, and Cen cites no BDG dependency in this GM step.
- **GWZ20 citation closure:** GM §7, in the proof of the cone high/low lemmas (printed pp. 29–31), refers to GWZ20 Lemmas 4.1 and 4.2 for frequency-support containment and bounded multiplicity. GM Appendix §11.1 supplies local replacements: Lemma 19 (frequency-support decomposition, pp. 43) and Lemma 20 (only (O_b(1)) relevant coarse sectors, pp. 43–44), each with a proof. The setup assumes a normalized nondegenerate (C^2) generating curve and curvature bounds (54)–(60); the standard circular cone is a special case after the paper’s finite local-arc/rotation normalization. Thus the exact GM Theorem 2 proof can use these local appendix lemmas without adding GWZ20 as a logical supplier, provided the standard-cone specialization is included in the local proof. The original GWZ20 Theorem 1.3 is quoted for context and is not needed as a theorem input to this amplitude-dependent estimate.

### Bourgain–Demeter–Guth — degree-five VMVT input, separate from Guth–Maldague

- **Primary source:** Jean Bourgain, Ciprian Demeter, and Larry Guth, “Proof of the Main Conjecture in Vinogradov’s Mean Value Theorem for Degrees Higher Than Three,” *Annals of Mathematics* 184 (2016), 633–682, DOI <https://doi.org/10.4007/annals.2016.184.2.7>.
- **Local files:** `bourgain-demeter-guth-vmvt-decoupling-annals-2016.pdf/.txt`; PDF SHA-256 `b19172d5169e5e3b199dc362bb955e6b4ceab296cb58f2a9d51456579fd3b946`; text SHA-256 `8b4f931426e0060ba459210009ebeb7817447d422773c98e63299ff7261d93bf`.
- **Actual read extent:** Theorem 1.1, p. 633, and full context/proof framework §§1–4; Theorem 6.6 and §§6–9, including the final Theorem 1.2 deduction. This covers the result and proof context needed to verify the cited VMVT input; intermediate §5 was not separately in this read extent.
- **Exact theorem:** Theorem 1.1 states, for (s\ge1), (n,N\ge2), (J_{s,n}(N)\ll_\epsilon N^{s+\epsilon}+N^{2s-n(n+1)/2+\epsilon}). Cen et al. cite it as [3, Theorem 1.1, p. 633]. Taking (n=5,s=15) gives (J_{15,5}(J)\ll_\epsilon J^{15+\epsilon}).
- **Exact Cen use:** Cen §3.2, equation (3.12), expands the degree-five moment and integrates over (\mathbb T^5), using orthogonality to leave only the degree-five Vinogradov system. For |d_r|≤1 this yields
  \[
  \sup_{|d_r|\le1}\int_{\mathbb T^5}\left|\sum_{r=1}^Jd_r e\!\left(\sum_{i=1}^5y_ir^i\right)\right|^{30}dy\ll_\epsilon J^{15+\epsilon}.
  \]
  This is used in the small-parameter range to prove Proposition 3.1 after the integer sieve/pair-count step. It is an independent input from Guth–Maldague Theorem 2.
- **Separation:** BDG’s sharp moment-curve decoupling theorem is the route within that source to its VMVT result; it does not give GM’s amplitude-selected cone-envelope inequality. Do not create a BDG → GM Theorem 2 page/item dependency.

### Robert–Sargos — exact Cen interfaces, primary-source retrieval gap

- **Primary source:** Olivier Robert and Patrick Sargos, “Three-dimensional exponential sums with monomials,” *Journal für die reine und angewandte Mathematik* 591 (2006), 1–20, DOI <https://doi.org/10.1515/crelle.2006.012>. Author page lists a PDF at <https://perso.univ-st-etienne.fr/rool6510/robert-2006-crelle.pdf>; De Gruyter landing page is <https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2006.012/html>.
- **Retrieval/read status:** the author PDF endpoint returned HTTP 403 to both `curl` and browser fetch. The De Gruyter PDF endpoint redirected to a CloudFront WAF challenge (HTTP 202). HAL record `hal-00149766` identifies this title but reports `openAccess_bool:false` and no file. Search-engine PDF snippets exposed partial text, but no full primary article was obtained or read; those snippets do not close source or proof review. No local PDF/text is claimed.
- **Cen’s exact uses (Cen §4.16, printed pp. 14–15):** write (x_{n,k}=(n/Z)^2(k/K)^7), with (n\asymp Z), (k\asymp K), (Y\ge1). R–S §6.1, (6.4), at monomial exponents (2,7) and tolerance (O(Y^{-1})), is invoked for
  \[
  B_x=\#\{(n,k,n',k'):|x_{n,k}-x_{n',k'}|\le C/Y\}
  \ll_\epsilon T^\epsilon\left(ZK+(ZK)^2/Y\right).
  \]
  The other count groups (v,v+t,v',v'+t'\asymp V) and uses the second-difference relation for (x^{-1/8}). R–S Theorem 2, §5, is invoked at exponent (-1/8), tolerance (O((r/Y)V^{-1/8})), to get (B_y\ll_\epsilon T^\epsilon(V^2+rV^4/Y)); Cen’s (4.11) makes (V/H\ll1), so this is ≪ (T^\epsilon V^2) in (4.16). These are the exact instances in the full Cen proof; the primary theorem’s whole statement is not independently certified here.
- **Cen’s second R–S interface (Cen §4.17):** Lemma 8, §6.1 of the R–S paper is applied with these close-pair counts and the van der Corput transformation error to derive the double-large-sieve estimate (4.17). Its exact full hypotheses and proof are part of the missing primary read; any planned local R–S supplier remains proof-gated pending a primary text and local proof.

### Watt — complete 2004 primary result read; upstream proof dependencies remain

- **Primary source:** Nigel Watt, “On the mean squared modulus of a Dirichlet (L)-function over a short segment of the critical line,” *Acta Arithmetica* 111(4) (2004), 307–403, DOI <https://doi.org/10.4064/aa111-4-1>. Full publisher PDF: <https://www.impan.pl/shop/publication/transaction/download/product/82909?download.pdf>.
- **Local files:** `watt-short-segment-dirichlet-l-mean-square-2004.pdf/.txt`; PDF SHA-256 `60fca37932c8dfe7f3ce5341263fcb08cb3ff273ab8d59dba2e89d2b50a3a832`; text SHA-256 `35a4b277536710fc68caf8fc5e1c877827f1b85176b61de60aa170887f778116`.
- **Actual read extent:** full theorem-1 setup and definitions; complete §§2–4 for the parameter, major-arc and transformation context; and all of §8, including Lemmas 8.1 and 8.2 and their proofs, printed pp. 379–385. The intervening §§5–7 were not claimed as a full read in this source pass.
- **Exact Watt Lemma 8.2 contract (printed pp. 381–382):** assume Lemma 8.1’s hypotheses through (8.14), including integer (N,R), the source’s conditions (2.1)–(2.9), (5.2), (P/Q\asymp T/M^2\ge1/(2r)), the parameters Δ(_1,ldots,Δ_4), and (H^2N^3\le MR^4). It defines
  \[
  \beta(Q)\asymp \frac{M^2R^4}{r^2H^2N^4}\left(\frac QH\right)^{2/3}.
  \]
  In the first case (N/2<N_I\le N), with (N_I=M T^{-1}(M/H)^{22/35}(T^3/r^2)^{6/35}), it proves (B_1\ll\beta(Q)(1+r^2/(Q^2\Delta_1\Delta_4))r^\epsilon\log^E R\asymp\beta(Q)(1+r^4T^4/(HM^9))^{1/5}r^\epsilon\log^E R). In the second case (N_{II}=(M^6/(TH^5))^{1/7}), (N_{III}=(M^6/(r^2T^2H))^{1/3}), and (N/2<\min(N_{II},N_{III})\le N), it gives (B_1\ll\beta(Q)). These are exactly (8.17)–(8.20).
- **Cen specialization (Cen §5, printed pp.16–19):** for (H=T^{m-τ}), (M=T^m), (β\leτ\le24/67), (τ+s\le m\le1/2), Cen chooses (N=\lceil N_I\rceil) when (HM^9\ge T^4), otherwise (N=\lceil\min(N_{II},N_{III})\rceil), with the explicit rescaled formulae in its (5.1). It sets the auxiliary modulus (r=1), rescales Watt’s parameters by ((M^*,H^*,T^*)=(2M,2H,2T)), chooses (F=Φ) as in (5.2), and verifies Watt’s (2.6), (2.7)–(2.9), and (8.14) in Cen (5.6)–(5.8). Cen’s (B_Q) counts ordered minor-arc pairs satisfying all four inequalities in (5.9); after these checks, Watt Lemma 8.2 gives its (5.10):
  \[
  B_Q\ll_\epsilon T^\epsilon\frac{M^2R^4}{H^2N^4}\left(\frac QH\right)^{2/3},\qquad R\le Q\le c^*H.
  \]
  In the first (HM^9\ge T^4) case its extra factor is (1+(T^4/(64HM^9))^{1/5}=O(1)); the other case uses (8.20). Cen states that this counts nearby minor arcs only; the first-spacing estimate is supplied separately by its own Theorem 6.1.
- **Remaining proof chain:** Watt §8 says Lemma 8.1 ultimately uses Huxley, *Area, Lattice Points, and Exponential Sums* (1996), §§14–16. It also adapts Huxley–Watt, “The number of ideals in a quadratic field, II,” *Israel J. Math.* 120 (2000), Lemma 5.3, to the (r^2\mid C) case. Those primary inputs are not read in this pass. Watt Lemma 8.2 is an exact source-stated result, but it is not a self-contained locally proved supplier unless those dependencies are reconstructed.

## Build/review consequences for R1

- Do not add BW1709 Theorem 2 / exponent (517/1648) as an established item or dependency; the official arXiv withdrawal notice explicitly removes its theorem status.
- Li–Yang’s reported 2023 exponent (0.3144831759741\ldots) remains a dated theorem claim in its own full paper; no contradiction follows from the withdrawn BW17 manuscript. The R1 status report should avoid an exhaustive/current-frontier claim unless checked independently against primary sources.
- The direct GM pair/item may be stated with the exact cone, Fourier-support, α, scale, wave-envelope and active-sector conditions above. Keep the separate Cen count lemma (6.6) as a distinct supplier. No BDG-to-GM edge is justified.
- The degree-five VMVT pair should be linked only to the Cen moment/count branch, with (n=5,s=15) explicit. Theorem 1.1’s consequence is exactly (J_{15,5}(N)\ll N^{15+\epsilon}).
- The exact R–S statement/proof and exact Huxley 2003 statement/proof are not sourced completely here. Keep those requirements in the planned chain but mark the proof/source gaps, rather than citing Cen or a withdrawn paper as substitutes.
- Watt’s (5.10) interface is parameter-verified in Cen, but the local proof obligation depends on the unavailable Huxley 1996 and Huxley–Watt 2000 sources; keep that gate explicit.

## Retrieval ledger

| Source | Read status | Limit |
|---|---|---|
| Bourgain–Watt 1709.04340v1 | Relevant proof path §§1, 3–7 read; v1 PDF/text local | Official record marks whole preprint withdrawn and Theorems 1–3 without theorem status |
| Bourgain–Watt 1505.04161v1 | Complete §5 and §10 read | Not a full-article reread; §10 refers to Huxley primary results not read here |
| Guth–Maldague 2206.01093v2 | Complete relevant proof path §§2–3, 5–9 and theorem context read | Other paper sections not part of this request’s read scope |
| Bourgain–Demeter–Guth 2016 | Thm. 1.1 and proof/context §§1–4, 6–9 read | §5 was not separately read for this request; not needed for Cen’s cited degree-five theorem |
| Robert–Sargos 2006 | No full article read; source record and exact Cen locators checked | Author endpoint 403, publisher WAF, HAL record closed access; search snippets are not treated as full text |
| Watt 2004 | §1 setup, §§2–4 and full §8 read | §§5–7 not claimed read; §8 imports unreviewed Huxley/Huxley–Watt sources |
| Huxley 2003/2005 | No full article read | Official publisher endpoints returned subscriber metadata; exact BW1709 parameter invocation is recorded only as withdrawn-source history |

