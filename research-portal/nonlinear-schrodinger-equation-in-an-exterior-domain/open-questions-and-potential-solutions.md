---
title: Open questions and potential solutions
research_report: open-questions
description: Insights, fruitful questions and potential solutions arising from
  Nonlinear Schrödinger equation in an exterior domain.
status: published
---

## 1. Research insights beyond the article

### Research insight 01 · A quantitative regime where trajectory observability needs no separate UCP assumption

#### Insight

**Kind:** corollary

**Evidence status:** proved

Fix $\sigma\in[-2,2]$ and $T>0$. On the realification $H=H_D^\sigma$, let $W$ be the free unitary group and $B=M_\varphi$. Suppose $\|BW(\cdot)x\|_{L^2(0,T;H)}\ge c\|x\|$, $c>0$. Let $U$ solve $u_t=i\Delta_Du+P(t)u$ for strongly measurable bounded real-linear $P$ with $b=\int_0^T\|P(t)\|dt<\infty$. If $d=\sqrt T\|B\|(e^b-1)<c$, then $\|BU(\cdot,0)x\|_{L^2}\ge(c-d)\|x\|$. Thus sufficiently small cubic trajectories in the stated $W^{2,\infty}$ norm satisfy energy-level UCP for this fixed time.

#### Why it matters

This identifies an explicit partial regime of §5.2(A) and connects exterior control to robustness of observation under bounded non-autonomous perturbations.

#### Originality

All 23 article pages were checked. The article develops a conditional UCP/compactness argument but does not state this quantitative small-potential criterion. Small bounded perturbation robustness is established general control theory, as noted by Haak–Hoang–Ouhabaz; no worldwide novelty is claimed.

#### Current knowledge

The bounded-observer inequality below is a direct derivation, consistent with the independent perturbation discussion in §5 of Haak–Hoang–Ouhabaz. It is a report consequence, without library publication or an independent acceptance stamp.

#### Argument and next steps

Duhamel and Gronwall give $\|U(t,0)\|\le\exp(\int_0^t\|P(r)\|dr)$. Subtracting $W(t)$ and integrating $\|P(r)\|\exp(\int_0^r\|P\|)$ gives $\|U(t,0)-W(t)\|\le e^b-1$ uniformly. Hence $\|B(U-W)x\|_{L^2}\le\sqrt T\|B\|(e^b-1)\|x\|$; the reverse triangle inequality proves the claim. For the cubic adjoint, $P(t)v=iV_1v-iV_2\overline v$. At $\sigma=1$, its norm is at most $C|\lambda|\|w(t)\|_{W^{2,\infty}}^2$. Sufficiently small $\int_0^T\|w(t)\|_{W^{2,\infty}}^2dt$ therefore makes $d<c$. Energy-level vanishing on $\omega$ implies $Bv=0$, so the positive lower bound forces zero initial data and uniqueness gives $v=0$.

#### Remaining gaps

The threshold depends on the free observability constant, the cutoff and T; it is not uniform as T tends to zero and does not treat arbitrary large trajectories. For σ≠0 the multiplier norm ||B|| need not equal one. Real-linearity is preserved throughout; no physical postulate is a mathematical premise.

#### Sources

- Nonlinear Schrödinger equation in an exterior domain, frozen v2: https://arxiv.org/abs/2610.11968; PDF pp.1–23, all statements, proofs, figures, footnotes and bibliography; Proposition 3.5 and Theorem 3.6, pp.11–13; Theorem 3.7 and Propositions 3.9–3.10, pp.14–16; §4, pp.17–21; §5.2(A)–(F), pp.21–22. Reading limits: Read all 23 frozen PDF pages in text and rendered images, and all 118 original-item records. Verified PDF SHA256 baa8dd08f7d5a4f2e96a06fd0b78f448a7b922224dd11211ddb41de4aa44eb9d. This source supplies attribution and starting theorems for report consequences; it is not evidence for its own prerequisites. The live arXiv search metadata was not substituted for the frozen PDF.
- Haak, Hoang and Ouhabaz, Controllability and observability for non-autonomous evolution equations: the averaged Hautus test: https://www.math.u-bordeaux.fr/~bhaak/recherche/HHO.pdf; PDF p.2, introduction, footnote on small bounded perturbations; §5, PDF pp.11–12, equations (5.1)–(5.5) and following discussion. Reading limits: Read the introduction and the §5 perturbation/evolution discussion in extracted text, including its hypotheses and Duhamel formula. The screenshot request for p.11 failed; no rendered-formula inspection is claimed. The report proves its simpler bounded-observer estimate directly; it does not import the paper’s more general averaged Hautus theorem or its bounded-domain application.

### Research insight 02 · Additive control has a mass budget distinct from unitary state steering

#### Insight

**Kind:** connection

**Evidence status:** proved

For $n=2,3$, $m\in\{3,5\}$, a solution $v\in C([0,T];H_D^2)$ with continuous $H_D^2$ control satisfies $M^\prime(t)=2\operatorname{Im}\int_\Omega\varphi h\overline v\,dx$, where $M=\|v\|_2^2$. Consequently $|\|v(T)\|_2-\|v(0)\|_2|\le\int_0^T\|\varphi h(t)\|_2dt\le\sqrt T\|\varphi h\|_{L_t^2L_x^2}$. This is a necessary forcing budget for unequal-mass endpoints. Real multiplicative forcing $av$ has zero mass contribution, under regularity permitting the same calculation.

#### Why it matters

The article names quantum and condensate applications but uses complex additive forcing. The identity clarifies which mathematical control model allows unequal-norm endpoints.

#### Originality

The whole article was checked: it does not derive this endpoint mass-budget bound or compare additive forcing with norm-preserving potential control. The conservation-law calculation and unitary norm preservation are standard; no worldwide novelty is asserted.

#### Current knowledge

Proved below at the order-two regularity actually available in the paper. Teschl’s self-adjoint evolution theorem independently supplies the unitary comparison. The Physics Library’s flow lemma has domain mathematics; its isolated-dynamics postulate has domain physics and is not used as a PDE premise.

#### Argument and next steps

The exterior $H^2$ algebra for $n=2,3$ makes the polynomial nonlinearity continuous in $L^2$; the equation therefore gives $v_t\in C_tL^2$. Differentiate $\|v\|_2^2$. Dirichlet integration by parts makes $\int\Delta v\overline v=-\|\nabla v\|_2^2$ real, and $\lambda\int|v|^{m+1}$ is real. The remaining term is $2\operatorname{Re}(-i\int\varphi h\overline v)=2\operatorname{Im}\int\varphi h\overline v$. Cauchy–Schwarz gives $|M^\prime|\le2\|\varphi h\|_2\sqrt M$. Apply the resulting bound to $\sqrt{M+\varepsilon}$, integrate and let $\varepsilon\downarrow0$, then use time Cauchy–Schwarz. For forcing $av$ with real $a$, $\int a|v|^2$ is real, so the mass contribution vanishes.

#### Remaining gaps

Only the stated sufficiently regular solutions are covered by this derivation; no unproved extension to arbitrary distributional solutions is claimed. The model comparison does not identify an experimental actuator, a microscopic condensate derivation or measured mass transfer.

#### Sources

- Nonlinear Schrödinger equation in an exterior domain, frozen v2: https://arxiv.org/abs/2610.11968; PDF pp.1–23, all statements, proofs, figures, footnotes and bibliography; Proposition 3.5 and Theorem 3.6, pp.11–13; Theorem 3.7 and Propositions 3.9–3.10, pp.14–16; §4, pp.17–21; §5.2(A)–(F), pp.21–22. Reading limits: Read all 23 frozen PDF pages in text and rendered images, and all 118 original-item records. Verified PDF SHA256 baa8dd08f7d5a4f2e96a06fd0b78f448a7b922224dd11211ddb41de4aa44eb9d. This source supplies attribution and starting theorems for report consequences; it is not evidence for its own prerequisites. The live arXiv search metadata was not substituted for the frozen PDF.
- Gerald Teschl, Mathematical Methods in Quantum Mechanics, online 2009 edition: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf; §5.1, Theorem 5.1 and proof, printed pp.123–124, PDF pp.135–136; Theorem 5.2, printed pp.124–125, PDF pp.136–137. Reading limits: Read the stated self-adjoint/unitary generation theorem and its proof, and Stone’s theorem in extracted text. Used only for mathematical comparison with norm-preserving unitary evolution. No experiment, condensate approximation or exterior-control apparatus is inferred.

## 2. Potentially fruitful questions

### Research direction 01

#### Research question

For every smooth nonempty compact non-trapping obstacle with connected exterior, $T>0$, nonzero real $\lambda$, and cubic trajectory $w$ satisfying (W), does every $v\in C([0,T];H_0^1(\Omega))$ solving $iv_t+\Delta v+2\lambda|w|^2v-\lambda w^2\overline v=0$ and vanishing on $\omega\times(0,T)$ vanish identically?

#### Why it matters

An affirmative answer would remove the explicit UCP hypothesis in the trajectory-control theorems.

#### Originality

This is the authors’ §5.2(A), not a new question. Full-article reading checked that Lemma 3.4 only settles the free case and Lemma 4.5 only regularizes invisible solutions. The small-potential criterion above gives a restricted consequence, not worldwide novelty.

#### Current knowledge

The frozen October 2026 article expressly leaves the general case open. Targeted searches on 13 November 2026 did not locate a later primary resolution with these exact exterior and conjugate-coupled hypotheses. The elliptic three-dimensional library UCP theorem does not settle this time-dependent problem.

#### Potential solution

**Solution scope:** partial

**Evidence status:** Proved partial result

The energy-level implication holds when $\sqrt T\|B\|(e^{b_1}-1)<c_1$, where $b_1=\int_0^T\|iM_{V_1}-iM_{V_2}K\|_{H_D^1\to H_D^1}dt$, $K$ is conjugation and $c_1$ is the free observation lower bound.

#### Argument and next steps

The bounded-perturbation derivation gives $\|Bv\|_{L_t^2H_D^1}\ge(c_1-\sqrt T\|B\|(e^{b_1}-1))\|v(0)\|_{H_D^1}$. Vanishing on $\omega$ gives $Bv=0$. The positive lower bound forces zero initial data, hence zero evolution by uniqueness.

#### Remaining gaps

No conclusion for arbitrary trajectories or large b₁. This does not prove the missing general boundary Carleman estimate.

#### Sources

- Nonlinear Schrödinger equation in an exterior domain, frozen v2: https://arxiv.org/abs/2610.11968; PDF pp.1–23, all statements, proofs, figures, footnotes and bibliography; Proposition 3.5 and Theorem 3.6, pp.11–13; Theorem 3.7 and Propositions 3.9–3.10, pp.14–16; §4, pp.17–21; §5.2(A)–(F), pp.21–22. Reading limits: Read all 23 frozen PDF pages in text and rendered images, and all 118 original-item records. Verified PDF SHA256 baa8dd08f7d5a4f2e96a06fd0b78f448a7b922224dd11211ddb41de4aa44eb9d. This source supplies attribution and starting theorems for report consequences; it is not evidence for its own prerequisites. The live arXiv search metadata was not substituted for the frozen PDF.
- Haak, Hoang and Ouhabaz, Controllability and observability for non-autonomous evolution equations: the averaged Hautus test: https://www.math.u-bordeaux.fr/~bhaak/recherche/HHO.pdf; PDF p.2, introduction, footnote on small bounded perturbations; §5, PDF pp.11–12, equations (5.1)–(5.5) and following discussion. Reading limits: Read the introduction and the §5 perturbation/evolution discussion in extracted text, including its hypotheses and Duhamel formula. The screenshot request for p.11 failed; no rendered-formula inspection is claimed. The report proves its simpler bounded-observer estimate directly; it does not import the paper’s more general averaged Hautus theorem or its bounded-domain application.

### Research direction 02

#### Research question

For fixed admissible non-trapping exterior $\Omega$, cutoff $\varphi$ and $\sigma\in[-2,2]$, determine the small-time growth of $C_\sigma(T)=\sup_{x\ne0}\|x\|_{H_D^\sigma}/\|\varphi e^{it\Delta_D}x\|_{L^2(0,T;H_D^\sigma)}$. When the uncontrolled region has nonempty interior, do positive finite $a,A$ give $e^{a/T}\lesssim C_\sigma(T)\lesssim e^{A/T}$ for small $T$, and which geometric quantities govern them?

#### Why it matters

Existence for every positive time does not quantify forcing cost, the small-trajectory robustness threshold, or the nonlinear controllable neighborhood.

#### Originality

The article cites fast-control literature but does not formulate or estimate this exterior spectral-scale cost. Miller already proves exponential geometric bounds for compact manifolds under his stated hypotheses; the exterior formulation is a proposed extension, not a new general phenomenon.

#### Current knowledge

Read Miller’s Definition 1, Theorems 1.1 and 1.3 and the localized construction in §2.1. Those compact-manifold statements do not supply the requested unbounded-domain conclusion. The targeted search did not establish a current complete result for this exact cutoff/scale formulation; its worldwide novelty and status remain unverified.

#### Potential solution

**Solution scope:** partial

**Evidence status:** Proved partial result

The elementary lower bound $C_\sigma(T)\ge1/(\sqrt T\|M_\varphi\|_{H_D^\sigma\to H_D^\sigma})$ holds.

#### Argument and next steps

Unitarity gives $\|\varphi W(t)x\|_{H_D^\sigma}\le\|M_\varphi\|\|x\|_{H_D^\sigma}$. Its time-integrated norm is at most $\sqrt T\|M_\varphi\|\|x\|$. Taking the supremum of the reciprocal ratio proves the bound. Exponential bounds require additional localized-wavepacket and quantitative-observability estimates.

#### Remaining gaps

This polynomial lower bound does not establish either exponential estimate or its sharp geometric constants.

#### Sources

- Nonlinear Schrödinger equation in an exterior domain, frozen v2: https://arxiv.org/abs/2610.11968; PDF pp.1–23, all statements, proofs, figures, footnotes and bibliography; Proposition 3.5 and Theorem 3.6, pp.11–13; Theorem 3.7 and Propositions 3.9–3.10, pp.14–16; §4, pp.17–21; §5.2(A)–(F), pp.21–22. Reading limits: Read all 23 frozen PDF pages in text and rendered images, and all 118 original-item records. Verified PDF SHA256 baa8dd08f7d5a4f2e96a06fd0b78f448a7b922224dd11211ddb41de4aa44eb9d. This source supplies attribution and starting theorems for report consequences; it is not evidence for its own prerequisites. The live arXiv search metadata was not substituted for the frozen PDF.
- Luc Miller, How violent are fast controls for Schrödinger and plate vibrations?, arXiv:math/0309040v3: https://arxiv.org/pdf/math/0309040; §1.1, PDF p.2, Definition 1 and compact-manifold hypotheses; §1.2, PDF pp.2–3, Theorems 1.1 and 1.3; §2.1, PDF pp.6–8, Theorem 2.1 and localized heat-kernel construction. Reading limits: Read these statements and the displayed localization argument in the PDF text extraction. The compact-manifold and generalized-geodesic hypotheses remain attached. No direct application of those theorems to an unbounded obstacle exterior is asserted; the exponential-rate analogy motivates an unresolved question.

### Research direction 03

#### Research question

For the defocusing quintic equation $iv_t+\Delta v-|v|^4v=\varphi h$ on a smooth non-trapping exterior in $\mathbb R^3$ with homogeneous Dirichlet data, can every pair in $H_0^1(\Omega)$ be connected by an energy-class solution in a sufficiently large finite time, using $h\in C_tH_0^1$ acting through $\varphi$ outside a ball?

#### Why it matters

This seeks a large-data analogue of the small-data critical corollary; fixed-point smallness alone cannot yield it.

#### Originality

This specializes the large-data direction in §5.2(C) to a precise defocusing internal-control problem. It is author-origin, with a related whole-space question in the independent critical-case paper, §4(B); no worldwide novelty is claimed.

#### Current knowledge

The frozen article leaves it open. The independently read critical-case v3, Theorem 1.1, proves a small-data whole-space null-control statement and §4(A)–(B) still asks about stabilization and large-data control. A targeted search did not establish a later primary resolution for the stated exterior problem.

#### Potential solution

**Solution scope:** none

**Evidence status:** Unresolved

No large-data exterior controllability theorem is derived here.

#### Argument and next steps

Both primary sources suggest stabilization followed by local control. A proof would need a global controlled/damped energy-class evolution and decay reaching the local-control ball in the same norm and geometry. Neither the small-data corollary nor the available L² damping comparison supplies these steps in the critical H¹ setting.

#### Remaining gaps

No matching critical stabilization theorem was established in this assessment; the proposed route remains incomplete.

#### Sources

- Nonlinear Schrödinger equation in an exterior domain, frozen v2: https://arxiv.org/abs/2610.11968; PDF pp.1–23, all statements, proofs, figures, footnotes and bibliography; Proposition 3.5 and Theorem 3.6, pp.11–13; Theorem 3.7 and Propositions 3.9–3.10, pp.14–16; §4, pp.17–21; §5.2(A)–(F), pp.21–22. Reading limits: Read all 23 frozen PDF pages in text and rendered images, and all 118 original-item records. Verified PDF SHA256 baa8dd08f7d5a4f2e96a06fd0b78f448a7b922224dd11211ddb41de4aa44eb9d. This source supplies attribution and starting theorems for report consequences; it is not evidence for its own prerequisites. The live arXiv search metadata was not substituted for the frozen PDF.
- Braz e Silva, Capistrano–Filho, Carvalho and Dos Santos Ferreira, Control of the Schrödinger equation in R3: The critical case, v3: https://arxiv.org/html/2404.07749v3; Theorem 1.1, local small-H1 null controllability; §4, Comments and open issues, items (A) stabilization and (B) global control. Reading limits: Read the arXiv v3 theorem statement and §4 in HTML; the abstract page identifies revision 12 April 2026. The proof was not audited. This is evidence for the authors’ stated local theorem and listed large-data direction, not a comprehensive 2026 worldwide status certificate.

## 3. Potential solutions to open questions

### Research direction 01

#### Research question

For every smooth nonempty compact non-trapping obstacle with connected exterior, $T>0$, nonzero real $\lambda$, and cubic trajectory $w$ satisfying (W), does every $v\in C([0,T];H_0^1(\Omega))$ solving $iv_t+\Delta v+2\lambda|w|^2v-\lambda w^2\overline v=0$ and vanishing on $\omega\times(0,T)$ vanish identically?

#### Question source

**Origin:** Original authors

https://arxiv.org/abs/2610.11968; Frozen v2, PDF p.21, §5.2(A)

#### Why it matters

An affirmative answer would remove the explicit UCP hypothesis in the trajectory-control theorems.

#### Originality

A restricted consequence of standard bounded-perturbation robustness, absent from the article’s stated results. It partially addresses the authors’ question without claiming a novel general UCP theorem.

#### Current knowledge

The independent non-autonomous observability paper notes small bounded perturbation robustness. The fixed-time estimate is derived explicitly in insight-se-quantitative-small-perturbation; general trajectories remain outside its scope.

#### Potential solution

**Solution scope:** partial

**Evidence status:** Proved partial result

The energy-level implication holds when $\sqrt T\|B\|(e^{b_1}-1)<c_1$, where $b_1=\int_0^T\|iM_{V_1}-iM_{V_2}K\|_{H_D^1\to H_D^1}dt$, $K$ is conjugation and $c_1$ is the free observation lower bound.

#### Argument and next steps

The bounded-perturbation derivation gives $\|Bv\|_{L_t^2H_D^1}\ge(c_1-\sqrt T\|B\|(e^{b_1}-1))\|v(0)\|_{H_D^1}$. Vanishing on $\omega$ gives $Bv=0$. The positive lower bound forces zero initial data, hence zero evolution by uniqueness.

#### Remaining gaps

No conclusion for arbitrary trajectories or large b₁. This does not prove the missing general boundary Carleman estimate.

#### Sources

- Nonlinear Schrödinger equation in an exterior domain, frozen v2: https://arxiv.org/abs/2610.11968; PDF pp.1–23, all statements, proofs, figures, footnotes and bibliography; Proposition 3.5 and Theorem 3.6, pp.11–13; Theorem 3.7 and Propositions 3.9–3.10, pp.14–16; §4, pp.17–21; §5.2(A)–(F), pp.21–22. Reading limits: Read all 23 frozen PDF pages in text and rendered images, and all 118 original-item records. Verified PDF SHA256 baa8dd08f7d5a4f2e96a06fd0b78f448a7b922224dd11211ddb41de4aa44eb9d. This source supplies attribution and starting theorems for report consequences; it is not evidence for its own prerequisites. The live arXiv search metadata was not substituted for the frozen PDF.
- Haak, Hoang and Ouhabaz, Controllability and observability for non-autonomous evolution equations: the averaged Hautus test: https://www.math.u-bordeaux.fr/~bhaak/recherche/HHO.pdf; PDF p.2, introduction, footnote on small bounded perturbations; §5, PDF pp.11–12, equations (5.1)–(5.5) and following discussion. Reading limits: Read the introduction and the §5 perturbation/evolution discussion in extracted text, including its hypotheses and Duhamel formula. The screenshot request for p.11 failed; no rendered-formula inspection is claimed. The report proves its simpler bounded-observer estimate directly; it does not import the paper’s more general averaged Hautus theorem or its bounded-domain application.

### Research direction 02

#### Research question

Do analogues of Theorems 1.4–1.5 hold for the quintic equation near $w\in C_t(H_D^2\cap W^{2,\infty})$, assuming its corresponding energy-level unique-continuation property?

#### Question source

**Origin:** Original authors

https://arxiv.org/abs/2610.11968; Frozen v2, PDF p.21, §5.2(C), first two sentences

#### Why it matters

The authors suggest this conditional extension but do not supply its polynomial remainder estimates or a theorem.

#### Originality

The direction and linearized coefficients are explicitly the authors’. The derivation below fills in that conditional composition; it is not an insight absent from the article’s discussion, a general UCP solution, or a claim of worldwide priority.

#### Current knowledge

Full-article reading checked that only the zero-trajectory quintic result is proved there. Targeted searches located no separate primary theorem resolving this precise conditional formulation; the proof below is a report derivation from the article’s applicable linear estimates, with its added quintic UCP assumption explicitly retained.

#### Potential solution

**Solution scope:** full

**Evidence status:** Proved solution

Assume (H), $n=2,3$, $T>0$, nonzero real $\lambda$, and a quintic trajectory $w\in C([0,T];H_D^2\cap W^{2,\infty})$ with zero Dirichlet trace. Assume energy-level UCP for $iv_t+\Delta v+3\lambda|w|^4v-2\lambda|w|^2w^2\overline v=0$. For $s=1,2$, the quintic linearization is exactly controllable with continuous $H_D^s$ controls, and the nonlinear quintic equation is locally exactly controllable in $H_D^s$ about the endpoints of $w$.

#### Argument and next steps

Set $g(u)=\lambda u^3\overline u^2$. Its real derivative is $Dg(w)z=V_1z+V_2\overline z$, with $V_1=3\lambda|w|^4$ and $V_2=2\lambda|w|^2w^2$. Both are continuous $W^{2,\infty}$ multipliers. Lemmas 4.1–4.5 use only these coefficient bounds, the real adjoint signs and free estimates, not the cubic trajectory equation. Thus the same regularization, compactness and invisible-solution bootstrap apply. Quintic UCP removes the compact remainder, and the real HUM calculation gives a bounded continuous-control map $G_5$. The remainder is $F_5(w,z)=\lambda\sum_{a+b\ge2}\binom3a\binom2b w^{3-a}\overline w^{2-b}z^a\overline z^b$, with $0\le a\le3$, $0\le b\le2$. Its degrees in $z$ are $j=2,\ldots,5$. For $s=1$, coefficients have bounded $W^{1,\infty}$ norms. The product rule bounds each degree by $C_w\|z\|_\infty^{j-1}\|z\|_{H^1}$. In $X=C_tH_0^1\cap L_t^4L_x^\infty$, time Hölder gives $\|F_5(w,z)\|_{L_t^1H^1}\le C_w\sum_{j=2}^5T^{(5-j)/4}\|z\|_X^j$. Expanding and differentiating a difference gives the Lipschitz bound $C_w\sum_{j=2}^5T^{(5-j)/4}(\|z\|_X^{j-1}+\|\widetilde z\|_X^{j-1})\|z-\widetilde z\|_X$. Each monomial has zero trace by the bounded polynomial product argument of Proposition 3.9. For $s=2$, coefficient multiplication in $W^{2,\infty}$ and the exterior $H^2$ algebra give the same power/difference bounds with factor $T$, preserving zero trace. Duhamel and Gronwall transfer the free homogeneous and forcing bounds to the real-linear propagator $S_5$. Put $N_5(z)(t)=\int_0^tS_5(t,r)(iF_5(w,z)(r))dr$ and $h_z=G_5(z_0,z_T-N_5(z)(T))$. The map $S_5(t,0)z_0+N_5(z)(t)+\int_0^tS_5(t,r)(-i\varphi h_z(r))dr$ has the prescribed endpoints. Its norm is at most $C_1(\|z_0\|+\|z_T\|)+C_2\sum_{j=2}^5\|z\|_X^j$, and its Lipschitz constant on a radius-$M$ ball is at most $2C_2\sum_{j=2}^5M^{j-1}$, absorbing fixed-time factors into $C_2$. Choose $M$ small so this is at most $1/2$ and the nonlinear self-map contribution is at most $M/2$; take the endpoint sum at most $M/(2C_1)$. The nonempty closed ball is complete and invariant, so Banach’s theorem supplies the controlled solution. The factors $\pm i$ stay inside $S_5$ because it is only real-linear.

#### Remaining gaps

This fully resolves only the stated conditional quintic analogue. It does not establish quintic UCP for arbitrary trajectories, lower trajectory regularity, large-data control, Neumann control or a boundary trajectory theorem. It is a local derivation in this report and carries no independent review/publication stamp.

#### Sources

- Nonlinear Schrödinger equation in an exterior domain, frozen v2: https://arxiv.org/abs/2610.11968; PDF pp.1–23, all statements, proofs, figures, footnotes and bibliography; Proposition 3.5 and Theorem 3.6, pp.11–13; Theorem 3.7 and Propositions 3.9–3.10, pp.14–16; §4, pp.17–21; §5.2(A)–(F), pp.21–22. Reading limits: Read all 23 frozen PDF pages in text and rendered images, and all 118 original-item records. Verified PDF SHA256 baa8dd08f7d5a4f2e96a06fd0b78f448a7b922224dd11211ddb41de4aa44eb9d. This source supplies attribution and starting theorems for report consequences; it is not evidence for its own prerequisites. The live arXiv search metadata was not substituted for the frozen PDF.

## Review limits

- Full-article novelty checks used all 23 PDF pages, including §5.2(A)–(F), rather than generated open-problem statements. Absence of the two derived insights from this article is not a claim of worldwide novelty.
- Current-status searches on 13 November 2026 used the article title/identifier, exterior conjugate-coupled UCP, quintic trajectory control, bounded-perturbation observability and fast-control cost queries. Primary passages were read in Haak–Hoang–Ouhabaz, Miller, the critical-case v3 and Teschl. Search returns from AI summaries and secondary question aggregators were not used as status evidence.
- No exhaustive search of all 2026 preprints, non-English literature or inaccessible sources was performed. An absence of a located resolution is reported as a search limit, not proof that a question remains globally open.
- The small-potential solution is quantitative only in terms of an unknown free observation constant. The cost question has only a polynomial lower bound here, and the critical large-data question has no derived solution.
- The quintic argument solves the conditional formulation suggested by the authors. Its corresponding UCP is an assumption, not a result, and the derived report consequence supplies no logical dependency to portal items.
