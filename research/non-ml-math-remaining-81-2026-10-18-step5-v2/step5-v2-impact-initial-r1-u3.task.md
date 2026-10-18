# Step 5 repair: impact-initial, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/impact-initial-1.json.



Owner-confirmed Step-4 reader concerns assigned for genuine current review and smallest necessary repair (these are not judge rejections or downstream claims):
[
  {
    "id": "cex-it-expected-random-code-error-does-not-give-maximal-error",
    "batch": "14",
    "source_kind": "concern",
    "reader_batch": "14",
    "before_guard_sha256": "176965509afbc48ce9aaa2d344b19bfc8bfe4ced2cc8b44784dd386f83af96b8",
    "concern_index": 0,
    "concern": {
      "id": "cex-it-expected-random-code-error-does-not-give-maximal-error",
      "concern": "The counterexample uses headings '## Statement' and '## Proof'. SCHEMA.md prescribes '## Statement refuted' and '## Counterexample' for this kind. The witness and its error calculations are sound; this is a body-format discrepancy.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:04:25.937235+00:00",
      "reason": "The concrete M-message one-use code has M-1 correct messages and one always wrong; its singleton-ensemble average1/M and maximum1 disprove the explicit convergence implication. Moving the intact witness under Counterexample correctly separates refuted assertion from construction.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-presentation-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "\n\nFor every integer $M\\ge2$, there is a singleton random-code ensemble on a finite noiseless DMC whose expected average error is $1/M$ while the code's maximal error is $1$. Thus a small expected average error alone does not make every message's error small.\n\n## Facts & Assumptions\n\n**Given:** $M\\ge2$, input/output alphabet $\\{1,\\ldots,M-1\\}$, and the noiseless DMC $W(y\\mid x)=\\mathbf1\\{y=x\\}$.\n\n[F1] [[def-fixed-length-channel-code]]: a fixed-length code consists of an encoder from messages to input words and a deterministic decoder from outputs to messages.\n\n[F2] [[def-fixed-length-channel-code-errors]]: average error is the uniform-message mean, and maximal error is the largest individual error.\n\n## Proof",
          "proposed_replacement": " refuted\n\nExpected average error tending to zero for singleton random-code ensembles on finite DMCs forces the corresponding maximal errors to tend to zero.\n\n## Facts & Assumptions\n\n**Given:** $M\\ge2$, input/output alphabet $\\{1,\\ldots,M-1\\}$, and the noiseless DMC $W(y\\mid x)=\\mathbf1\\{y=x\\}$.\n\n[F1] [[def-fixed-length-channel-code]]: a fixed-length code consists of an encoder from messages to input words and a deterministic decoder from outputs to messages.\n\n[F2] [[def-fixed-length-channel-code-errors]]: average error is the uniform-message mean, and maximal error is the largest individual error.\n\n## Counterexample\n\nFor every integer $M\\ge2$, there is a singleton random-code ensemble on a finite noiseless DMC whose expected average error is $1/M$ while the code's maximal error is $1$. Thus a small expected average error alone does not make every message's error small.\n"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-14-step5-context.json"
  },
  {
    "id": "ex-it-dmc-one-shot-error-bound",
    "batch": "14",
    "source_kind": "concern",
    "reader_batch": "14",
    "before_guard_sha256": "60ec09d20146d6299283b0a82d5f99e03f189ee07e8cc3c2747385e8291efb3d",
    "concern_index": 1,
    "concern": {
      "id": "ex-it-dmc-one-shot-error-bound",
      "concern": "The example uses headings '## Statement' and '## Proof', whereas SCHEMA.md prescribes '## Example' and optional '## Verification'. The numerical evaluation 7/20 is correct.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:04:25.937235+00:00",
      "reason": "The dependence-testing integrand has correct-event contribution0.9/(3.6)=1/4 and crossover contribution1/10, total7/20. The complete scientific content stays unchanged under Example/Verification headings.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-presentation-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "Statement\n\nFor a one-use BSC with crossover $p=0.1$, uniform input, and $M=2$, the dependence-testing upper bound on achievable average error is exactly $0.35$.\n\n## Facts & Assumptions\n\n**Given:** The BSC transition probabilities $W(y\\mid x)=0.9$ for $y=x$ and $0.1$ for $y\\ne x$, uniform input, and $M=2$.\n\n[F1] [[thm-it-one-shot-decision-threshold-achievability]]: a deterministic code exists whose average error is at most $\\mathbb E\\exp(-[\\imath(X;Y)-\\ln((M-1)/2)]_+)$.\n\n[F2] [[def-discrete-memoryless-channel]]: a BSC row is a probability vector, and its output law under an input vector is the matrix product $PW$.\n\n## Proof",
          "proposed_replacement": "Example\n\nFor a one-use BSC with crossover $p=0.1$, uniform input, and $M=2$, the dependence-testing upper bound on achievable average error is exactly $0.35$.\n\n## Facts & Assumptions\n\n**Given:** The BSC transition probabilities $W(y\\mid x)=0.9$ for $y=x$ and $0.1$ for $y\\ne x$, uniform input, and $M=2$.\n\n[F1] [[thm-it-one-shot-decision-threshold-achievability]]: a deterministic code exists whose average error is at most $\\mathbb E\\exp(-[\\imath(X;Y)-\\ln((M-1)/2)]_+)$.\n\n[F2] [[def-discrete-memoryless-channel]]: a BSC row is a probability vector, and its output law under an input vector is the matrix product $PW$.\n\n## Verification"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-14-step5-context.json"
  },
  {
    "id": "ex-it-meta-converse-binary-channel",
    "batch": "14",
    "source_kind": "concern",
    "reader_batch": "14",
    "before_guard_sha256": "342278c20fb232ec5c78f3f624a93feca1b900251ffb4516fe5ca4455cff8728",
    "concern_index": 2,
    "concern": {
      "id": "ex-it-meta-converse-binary-channel",
      "concern": "The example uses headings '## Statement' and '## Proof', whereas SCHEMA.md prescribes '## Example' and optional '## Verification'. The randomized-test optimization and beta orientation are correct.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:04:25.937235+00:00",
      "reason": "The oriented beta minimization uses acceptance psi=1-phi. Its two-coordinate constraint forces s+t>=2 because (1-p)/p>1; acceptance on the correct pairs attains1/2. Example/Verification headings preserve that complete argument.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-presentation-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "Statement\n\nFor the one-use BSC$(p)$ with $0<p<1/2$, the identity encoder/decoder with two equiprobable messages has average error $p$. With its true joint law $P_{MY}$ and the uniform-message/uniform-output auxiliary law $\\widetilde Q_{MY}$, the oriented testing value is exactly $\\beta_p(P_{MY},\\widetilde Q_{MY})=1/2=1/M$.\n\n## Facts & Assumptions\n\n**Given:** Messages $m\\in\\{0,1\\}$ are uniform, the input is $x=m$, the decoder outputs $y$, and the BSC crossover probability is $0<p<1/2$.\n\n[F1] [[def-finite-hypothesis-testing-beta]]: $\\beta_\\epsilon(P,Q)$ minimizes $\\mathbb E_Q(1-\\phi)$ over tests $\\phi\\in[0,1]$ with $\\mathbb E_P\\phi\\le\\epsilon$.\n\n[F2] [[thm-it-one-shot-meta-converse]]: every $M$-message code with average error $\\epsilon$ satisfies $\\beta_\\epsilon(P_{MY},\\widetilde Q_{MY})\\le1/M$ for any auxiliary output law.\n\n[F3] [[def-discrete-memoryless-channel]]: the BSC has transition probability $1-p$ on $y=x$ and $p$ on $y\\ne x$.\n\n## Proof",
          "proposed_replacement": "Example\n\nFor the one-use BSC$(p)$ with $0<p<1/2$, the identity encoder/decoder with two equiprobable messages has average error $p$. With its true joint law $P_{MY}$ and the uniform-message/uniform-output auxiliary law $\\widetilde Q_{MY}$, the oriented testing value is exactly $\\beta_p(P_{MY},\\widetilde Q_{MY})=1/2=1/M$.\n\n## Facts & Assumptions\n\n**Given:** Messages $m\\in\\{0,1\\}$ are uniform, the input is $x=m$, the decoder outputs $y$, and the BSC crossover probability is $0<p<1/2$.\n\n[F1] [[def-finite-hypothesis-testing-beta]]: $\\beta_\\epsilon(P,Q)$ minimizes $\\mathbb E_Q(1-\\phi)$ over tests $\\phi\\in[0,1]$ with $\\mathbb E_P\\phi\\le\\epsilon$.\n\n[F2] [[thm-it-one-shot-meta-converse]]: every $M$-message code with average error $\\epsilon$ satisfies $\\beta_\\epsilon(P_{MY},\\widetilde Q_{MY})\\le1/M$ for any auxiliary output law.\n\n[F3] [[def-discrete-memoryless-channel]]: the BSC has transition probability $1-p$ on $y=x$ and $p$ on $y\\ne x$.\n\n## Verification"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-14-step5-context.json"
  },
  {
    "id": "thm-lz77-phrase-length-entropy-rate",
    "batch": "10",
    "source_kind": "concern",
    "reader_batch": "10",
    "before_guard_sha256": "176265d4e0e7eeff8ab8de613dd841aae15744d79a7c8895c2db587f60834fab",
    "concern_index": 0,
    "concern": {
      "id": "thm-lz77-phrase-length-entropy-rate",
      "concern": "The source locator says “Chapter 5 §§5.1–5.2, PDF pp.49–56: Theorem 6, Corollary 6(a)”. The linked dissertation instead places the recurrence argument in Chapter 3, §§3.1–3.2, Theorem 3.1 and Corollary 3.1(a); its proof uses the same Kac and conditional-past counting arguments as the local proof. The PDF text extraction has damaged numeral glyphs, but internal section and theorem references consistently identify Chapter 3. Verify and synchronize the locator in the item, A-page source trail, B-page source trail, and coverage evidence. The mathematical argument inspected supports the local claim. Source: [Kontoyiannis dissertation](https://www.dpmms.cam.ac.uk/~ik355/PAPERS/thesis.pdf), recurrence chapter and strong-approximation proof.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:32.132750+00:00",
      "reason": "Confirmed the locator defect from delegated fresh full-proof PDF/source reading and explicit printed/rendered page evidence; root read the entire proposed local theorem and inverse-window proof. Local mathematics unchanged; corrected locator is attributed to actual scientific owner external reading, not new root external reading.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-information-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "5 §§5.1–5.2, PDF pp.49–56: Theorem 6, Corollary 6(a), and the complete proof of Theorem 6",
          "proposed_replacement": "3 §§3.1–3.2, PDF pp.50–57 (printed pp.35–42): Theorem 3.1, Corollary 3.1(a), and the complete proof of Theorem 3.1"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-10-step5-context.json"
  },
  {
    "id": "ex-it-gaussian-distortion-waterline",
    "batch": "11",
    "source_kind": "concern",
    "reader_batch": "11",
    "before_guard_sha256": "4ec29cf70a2626382491be868be79f5ee56a708b0bfa5337a851e3f842e6d63f",
    "concern_index": 0,
    "concern": {
      "id": "ex-it-gaussian-distortion-waterline",
      "concern": "The displayed reconstruction needs X_2 independent of (U,V), which is not explicitly specified. The Statement gives X_1 independent of X_2 and says only that U,V are independent standard normals; step 2.1 then invokes the vector theorem to conclude attainment. Those independence assertions alone do not suffice: take independent standard normals Z_1,Z_2, set X_1=2Z_1, X_2=Z_2, a=√(5/2), b=√(3/2), U=(aZ_1+bZ_2)/2 and V=(bZ_1−aZ_2)/2. Then U,V are independent standard normals and X_1=aU+bV, as written, but Y_1=aU is a nonconstant deterministic continuous function of the full source vector, giving infinite vector mutual information. The intended independent-coordinate test-channel construction is immediate from F2; explicitly choosing X_2 independently of (U,V) closes the gap.",
      "severity": "gap-a-reader-closes"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:32.132750+00:00",
      "reason": "Independence of U,V alone does not imply reconstruction coordinates are independent of X2. Supplying their joint independence from X2 yields independent coordinate pairs and the claimed attaining test channel; total distortion3/2+1 and half-log rate unchanged. Existing Given AC is made explicit.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-information-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "lem-it-finite-vector-gaussian-water-level-allocation\n  - thm-it-gaussian-vector-squared-error-rate-distortion\njustified_by: []\naliases: []\nproof_strategy: direct\naxiom_use: \"AC is assumed by the finite-dimensional Gaussian vector theorem.\"\nprovenance:\n  statement: literature-derived\n  proof: ai-generated\nverification:\n  precheck: pending\nsources:\n  references:\n    - title: \"Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed.\"\n      url: \"https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf\"\n      locator: \"§10.3.3, Theorem 10.3.3, printed pp. 312–314: vector Gaussian water-filling example.\"\n---\n\n## Statement\n\nLet $X_1\\sim N(0,4)$ and $X_2\\sim N(0,1)$ be independent, and use total squared-error budget $D=5/2$. The water level is $\\theta=3/2$, the optimal coordinate distortions are $(3/2,1)$, and the information rate is $\\frac12\\log_2(8/3)$ bits per vector. An attaining reconstruction is $Y_1=\\sqrt{5/2}U$, $Y_2=0$, where $X_1=\\sqrt{5/2}U+\\sqrt{3/2}V$ for independent standard normals $U,V$.\n\n## Facts & Assumptions\n\n**Given:** Independent centered Gaussian coordinates of variances 4 and 1, squared-error budget $5/2$, and AC.\n\n[F1] [[lem-it-finite-vector-gaussian-water-level-allocation]]: the optimum allocates $\\min(\\lambda_i,\\theta)$ with unique $\\theta$ satisfying the total-distortion equation.\n\n[F2] [[thm-it-gaussian-vector-squared-error-rate-distortion]]: for independent Gaussian coordinates, the standard-Borel information rate is the half-sum of positive log variance-to-water-level ratios and the allocation is attained by independent scalar Gaussian test channels.\n\n## Proof\n\n\n\n\n1.1 Since $1<\\theta<4$, the water-level equation is $\\min(4,\\theta)+\\min(1,\\theta)=\\theta+1=5/2$, so $\\theta=3/2$. The allocated distortions are $(\\min(4,3/2),\\min(1,3/2))=(3/2,1)$. By [F1]–[F2], $$ R(5/2)=\\frac12\\left(\\log_2\\frac4{3/2}+\\log_2^+\\frac1{3/2}\\right)=\\frac12\\log_2\\frac83. $$ [F1, F2, given, algebra]\n\n2.1",
          "proposed_replacement": "def-axiom-of-choice\n  - lem-it-finite-vector-gaussian-water-level-allocation\n  - thm-it-gaussian-vector-squared-error-rate-distortion\njustified_by: []\naliases: []\nproof_strategy: direct\naxiom_use: \"AC is assumed by the finite-dimensional Gaussian vector theorem.\"\nprovenance:\n  statement: ai-altered\n  proof: ai-generated\nverification:\n  precheck: pending\nsources:\n  references:\n    - title: \"Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed.\"\n      url: \"https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf\"\n      locator: \"§10.3.3, Theorem 10.3.3, printed pp. 312–314: vector Gaussian water-filling example.\"\n---\n\n## Statement\n\nAssume AC. Let $X_1\\sim N(0,4)$ and $X_2\\sim N(0,1)$ be independent, and use total squared-error budget $D=5/2$. The water level is $\\theta=3/2$, the optimal coordinate distortions are $(3/2,1)$, and the information rate is $\\frac12\\log_2(8/3)$ bits per vector. An attaining reconstruction is $Y_1=\\sqrt{5/2}U$, $Y_2=0$, where $X_1=\\sqrt{5/2}U+\\sqrt{3/2}V$ for standard normals $U,V$ that are mutually independent and jointly independent of $X_2$.\n\n## Facts & Assumptions\n\n**Given:** Independent centered Gaussian coordinates of variances 4 and 1, squared-error budget $5/2$, and AC.\n\n[F1] [[lem-it-finite-vector-gaussian-water-level-allocation]]: the optimum allocates $\\min(\\lambda_i,\\theta)$ with unique $\\theta$ satisfying the total-distortion equation.\n\n[F2] [[thm-it-gaussian-vector-squared-error-rate-distortion]]: for independent Gaussian coordinates, the standard-Borel information rate is the half-sum of positive log variance-to-water-level ratios and the allocation is attained by independent scalar Gaussian test channels.\n\n## Proof\n\n\n\n\n1.1 Since $1<\\theta<4$, the water-level equation is $\\min(4,\\theta)+\\min(1,\\theta)=\\theta+1=5/2$, so $\\theta=3/2$. The allocated distortions are $(\\min(4,3/2),\\min(1,3/2))=(3/2,1)$. By [F1]–[F2], $$ R(5/2)=\\frac12\\left(\\log_2\\frac4{3/2}+\\log_2^+\\frac1{3/2}\\right)=\\frac12\\log_2\\frac83. $$ [F1, F2, given, algebra]\n\n2.1 Choose the displayed joint law with $U,V,X_2$ mutually independent, so the coordinate pairs $(X_1,Y_1)$ and $(X_2,Y_2)$ are independent."
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-11-step5-context.json"
  },
  {
    "id": "thm-it-schumacher-quantum-source-coding",
    "batch": "23",
    "source_kind": "concern",
    "reader_batch": "23",
    "before_guard_sha256": "c0e51098b61d3751428b026188050a40aa334f62831b28c9ab0b393f90f58bef",
    "concern_index": 0,
    "concern": {
      "id": "thm-it-schumacher-quantum-source-coding",
      "concern": "F3 summarizes the cited bound as fidelity at most 'the sum of the M largest eigenvalues of ρ'. The supplier's Statement is about the eigenvalues of ρ tensor n. The proof correctly applies the n-block supplier in steps 1.2 and 3.1, but this fact summary omits the tensor power and is inaccurate when read literally.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:32.132750+00:00",
      "reason": "The fidelity bound applies to the n-block source rho tensor n. Main proof already uses its largest eigenvalues; F3 incorrectly named the single-copy rho. Correcting F3 aligns the exact existing supplier and full converse proof.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-information-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "t eigenvalues of $\\rho",
          "proposed_replacement": "t eigenvalues of $\\rho^{\\otimes n}"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-23-step5-context.json"
  },
  {
    "id": "lem-it-qudit-erasure-channel-complement-and-degradability",
    "batch": "24",
    "source_kind": "concern",
    "reader_batch": "24",
    "before_guard_sha256": "4269c2a6151c188d7056b7296ecc0a7d5f23a6e64f7c4ed89d612a44e33e8f06",
    "concern_index": 0,
    "concern": {
      "id": "lem-it-qudit-erasure-channel-complement-and-degradability",
      "concern": "Step 2.1 defines K_0=√α J_E J_B* and then defines K_j=√(1−α)|e_E⟩⟨u_j| for j<d, which includes j=0. Step 3.1 repeats the collision with L_0 and L_j for j<d. The intended Kraus lists and normalization calculations are clear, but the same operator label receives two different definitions.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:32.132750+00:00",
      "reason": "The distinguished data Kraus operator previously collided with j0 in the indexed family. Distinct data labels preserve every operator, normalization, complementary flag weight and the degradable/antidegradable endpoint cases.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-information-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "0=\\sqrt\\alpha J_EJ_B^*$, $K_j=\\sqrt{1-\\alpha}|e_E\\rangle\\langle u_j|$ for $j<d$, and $K_e=|e_E\\rangle\\langle e_B|$. The sum of adjoint products is $\\alpha\\Pi_A+(1-\\alpha)\\Pi_A+|e_B\\rangle\\langle e_B|=I_B$, so the induced map $\\mathcal D_\\epsilon(X)=\\sum KXK^*$ is a channel by [F4]–[F6]. On an erasure-channel output, its data block has weight $\\alpha(1-\\epsilon)X=\\epsilon X$ and its flag block has weight $[(1-\\alpha)(1-\\epsilon)+\\epsilon]\\operatorname{tr}(X)=(1-\\epsilon)\\operatorname{tr}(X)$. Thus $\\mathcal D_\\epsilon\\mathcal E_{d,\\epsilon}=\\mathcal E^c_{d,\\epsilon}$, proving degradability. [F1, F2, F3, F4, F5, F6, step 1.1, algebra, construct, choose]\n\n3.1 Suppose $\\tfrac12\\le\\epsilon\\le1$ and set $\\beta=(1-\\epsilon)/\\epsilon\\in[0,1]$. Choose an orthonormal basis $(u_j^E)_{j<d}$ of the data summand of $E$ and define a finite Kraus family from $E$ to $B$ by $L_0",
          "proposed_replacement": "{\\mathrm{data}}=\\sqrt\\alpha J_EJ_B^*$, $K_j=\\sqrt{1-\\alpha}|e_E\\rangle\\langle u_j|$ for $j<d$, and $K_e=|e_E\\rangle\\langle e_B|$. The sum of adjoint products is $\\alpha\\Pi_A+(1-\\alpha)\\Pi_A+|e_B\\rangle\\langle e_B|=I_B$, so the induced map $\\mathcal D_\\epsilon(X)=\\sum KXK^*$ is a channel by [F4]–[F6]. On an erasure-channel output, its data block has weight $\\alpha(1-\\epsilon)X=\\epsilon X$ and its flag block has weight $[(1-\\alpha)(1-\\epsilon)+\\epsilon]\\operatorname{tr}(X)=(1-\\epsilon)\\operatorname{tr}(X)$. Thus $\\mathcal D_\\epsilon\\mathcal E_{d,\\epsilon}=\\mathcal E^c_{d,\\epsilon}$, proving degradability. [F1, F2, F3, F4, F5, F6, step 1.1, algebra, construct, choose]\n\n3.1 Suppose $\\tfrac12\\le\\epsilon\\le1$ and set $\\beta=(1-\\epsilon)/\\epsilon\\in[0,1]$. Choose an orthonormal basis $(u_j^E)_{j<d}$ of the data summand of $E$ and define a finite Kraus family from $E$ to $B$ by $L_{\\mathrm{data}}"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-24-step5-context.json"
  },
  {
    "id": "lem-it-finite-unitary-averaging-decoupling-bound",
    "batch": "24",
    "source_kind": "concern",
    "reader_batch": "24",
    "before_guard_sha256": "ec9d1715527f3cba8e02cf9c6fd5c15cb1e7afa3e1f435c37ac2933de2d23c08",
    "concern_index": 2,
    "concern": {
      "id": "lem-it-finite-unitary-averaging-decoupling-bound",
      "concern": "Fact F3 writes the Cauchy–Schwarz formula with literal doubled backslashes before langle, rangle, leq, lVert, and rVert. These are overescaped mathematical commands in the Markdown carrier, although the underlying inequality and its uses are correct.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:32.132750+00:00",
      "reason": "The Cauchy-Schwarz Fact contains doubled TeX command backslashes. Correcting the literal notation preserves the finite moment/trace-norm proof and all dimensions and choice-free ensemble claims.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-information-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "\\langle u,v\\\\rangle|\\\\leq\\\\lVert u\\\\rVert\\\\lVert v\\",
          "proposed_replacement": "langle u,v\\rangle|\\leq\\lVert u\\rVert\\lVert v"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-24-step5-context.json"
  },
  {
    "id": "lem-it-flat-spectral-type-information-approximation",
    "batch": "24",
    "source_kind": "concern",
    "reader_batch": "24",
    "before_guard_sha256": "fbbc2f154546c945b61020918866125ec7428804be75cccd1afa09d8991a05a2",
    "concern_index": 3,
    "concern": {
      "id": "lem-it-flat-spectral-type-information-approximation",
      "concern": "Step 2.1 says 'The lower mixture bound [F1] gives' Σ_t p_t S(B_t)≥S(B̄)−H(T), and 'its upper bound gives' Σ_t p_t S(E_t)≤S(Ē). The displayed inequalities are correct, but the first uses the upper entropy-excess bound and the second uses the lower bound; the verbal labels are reversed.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:32.132750+00:00",
      "reason": "The upper entropy-excess bound gives average receiver entropy >= entropy of mixture minus H(T); the lower gives average environment entropy <= entropy of mixture. Correcting verbal bound names matches the unchanged displayed inequalities and resulting coherent-information bounds.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-information-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "lower mixture bound [F1] gives $\\sum_tp_tS(B_t)\\ge S(\\bar B)-H(T)$, while its upper",
          "proposed_replacement": "upper entropy-excess bound [F1] gives $\\sum_tp_tS(B_t)\\ge S(\\bar B)-H(T)$, while its lower entropy-excess"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-24-step5-context.json"
  },
  {
    "id": "lem-qc-tqc-contractible-disk-lifts-to-plane",
    "batch": "30",
    "source_kind": "concern",
    "reader_batch": "30",
    "before_guard_sha256": "64b54c0cf48acd2f990941b8b06ced78e47f927bc228d9ab0afd781e5252c1d7",
    "concern_index": 0,
    "concern": {
      "id": "lem-qc-tqc-contractible-disk-lifts-to-plane",
      "concern": "Proof step 2.1 says, “These endpoints define a section $\\widetilde D\\to\\mathbb R^2$ of $\\pi$ over $D$.” The constructed endpoint assignment has domain D; its image is the lifted disk subsequently denoted by the tilde. The displayed domain is a notation error in an otherwise sound lifting argument.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:12:02.849013+00:00",
      "reason": "The section s is defined on D, not the plane. The displayed continuous section into R2 has pi s identity and is injective; compactness gives the stated lift. Correcting its domain label preserves the complete disk and finite-cycle lifting proof.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-qc-geometry-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "n $\\widetilde ",
          "proposed_replacement": "n $s:"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-30-step5-context.json"
  },
  {
    "id": "cex-pa36-positive-twist-global-sections-fail",
    "batch": "67",
    "source_kind": "concern",
    "reader_batch": "67",
    "before_guard_sha256": "9a051adf807d7ff04f5825d8054de274bd0c4f0c4e06d3aeaa115851eecceab0",
    "concern_index": 0,
    "concern": {
      "id": "cex-pa36-positive-twist-global-sections-fail",
      "concern": "Step 2.1 concludes that Γ is not exact from nonzero R¹Γ computed in the category of all D_κ-module sheaves. The page convention restricts D_κ-modules to underlying quasi-coherent sheaves, whereas lem-pa36-module-global-sections-derived-cohomology establishes its comparison only in the full module-sheaf category. Nonexactness on that larger category alone does not establish nonexactness on the quasi-coherent subcategory. The conclusion is sound, but needs the short bridge, for example the quasi-coherent D-module sequence M→j_*(M|_U)→coker for a standard affine chart U; the middle term is acyclic and the nonzero H¹(M) forces failure of surjectivity on sections.",
      "severity": "gap-a-reader-closes"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:12:02.849013+00:00",
      "reason": "Derived cohomology in all module sheaves alone does not establish failure of exactness on quasi-coherent D modules. The explicit two-chart augmented Cech sequence is D-linear, exact locally and quasi-coherent by the displayed localization modules. Its global Cech cokernel C^c is nonzero, proving the original restricted-category conclusion directly.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-qc-geometry-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "thm-cech-computes-qc-cohomology-separated-scheme-affine-cover\nproof_strategy: direct\nprovenance:\n  statement: ai-generated\n  proof: ai-altered\ngeneration:\n  role: counterexample\nverification:\n  precheck: pass\nsources:\n  references:\n    - title: \"Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)\"\n      url: \"https://numdam.org/item/AST_1989__173-174__55_0.pdf\"\n      locator: \"§7.6, printed p. 98; the non-antidominant SL2 boundary\"\n    - title: \"Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)\"\n      url: \"https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf\"\n      locator: \"§29.8, printed pp. 145–146; regularity alone does not imply D-affinity\"\n---\n\n## Statement refuted\n\nRegularity of $\\kappa$ alone implies that $\\Gamma(X,-)$ is exact and\nconservative for $\\mathcal D_\\kappa$-modules.\n\n## Facts & Assumptions\n\n**Given:** $G=\\mathrm{SL}_2$, $X=\\mathbb P^1$, $\\rho$ with\n$\\rho(h)=1$, and an integer $c\\ge1$.\n\n[F1] For integral $\\kappa=c\\rho$,\n$\\mathcal D_{c\\rho}=\\operatorname{Diff}(\\mathcal O_X((c+1)\\rho))\n=\\operatorname{Diff}(\\mathcal O_{\\mathbb P^1}(-c-1))$\n([[lem-pa36-flag-tdo-pbw-and-twist]]).\n\n[F2] Cech cohomology on the two affine charts of $\\mathbb P^1$ computes\nsheaf cohomology ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).\n\n[F3] For a sheaf of rings, the right-derived global sections on its module\ncategory agree with sheaf cohomology of the underlying module sheaf\n([[lem-pa36-module-global-sections-derived-cohomology]]).\n\n\n\n## Proof\n\n1.1 For $\\alpha$ the unique positive root, $\\langle\\kappa,\\alpha^\\vee\\rangle=c>0$, so $\\kappa$ is regular and non-antidominant. By [F1], $M=\\mathcal O(-c-1)$ is a left $\\mathcal D_\\kappa$-module, and it is nonzero because it is locally free of rank one. [F1, given]\n\n1.2 With $z=y/x$, $w=x/y$ and transition $e_1=z^d e_0$ for $d=-c-1$, the Cech differential has image spanned by nonnegative powers $z^n$ and powers $z^{d-n}$ for $n\\ge0$. The first summand gives every exponent $n\\ge0$, the second every exponent $n\\le -c-1$; the quotient has basis $z^{-c},z^{-c+1},\\ldots,z^{-1}$, of size $c$. No exponent belongs to the intersection of those two ranges, so $H^0=0$. Thus $H^1(X,M)\\cong\\mathbb C^c$ and $\\Gamma(X,M)=0$. [F2, algebra]\n\n2.1 The nonzero module $M$ with zero global sections proves failure of conservativity. By [F3], $H^1(X,M)$ is the first right-derived functor of $\\Gamma$ in the $\\mathcal D_\\kappa$-module category. An exact left-exact functor has zero positive right-derived functors; since this one is $\\mathbb C^c\\ne0$, $\\Gamma$ is not exact. [F3, step 1.2",
          "proposed_replacement": "def-quasi-coherent-module-scheme\n  - lem-associated-sheaf-sections-basic-open\n  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover\nproof_strategy: direct\nprovenance:\n  statement: ai-generated\n  proof: ai-altered\ngeneration:\n  role: counterexample\nverification:\n  precheck: pass\nsources:\n  references:\n    - title: \"Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)\"\n      url: \"https://numdam.org/item/AST_1989__173-174__55_0.pdf\"\n      locator: \"§7.6, printed p. 98; the non-antidominant SL2 boundary\"\n    - title: \"Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)\"\n      url: \"https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf\"\n      locator: \"§29.8, printed pp. 145–146; regularity alone does not imply D-affinity\"\n---\n\n## Statement refuted\n\nRegularity of $\\kappa$ alone implies that $\\Gamma(X,-)$ is exact and\nconservative for $\\mathcal D_\\kappa$-modules.\n\n## Facts & Assumptions\n\n**Given:** $G=\\mathrm{SL}_2$, $X=\\mathbb P^1$, $\\rho$ with\n$\\rho(h)=1$, and an integer $c\\ge1$.\n\n[F1] For integral $\\kappa=c\\rho$,\n$\\mathcal D_{c\\rho}=\\operatorname{Diff}(\\mathcal O_X((c+1)\\rho))\n=\\operatorname{Diff}(\\mathcal O_{\\mathbb P^1}(-c-1))$\n([[lem-pa36-flag-tdo-pbw-and-twist]]).\n\n[F2] Cech cohomology on the two affine charts of $\\mathbb P^1$ computes\nsheaf cohomology ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).\n\n[F3] For a sheaf of rings, the right-derived global sections on its module\ncategory agree with sheaf cohomology of the underlying module sheaf\n([[lem-pa36-module-global-sections-derived-cohomology]]).\n\n\n\n[F4] Quasi-coherence is the affine-local associated-module condition, and the associated sheaf of an $A$-module $N$ has sections $N_f$ on each distinguished open $D(f)$ ([[def-quasi-coherent-module-scheme]], [[lem-associated-sheaf-sections-basic-open]]).\n\n## Proof\n\n1.1 For $\\alpha$ the unique positive root, $\\langle\\kappa,\\alpha^\\vee\\rangle=c>0$, so $\\kappa$ is regular and non-antidominant. By [F1], $M=\\mathcal O(-c-1)$ is a left $\\mathcal D_\\kappa$-module, and it is nonzero because it is locally free of rank one. [F1, given]\n\n1.2 With $z=y/x$, $w=x/y$ and transition $e_1=z^d e_0$ for $d=-c-1$, the Cech differential has image spanned by nonnegative powers $z^n$ and powers $z^{d-n}$ for $n\\ge0$. The first summand gives every exponent $n\\ge0$, the second every exponent $n\\le -c-1$; the quotient has basis $z^{-c},z^{-c+1},\\ldots,z^{-1}$, of size $c$. No exponent belongs to the intersection of those two ranges, so $H^0=0$. Thus $H^1(X,M)\\cong\\mathbb C^c$ and $\\Gamma(X,M)=0$. [F2, algebra]\n\n2.1 The nonzero quasi-coherent module $M$ with zero global sections proves failure of conservativity: the map $0\\to M$ has an isomorphism on sections but is not an isomorphism. For the standard inclusions $j_0:U_0\\hookrightarrow X$, $j_1:U_1\\hookrightarrow X$ and $j_{01}:U_0\\cap U_1\\hookrightarrow X$, put $E=j_{0*}(M|_{U_0})\\oplus j_{1*}(M|_{U_1})$ and $F=j_{01*}(M|_{U_0\\cap U_1})$. Direct images carry the $\\mathcal D_\\kappa$-action by restriction of operators; restriction and difference are therefore $\\mathcal D_\\kappa$-linear. The augmented sequence $0\\to M\\to E\\to F\\to0$ is exact: on $U_0$ the $j_{1*}$ summand identifies with $F|_{U_0}$, so the difference map is surjective there; on $U_1$ the $j_{0*}$ summand gives the same argument. The kernel is precisely the pairs which glue to a section of $M$. It lies inside the stipulated quasi-coherent subcategory. Indeed on $U_0=\\operatorname{Spec}\\mathbb C[z]$, the three restrictions are the associated modules $\\mathbb C[z]e_0$, $(\\mathbb C[z]\\oplus\\mathbb C[z,z^{-1}])e_0$ and $\\mathbb C[z,z^{-1}]e_0$; on $U_1$ the same descriptions use $w,e_1$. These descriptions hold on every distinguished open by localization, proving quasi-coherence. Its final global-sections map is exactly the two-chart Cech differential already computed above, whose cokernel is nonzero. Thus global sections is not exact on quasi-coherent $\\mathcal D_\\kappa$-modules, without inferring that restricted-category claim from derived functors on all module sheaves. [F1, F2, F4, step 1.2, construct"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-67-step5-context.json"
  },
  {
    "id": "ex-pa36-integral-line-bundle-translation",
    "batch": "67",
    "source_kind": "concern",
    "reader_batch": "67",
    "before_guard_sha256": "9c596b04db72591f0c6afdec2e267d8c0dc54d260e69c3093ae90efae500ad5e",
    "concern_index": 1,
    "concern": {
      "id": "ex-pa36-integral-line-bundle-translation",
      "concern": "Verification 3.1 says, 'By [F4], global sections is not faithful and not exact at this translated twist.' Nonfaithfulness follows directly from the nonzero module with zero sections. For nonexactness on the stipulated quasi-coherent D-module category, F4 only compares cohomology with derived sections in all module sheaves. As in cex-pa36-positive-twist-global-sections-fail, supply the quasi-coherent affine-open direct-image sequence or an explicit restricted-category derived-functor comparison.",
      "severity": "gap-a-reader-closes"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:12:02.849013+00:00",
      "reason": "The translated O(-2) has zero sections and one-dimensional first Cech cohomology. The same explicitly D_rho-linear, quasi-coherent two-chart exact sequence has nonsurjective last global-sections map, giving genuine nonexactness in the stipulated category without all-module derived-functor inference.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-qc-geometry-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "thm-cech-computes-qc-cohomology-separated-scheme-affine-cover\n  - thm-pa36-global-twisted-differential-operators\nproof_strategy: direct\nprovenance:\n  statement: ai-generated\n  proof: ai-altered\ngeneration:\n  role: example\nverification:\n  precheck: pass\nsources:\n  references:\n    - title: \"Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)\"\n      url: \"https://numdam.org/item/AST_1989__173-174__55_0.pdf\"\n      locator: \"§6.1, equation (6.1.2), printed p. 92; integral twist changes the parameter\"\n    - title: \"Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)\"\n      url: \"https://numdam.org/item/AST_1989__173-174__55_0.pdf\"\n      locator: \"§7.6, printed p. 98; positive SL2 twist boundary\"\n---\n\n## Example\n\nFor $G=\\mathrm{SL}_2$, start at the singular twist $\\kappa=0$ with the\nnonzero $\\mathcal D_0$-module $M=\\mathcal O_{\\mathbb P^1}(-1)$. Tensor by the\nintegral line bundle $\\mathcal O_X(\\rho)=\\mathcal O_{\\mathbb P^1}(-1)$. The\nresult is the $\\mathcal D_\\rho$-module $\\mathcal O_{\\mathbb P^1}(-2)$, since\nintegral line-bundle translation changes the twist from $\\kappa$ to\n$\\kappa+\\rho$. The Casimir characters change from\n$$\\chi_0(C)=-\\tfrac12\\quad\\text{to}\\quad\\chi_\\rho(C)=0.$$\nThe translated parameter $\\rho$ is not antidominant, and the translated\nmodule still has zero global sections (indeed $\\dim H^1=1$); the twist\nequivalence on sheaf modules does not assert that global sections is faithful\nat the translated parameter.\n\n## Facts & Assumptions\n\n**Given:** The type $A_1$ root datum, $\\rho(h)=1$, the line-bundle convention\nand parameter-shifting functor, and the Casimir\n$C=ef+fe+\\frac12h^2$.\n\n[F1] Tensoring by an integral line bundle $\\mathcal O_X(\\eta)$ identifies\n$\\mathcal D_\\kappa$-modules with $\\mathcal D_{\\kappa+\\eta}$-modules\n([[lem-pa36-flag-tdo-pbw-and-twist]]).\n\n[F2] For $\\mathfrak{sl}_2$, the Harish–Chandra projection sends\n$C$ to $h+\\frac12h^2$, and $\\chi_\\kappa(C)=\\operatorname{pr}(C)(\\kappa-\\rho)$\n([[def-pa36-flag-tdo-and-module]],\n[[lem-harish-chandra-projection-computes-highest-weight-scalars]]).\n\n[F3] The Cech complex of the two standard affine charts computes\n$H^q(\\mathbb P^1,\\mathcal O(d))$\n([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).\n\n[F4] For module sheaves over a sheaf of rings, right-derived global sections\nagree with ordinary sheaf cohomology ([[lem-pa36-module-global-sections-derived-cohomology]]).\n\n## Verification\n\n1.1 In type $A_1$, $\\rho$ is the fundamental weight and $\\mathcal O_X(\\rho)=\\mathcal O(-1)$. Applying [F1] with $\\kappa=0$ and $\\eta=\\rho$ sends $M=\\mathcal O(-1)$ to $M\\otimes\\mathcal O_X(\\rho)=\\mathcal O(-2)$ at the new twist $\\kappa+\\eta=\\rho$. [F1, given]\n\n2.1 The Harish–Chandra polynomial from [F2] is $p(t)=t+\\frac12t^2$ in the $h$-coordinate. At $\\kappa=0$, the evaluation point is $\\kappa-\\rho=-1$, so $p(-1)=-\\frac12$. At $\\kappa'=\\rho$, the evaluation point is $0$, so $p(0)=0$. Thus the central characters differ; also $\\langle\\rho,\\alpha^\\vee\\rangle=1$, so the target parameter is non-antidominant. [F2, step 1.1, algebra]\n\n3.1 Put $z=y/x$ on $U_0$ and $w=x/y$ on $U_1$. For $d=-2$, the Cech complex has $C^0=\\mathbb C[z]e_0\\oplus\\mathbb C[w]e_1$ and $C^1=\\mathbb C[z,z^{-1}]e_0$, with transition $e_1=z^{-2}e_0$. The image contains powers $z^n$ for $n\\ge0$ and $z^{-2-n}$ for $n\\ge0$, leaving the single quotient basis $z^{-1}$. Hence $H^0(\\mathcal O(-2))=0$ and $\\dim H^1(\\mathcal O(-2))=1$ by [F3]. By [F4], global sections is not faithful and not exact at this translated twist. This computation makes no claim that line-bundle translation preserves global-section faithfulness. [F3, F4, step 1.1",
          "proposed_replacement": "def-quasi-coherent-module-scheme\n  - lem-associated-sheaf-sections-basic-open\n  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover\n  - thm-pa36-global-twisted-differential-operators\nproof_strategy: direct\nprovenance:\n  statement: ai-generated\n  proof: ai-altered\ngeneration:\n  role: example\nverification:\n  precheck: pass\nsources:\n  references:\n    - title: \"Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)\"\n      url: \"https://numdam.org/item/AST_1989__173-174__55_0.pdf\"\n      locator: \"§6.1, equation (6.1.2), printed p. 92; integral twist changes the parameter\"\n    - title: \"Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)\"\n      url: \"https://numdam.org/item/AST_1989__173-174__55_0.pdf\"\n      locator: \"§7.6, printed p. 98; positive SL2 twist boundary\"\n---\n\n## Example\n\nFor $G=\\mathrm{SL}_2$, start at the singular twist $\\kappa=0$ with the\nnonzero $\\mathcal D_0$-module $M=\\mathcal O_{\\mathbb P^1}(-1)$. Tensor by the\nintegral line bundle $\\mathcal O_X(\\rho)=\\mathcal O_{\\mathbb P^1}(-1)$. The\nresult is the $\\mathcal D_\\rho$-module $\\mathcal O_{\\mathbb P^1}(-2)$, since\nintegral line-bundle translation changes the twist from $\\kappa$ to\n$\\kappa+\\rho$. The Casimir characters change from\n$$\\chi_0(C)=-\\tfrac12\\quad\\text{to}\\quad\\chi_\\rho(C)=0.$$\nThe translated parameter $\\rho$ is not antidominant, and the translated\nmodule still has zero global sections (indeed $\\dim H^1=1$); the twist\nequivalence on sheaf modules does not assert that global sections is faithful\nat the translated parameter.\n\n## Facts & Assumptions\n\n**Given:** The type $A_1$ root datum, $\\rho(h)=1$, the line-bundle convention\nand parameter-shifting functor, and the Casimir\n$C=ef+fe+\\frac12h^2$.\n\n[F1] Tensoring by an integral line bundle $\\mathcal O_X(\\eta)$ identifies\n$\\mathcal D_\\kappa$-modules with $\\mathcal D_{\\kappa+\\eta}$-modules\n([[lem-pa36-flag-tdo-pbw-and-twist]]).\n\n[F2] For $\\mathfrak{sl}_2$, the Harish–Chandra projection sends\n$C$ to $h+\\frac12h^2$, and $\\chi_\\kappa(C)=\\operatorname{pr}(C)(\\kappa-\\rho)$\n([[def-pa36-flag-tdo-and-module]],\n[[lem-harish-chandra-projection-computes-highest-weight-scalars]]).\n\n[F3] The Cech complex of the two standard affine charts computes\n$H^q(\\mathbb P^1,\\mathcal O(d))$\n([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).\n\n[F4] For module sheaves over a sheaf of rings, right-derived global sections\nagree with ordinary sheaf cohomology ([[lem-pa36-module-global-sections-derived-cohomology]]).\n\n[F5] Quasi-coherence is the affine-local associated-module condition, and the associated sheaf of an $A$-module $N$ has sections $N_f$ on each distinguished open $D(f)$ ([[def-quasi-coherent-module-scheme]], [[lem-associated-sheaf-sections-basic-open]]).\n\n## Verification\n\n1.1 In type $A_1$, $\\rho$ is the fundamental weight and $\\mathcal O_X(\\rho)=\\mathcal O(-1)$. Applying [F1] with $\\kappa=0$ and $\\eta=\\rho$ sends $M=\\mathcal O(-1)$ to $M\\otimes\\mathcal O_X(\\rho)=\\mathcal O(-2)$ at the new twist $\\kappa+\\eta=\\rho$. [F1, given]\n\n2.1 The Harish–Chandra polynomial from [F2] is $p(t)=t+\\frac12t^2$ in the $h$-coordinate. At $\\kappa=0$, the evaluation point is $\\kappa-\\rho=-1$, so $p(-1)=-\\frac12$. At $\\kappa'=\\rho$, the evaluation point is $0$, so $p(0)=0$. Thus the central characters differ; also $\\langle\\rho,\\alpha^\\vee\\rangle=1$, so the target parameter is non-antidominant. [F2, step 1.1, algebra]\n\n3.1 Put $z=y/x$ on $U_0$ and $w=x/y$ on $U_1$. For $d=-2$, the Cech complex has $C^0=\\mathbb C[z]e_0\\oplus\\mathbb C[w]e_1$ and $C^1=\\mathbb C[z,z^{-1}]e_0$, with transition $e_1=z^{-2}e_0$. The image contains powers $z^n$ for $n\\ge0$ and $z^{-2-n}$ for $n\\ge0$, leaving the single quotient basis $z^{-1}$. Hence $H^0(\\mathcal O(-2))=0$ and $\\dim H^1(\\mathcal O(-2))=1$ by [F3]. Since this translated $M=\\mathcal O(-2)$ is nonzero while its sections vanish, its nonzero identity is killed by global sections, so that functor is not faithful. For the standard inclusions $j_0:U_0\\hookrightarrow X$, $j_1:U_1\\hookrightarrow X$ and $j_{01}:U_0\\cap U_1\\hookrightarrow X$, put $E=j_{0*}(M|_{U_0})\\oplus j_{1*}(M|_{U_1})$ and $F=j_{01*}(M|_{U_0\\cap U_1})$. Direct images carry the $\\mathcal D_\\rho$-action by restriction of operators; restriction and difference are therefore $\\mathcal D_\\rho$-linear. The augmented sequence $0\\to M\\to E\\to F\\to0$ is exact: on $U_0$ the $j_{1*}$ summand identifies with $F|_{U_0}$, so the difference map is surjective there; on $U_1$ the $j_{0*}$ summand gives the same argument. The kernel is precisely the pairs which glue to a section of $M$. It lies inside the stipulated quasi-coherent subcategory. Indeed on $U_0=\\operatorname{Spec}\\mathbb C[z]$, the three restrictions are the associated modules $\\mathbb C[z]e_0$, $(\\mathbb C[z]\\oplus\\mathbb C[z,z^{-1}])e_0$ and $\\mathbb C[z,z^{-1}]e_0$; on $U_1$ the same descriptions use $w,e_1$. These descriptions hold on every distinguished open by localization, proving quasi-coherence. Its final global-sections map is exactly the two-chart Cech differential already computed above, whose cokernel is nonzero. Thus global sections is not exact on quasi-coherent $\\mathcal D_\\rho$-modules, without inferring that restricted-category claim from derived functors on all module sheaves. This computation makes no claim that line-bundle translation preserves global-section faithfulness. [F3, F5, step 1.1, construct, algebra"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-67-step5-context.json"
  },
  {
    "id": "ex-d4-helicity-and-continuous-spin-central-parities",
    "batch": "76",
    "source_kind": "concern",
    "reader_batch": "76",
    "before_guard_sha256": "daf9e3cec8ef0ee7d2f79d065c280308cae6ebab0af8ef1be949db03b6adb99d",
    "concern_index": 1,
    "concern": {
      "id": "ex-d4-helicity-and-continuous-spin-central-parities",
      "concern": "Step 2.2 asserts “In the double-cover branches z acts as εI by [F6]”. F6 computes the central action of a Poincaré induction from its little-group representation; it does not directly compute the action of z in the preceding induction from R²⋊{±1} to the null little group. That intermediate scalar-action calculation is omitted. It follows immediately from centrality and the covariant-function formula, but is needed before applying F6.",
      "severity": "gap-a-reader-closes"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:12:02.849013+00:00",
      "reason": "The central parity must first be computed in the induced little representation. The central stabilizer element fixes quotient points, has RN factor1 almost everywhere, and covariance gives F(xz^-1)=sigma(z^-1)^-1F(x)=epsilon F(x). Only then does full Poincare induction transfer parity/descent. All cover branches and scope preserved.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-qc-geometry-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "provenance:\n  statement: literature-derived\n  proof: ai-altered\nsources:\n  references:\n    - title: \"Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)\"\n      url: \"https://arxiv.org/pdf/hep-th/0611263\"\n      locator: \"§3.3 and Appendix B.3, PDF pp. 13–15 and 57–58; the local example records both cover parities.\"\n    - title: \"Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS\"\n      url: \"https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf\"\n      locator: \"Chapter 4.4, printed pp. 4.15–4.16 (PDF pp. 63–64), helicity and continuous-spin branches.\"\n\n---\n\n## Example\n\nLet $p_+=(1,0,0,1)$ be a nonzero future null momentum in $D=4$. For the base Lorentz group its null little group is $E=\\mathbb R^2\\rtimes SO(2)$; for the universal double cover it is $\\widetilde E=\\mathbb R^2\\rtimes\\mathrm{Spin}(2)$ with $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$. Write $z$ for the lifted $2\\pi$ rotation, the order-two deck element.\n\nOn the zero translation orbit of $\\widehat{\\mathbb R^2}$, the little-group representations are the helicity characters\n$$\n\\theta_s([r])=e^{isr};\\qquad s\\in\\mathbb Z\\text{ for }SO(2),\\quad s\\in\\tfrac12\\mathbb Z\\text{ for }\\mathrm{Spin}(2).\n$$\nThe universal-cover helicity induction has central value $e^{2\\pi i s}$, so integer helicities descend to the base group and half-integer noninteger helicities do not.\n\nFor every $\\rho>0$, the nonzero translation orbit $|\\xi|=\\rho$ gives a continuous-spin little-group representation. It is unique for $E$, while for $\\widetilde E$ there are two representations $\\theta_{\\rho,\\epsilon}$, $\\epsilon\\in\\{+1,-1\\}$, from the two characters of the stabilizer $\\{\\pm1\\}$. The universal-cover Poincaré inductions have central value $\\epsilon I$; the $+1$ branch descends to the base Poincaré group and the $-1$ branch does not. All these inductions are irreducible and positive-energy.\n\n## Facts & Assumptions\n\n**Given:** $D=4$, $p_+=(1,0,0,1)$, the base null little group, and its universal double-cover preimage.\n\n[F1] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: the $D=4$ null preimages are $\\mathbb R^2\\rtimes SO(2)$ and $\\mathbb R^2\\rtimes\\mathrm{Spin}(2)$, with $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$; the universal Lorentz-cover kernel has order two.\n\n[F2] [[lem-null-little-group-unitary-duals-for-all-dimensions]]: in $D=4$, the zero translation orbit gives all $SO(2)$ or $\\mathrm{Spin}(2)$ representations, and each $\\rho>0$ sphere gives one base representation or two double-cover representations from the stabilizer $\\{\\pm1\\}$.\n\n[F3] [[thm-schurs-lemma-for-unitary-representations]]: under AC, an operator commuting with an irreducible unitary representation is scalar.\n\n[F4] [[lem-continuous-characters-of-the-real-line-are-exponentials]]: continuous characters of $\\mathbb R$ have the form $r\\mapsto e^{2\\pi i\\xi r}$; equivalently, they are $e^{isr}$ for $s\\in\\mathbb R$.\n\n[F5] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: inducing from an irreducible little-group representation over $p_+\\in C_+$ gives an irreducible positive-energy Poincaré representation.\n\n[F6] [[lem-central-kernel-descent-for-poincare-inductions]]: the induced Poincaré representation descends through the universal-cover kernel exactly when that kernel acts trivially in the little-group representation.\n\n[A1] AC is the choice-function principle required by [F2], [F3], [F5], and [F6]. [[def-axiom-of-choice]]\n\n## Proof\n\n**Given:** The groups and $p_+$ in the Example, with AC.\n\n1.1 The circles $SO(2)=\\mathbb R/(2\\pi\\mathbb Z)$ and $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$ are abelian. In an irreducible unitary representation of either circle, each operator commutes with the entire representation, so [F3] makes every operator scalar; the representation is therefore a one-dimensional continuous character. Pull it back to $\\mathbb R$. By [F4] it is $e^{isr}$ for a unique real $s$. It descends to $SO(2)$ exactly when $e^{2\\pi i s}=1$, i.e. $s\\in\\mathbb Z$, and to $\\mathrm{Spin}(2)$ exactly when $e^{4\\pi i s}=1$, i.e. $s\\in\\tfrac12\\mathbb Z$. Thus the zero-translation little-group labels in the Example are exhaustive. [F1, F2, F3, F4, A1, given]\n\n1.2 For $\\rho>0$, [F2] gives a single induced little-group representation for $E$, because its point stabilizer in $SO(2)$ is trivial. For the double cover the stabilizer is $\\{\\pm1\\}$, whose two one-dimensional characters have values $\\epsilon=+1$ and $\\epsilon=-1$ on $z$. Thus the two double-cover little representations are inequivalent and exhaust this orbit's unitary dual. [F1, F2, algebra]\n\n2.1 In $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$ the element $z=[2\\pi]$ has order two. The character $\\theta_s$ sends it to $e^{2\\pi i s}$, which is $+1$ for integer $s$ and $-1$ for noninteger half-integer $s$. Applying [F6] to the full Poincaré induction gives precisely the stated helicity descent outcomes. [F1, F4, F6, step 1.1, algebra]\n\n2.2 Each little representation in step 1.2 is irreducible by [F2]. Its induction to the full Poincaré group is irreducible and positive-energy by [F5]. In the double-cover branches $z$ acts as $\\epsilon I$ by [F6], so the $+1$ branch factors through the base group and the $-1$ branch fails the necessary identity condition. The base group has no cover kernel. This verifies both continuous-spin central parities and their descent. [F1, F2, F5, F6, step 1.2",
          "proposed_replacement": "  - def-covariant-function-model-of-unitary-induction\n  - lem-the-induced-action-is-unitary\nprovenance:\n  statement: literature-derived\n  proof: ai-altered\nsources:\n  references:\n    - title: \"Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)\"\n      url: \"https://arxiv.org/pdf/hep-th/0611263\"\n      locator: \"§3.3 and Appendix B.3, PDF pp. 13–15 and 57–58; the local example records both cover parities.\"\n    - title: \"Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS\"\n      url: \"https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf\"\n      locator: \"Chapter 4.4, printed pp. 4.15–4.16 (PDF pp. 63–64), helicity and continuous-spin branches.\"\n\n---\n\n## Example\n\nLet $p_+=(1,0,0,1)$ be a nonzero future null momentum in $D=4$. For the base Lorentz group its null little group is $E=\\mathbb R^2\\rtimes SO(2)$; for the universal double cover it is $\\widetilde E=\\mathbb R^2\\rtimes\\mathrm{Spin}(2)$ with $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$. Write $z$ for the lifted $2\\pi$ rotation, the order-two deck element.\n\nOn the zero translation orbit of $\\widehat{\\mathbb R^2}$, the little-group representations are the helicity characters\n$$\n\\theta_s([r])=e^{isr};\\qquad s\\in\\mathbb Z\\text{ for }SO(2),\\quad s\\in\\tfrac12\\mathbb Z\\text{ for }\\mathrm{Spin}(2).\n$$\nThe universal-cover helicity induction has central value $e^{2\\pi i s}$, so integer helicities descend to the base group and half-integer noninteger helicities do not.\n\nFor every $\\rho>0$, the nonzero translation orbit $|\\xi|=\\rho$ gives a continuous-spin little-group representation. It is unique for $E$, while for $\\widetilde E$ there are two representations $\\theta_{\\rho,\\epsilon}$, $\\epsilon\\in\\{+1,-1\\}$, from the two characters of the stabilizer $\\{\\pm1\\}$. The universal-cover Poincaré inductions have central value $\\epsilon I$; the $+1$ branch descends to the base Poincaré group and the $-1$ branch does not. All these inductions are irreducible and positive-energy.\n\n## Facts & Assumptions\n\n**Given:** $D=4$, $p_+=(1,0,0,1)$, the base null little group, and its universal double-cover preimage.\n\n[F1] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: the $D=4$ null preimages are $\\mathbb R^2\\rtimes SO(2)$ and $\\mathbb R^2\\rtimes\\mathrm{Spin}(2)$, with $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$; the universal Lorentz-cover kernel has order two.\n\n[F2] [[lem-null-little-group-unitary-duals-for-all-dimensions]]: in $D=4$, the zero translation orbit gives all $SO(2)$ or $\\mathrm{Spin}(2)$ representations, and each $\\rho>0$ sphere gives one base representation or two double-cover representations from the stabilizer $\\{\\pm1\\}$.\n\n[F3] [[thm-schurs-lemma-for-unitary-representations]]: under AC, an operator commuting with an irreducible unitary representation is scalar.\n\n[F4] [[lem-continuous-characters-of-the-real-line-are-exponentials]]: continuous characters of $\\mathbb R$ have the form $r\\mapsto e^{2\\pi i\\xi r}$; equivalently, they are $e^{isr}$ for $s\\in\\mathbb R$.\n\n[F5] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: inducing from an irreducible little-group representation over $p_+\\in C_+$ gives an irreducible positive-energy Poincaré representation.\n\n[F6] [[lem-central-kernel-descent-for-poincare-inductions]]: the induced Poincaré representation descends through the universal-cover kernel exactly when that kernel acts trivially in the little-group representation.\n\n[F7] In unitary induction from a closed subgroup $H$, covariant functions satisfy $F(xh)=\\sigma(h)^{-1}F(x)$ and the induced action is $(U(g)F)(x)=D_g(xH)^{1/2}F(g^{-1}x)$ ([[def-covariant-function-model-of-unitary-induction]], [[lem-the-induced-action-is-unitary]]).\n\n[A1] AC is the choice-function principle required by [F2], [F3], [F5], and [F6]. [[def-axiom-of-choice]]\n\n## Proof\n\n**Given:** The groups and $p_+$ in the Example, with AC.\n\n1.1 The circles $SO(2)=\\mathbb R/(2\\pi\\mathbb Z)$ and $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$ are abelian. In an irreducible unitary representation of either circle, each operator commutes with the entire representation, so [F3] makes every operator scalar; the representation is therefore a one-dimensional continuous character. Pull it back to $\\mathbb R$. By [F4] it is $e^{isr}$ for a unique real $s$. It descends to $SO(2)$ exactly when $e^{2\\pi i s}=1$, i.e. $s\\in\\mathbb Z$, and to $\\mathrm{Spin}(2)$ exactly when $e^{4\\pi i s}=1$, i.e. $s\\in\\tfrac12\\mathbb Z$. Thus the zero-translation little-group labels in the Example are exhaustive. [F1, F2, F3, F4, A1, given]\n\n1.2 For $\\rho>0$, [F2] gives a single induced little-group representation for $E$, because its point stabilizer in $SO(2)$ is trivial. For the double cover the stabilizer is $\\{\\pm1\\}$, whose two one-dimensional characters have values $\\epsilon=+1$ and $\\epsilon=-1$ on $z$. Thus the two double-cover little representations are inequivalent and exhaust this orbit's unitary dual. [F1, F2, algebra]\n\n2.1 In $\\mathrm{Spin}(2)=\\mathbb R/(4\\pi\\mathbb Z)$ the element $z=[2\\pi]$ has order two. The character $\\theta_s$ sends it to $e^{2\\pi i s}$, which is $+1$ for integer $s$ and $-1$ for noninteger half-integer $s$. Applying [F6] to the full Poincaré induction gives precisely the stated helicity descent outcomes. [F1, F4, F6, step 1.1, algebra]\n\n2.2 Each little representation in step 1.2 is irreducible by [F2]. In a double-cover branch it is induced from $H=\\mathbb R^2\\rtimes\\{1,z\\}$ with $\\sigma=\\chi_\\xi\\otimes\\epsilon$. The element $z$ is central in $\\widetilde E$ and belongs to $H$, so it fixes every quotient point; its Radon--Nikodym factor is $1$ almost everywhere. By [F7], $(\\theta_{\\rho,\\epsilon}(z)F)(x)=F(z^{-1}x)=F(xz^{-1})=\\sigma(z^{-1})^{-1}F(x)=\\epsilon F(x)$, so $z$ acts on this intermediate little-group representation as $\\epsilon I$ on its Hilbert completion. Now its induction to the full Poincare group is irreducible and positive-energy by [F5], and [F6] transfers this computed central value to that induction. Thus the $+1$ branch factors through the base group and the $-1$ branch fails the necessary identity condition. The base group has no cover kernel. This verifies both continuous-spin central parities and their descent. [F1, F2, F5, F6, F7, step 1.2, algebra"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-76-step5-context.json"
  },
  {
    "id": "cex-temperley-lieb-zero-loop-generator-is-zero",
    "batch": "57",
    "source_kind": "concern",
    "reader_batch": "57",
    "before_guard_sha256": "ccb0d58053d44abb6bc85f65c4fdf6a6fecb772ae89f6287a5b79ef3ad58eefc",
    "concern_index": 1,
    "concern": {
      "id": "cex-temperley-lieb-zero-loop-generator-is-zero",
      "concern": "The counterexample uses the headings “## Claim refuted” and “## Proof”, whereas SCHEMA.md specifies “## Statement refuted” and “## Counterexample” for kind: counterexample. The mathematical witness and proof are sound.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:54.260655+00:00",
      "reason": "The concrete rank2 free diagram module has nonzero cap-cup basis vector d1 and d1 squared0 at delta0. The witness genuinely refutes the displayed false claim; Statement refuted/Counterexample headings correctly encode its kind without changing it.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-tl-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "Claim refuted\n\nThe assertion “if the loop value is $0$, then every local generator is $0$” is false for $R=\\mathbb Z$, loop value $\\delta=0$, and rank $n=2$.\n\n## Facts & Assumptions\n\n**Given:** $R=\\mathbb Z$, $\\delta=0$, and $n=2$.\n\n[F1] The rank-two diagram module is free on its loop-free noncrossing pairings; its identity and cap-cup diagram are distinct basis elements. ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]])\n\n[F2] At loop value $0$, the local relation is $d_1^2=0$, and $u_1\\mapsto d_1$ under the presentation map. ([[lem-temperley-lieb-generators-satisfy-local-relations]])\n\n[F3] The presentation map $P_2(\\mathbb Z,0)\\to\\mathrm{TL}_2(\\mathbb Z,0)$ is an isomorphism. ([[thm-temperley-lieb-presentation-isomorphism]])\n\n## Proof",
          "proposed_replacement": "Statement refuted\n\nThe assertion “if the loop value is $0$, then every local generator is $0$” is false for $R=\\mathbb Z$, loop value $\\delta=0$, and rank $n=2$.\n\n## Facts & Assumptions\n\n**Given:** $R=\\mathbb Z$, $\\delta=0$, and $n=2$.\n\n[F1] The rank-two diagram module is free on its loop-free noncrossing pairings; its identity and cap-cup diagram are distinct basis elements. ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]])\n\n[F2] At loop value $0$, the local relation is $d_1^2=0$, and $u_1\\mapsto d_1$ under the presentation map. ([[lem-temperley-lieb-generators-satisfy-local-relations]])\n\n[F3] The presentation map $P_2(\\mathbb Z,0)\\to\\mathrm{TL}_2(\\mathbb Z,0)$ is an isomorphism. ([[thm-temperley-lieb-presentation-isomorphism]])\n\n## Counterexample"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-57-step5-context.json"
  },
  {
    "id": "lem-temperley-lieb-jones-wenzl-recursion-properties",
    "batch": "59",
    "source_kind": "concern",
    "reader_batch": "59",
    "before_guard_sha256": "a99ca9fcdfbc81f78c6b952277163160435c7725f6e6d4e65c0efd3b042f6042",
    "concern_index": 0,
    "concern": {
      "id": "lem-temperley-lieb-jones-wenzl-recursion-properties",
      "concern": "F5 says, “Every diagram generator spans the diagram algebra together with the unit”. The cited supplier proves that generator words span, not that individual generators and the unit linearly span the algebra. Step 5.1 uses the correct generator-word statement, so this is a wording correction to F5 rather than a gap in the argument.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:08:54.260655+00:00",
      "reason": "Generators alone do not linearly span the algebra; finite generator words do. Every nonempty word has a rightmost generator annihilating p, so p TL p is the scalar corner. Correcting F5 and its mirror supplies the precise existing proof.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-tl-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "Every diagram generator spans the diagram algebra together with the unit",
          "proposed_replacement": "Finite words in the elementary diagram generators, including the empty word for the unit, span the diagram algebra"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-59-step5-context.json"
  },
  {
    "id": "lem-heisenberg-group-lagrangian-splitting-and-dual-orbit",
    "batch": "39",
    "source_kind": "concern",
    "reader_batch": "39",
    "before_guard_sha256": "63140544e5d0f4df30ff55b2dd77adf760998ce8f153e9f7c4948f3548fc5c54",
    "concern_index": 0,
    "concern": {
      "id": "lem-heisenberg-group-lagrangian-splitting-and-dual-orbit",
      "concern": "Steps 3.1–4.1 classify the characters and then treat their parameters as Euclidean topological coordinates: step 4.1 says the orbit map is continuous with continuous inverse. The cited real-line character lemma proves the character classification, but does not establish that the parameter map ℝ→ℝ-hat is a homeomorphism for the compact-open topology; the finite-product dual lemma does not supply this missing one-factor assertion. This is a short gap: bounded-interval uniform estimates prove forward continuity, and uniform closeness to 1 on [−1,1] forces the frequency parameter to be small, proving inverse continuity. The downstream uniqueness proof uses this orbit identification as a Borel isomorphism in step 4.1.",
      "severity": "gap-a-reader-closes"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:04:25.937235+00:00",
      "reason": "Character classification alone is a set bijection. The added compact-open estimates establish forward and inverse continuity explicitly: on [-pi/delta,pi/delta] a frequency error >=delta gives phase distance2 at t=pi/error. Finite product dual topology and nonzero scaling prove the full topological orbit statement, including n0.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-algebra-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "proof_strategy: direct\nprovenance:\n  statement: literature-derived\n  proof: ai-altered\nsources:\n  references:\n    - title: \"Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes\"\n      url: \"https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf\"\n    - title: \"Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem\"\n      url: \"https://arxiv.org/pdf/0912.0574\"\n---\n## Statement\n\n\n\nLet $(V,\\omega)$ be a finite-dimensional real symplectic vector space, let\n$H(V,\\omega)$ be [[def-heisenberg-group-of-a-symplectic-vector-space]], and\nwrite $n=\\frac12\\dim V$. For a symplectic basis, write\n$v=(q,p)\\in\\mathbb R^n\\times\\mathbb R^n$ so that\n$\\omega((q,p),(q',p'))=q\\cdot p'-p\\cdot q'$. Set\n\n$$N:=\\{(0,p,t):p\\in\\mathbb R^n,t\\in\\mathbb R\\},\\qquad K:=\\{(q,0,0):q\\in\\mathbb R^n\\}.$$\nThen $H(V,\\omega)$ is a second-countable locally compact group and $H(V,\\omega)\\cong N\\rtimes_\\alpha K$, where\n$$\\alpha_q(p,t)=(p,t-q\\cdot p).$$\nIts center is $\\{(0,0,t):t\\in\\mathbb R\\}$. Every continuous character of $N$ has the form\n$$\\chi_{a,\\mu}(p,t)=e^{i(a\\cdot p+\\mu t)}\\quad(a\\in\\mathbb R^n,\\mu\\in\\mathbb R).$$\nFor $\\lambda\\ne0$, the dual action $q\\cdot\\chi=\\chi\\circ\\alpha_{-q}$ is free and transitive on\n$$\\widehat N_\\lambda:=\\{\\chi_{a,\\lambda}:a\\in\\mathbb R^n\\};$$\nthe stabilizer of $\\chi_{0,\\lambda}$ is trivial and $q\\mapsto\\chi_{\\lambda q,\\lambda}$ identifies $K$ with this orbit.\n\n## Facts & Assumptions\n\n**Given:** The finite-dimensional symplectic vector space, its Heisenberg group, and a symplectic basis as above.\n\n[F1] A symplectic form is alternating, bilinear, and nondegenerate ([[def-symplectic-vector-space]]).\n\n[F2] There is a basis $e_1,f_1,\\ldots,e_n,f_n$ with $\\omega(e_i,f_j)=\\delta_{ij}$ and all other cross-pairings zero; in particular $\\dim V=2n$ ([[prop-symplectic-vector-spaces-have-even-dimension]]).\n\n[F3] Each continuous character of the additive line is uniquely $t\\mapsto e^{2\\pi i\\xi t}$, and the Pontryagin dual of a finite product of locally compact abelian groups is the product of their duals, with the product topology ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-duals-of-finite-products-and-discrete-direct-sums]]).\n\n[F4] The external semidirect product has multiplication $(n,k)(n',k')=(n\\alpha_k(n'),kk')$, and an action by automorphisms obeys $\\alpha_{k+k'}=\\alpha_k\\alpha_{k'}$ ([[def-external-semidirect-product]], [[def-action-by-automorphisms]]).\n\n## Proof\n\n\n\n**Proof technique:** direct.\n\n**Given:** The hypotheses in the Statement.\n\n1.1 In coordinates from [F2], bilinearity gives $\\omega((q,p),(q',p'))=q\\cdot p'-p\\cdot q'$. For three vectors $v,w,u$,$\\omega(v,w)+\\omega(v+w,u)=\\omega(v,w)+\\omega(v,u)+\\omega(w,u) =\\omega(w,u)+\\omega(v,w+u).$Thus $c(v,w)=-\\frac12\\omega(v,w)$ satisfies the normalized 2-cocycle identity $c(v,w)+c(v+w,u)=c(w,u)+c(v,w+u)$. Substitution in the group law proves associativity; $\\omega(v,0)=\\omega(0,v)=0$ gives identity $(0,0)$, and $\\omega(v,-v)=0$ gives inverse $(-v,-t)$. Addition and $\\omega$ are continuous, so multiplication and inverse are continuous. The underlying finite-dimensional Euclidean space $V\\times\\mathbb R$ is locally compact and second countable. [F1, F2, algebra]\n\n2.1 An element $(v,t)$ commutes with every $(w,0)$ exactly when $\\omega(v,w)=0$ for all $w$. Nondegeneracy in [F1] forces $v=0$, and each $(0,t)$ is central by the product formula. Hence the center is the displayed central coordinate. The projection $(v,t)\\mapsto v$ is onto with kernel $\\{(0,t):t\\in\\mathbb R\\}$, proving exactness of the central extension in the definition. [F1, step 1.1]\n\n2.2 For $q\\in K$ and $(p,t)\\in N$, direct multiplication gives $(q,0,0)(0,p,t)(-q,0,0)=(0,p,t-q\\cdot p)$; thus $\\alpha_q(p,t)=(p,t-q\\cdot p)$. This is an automorphism because it is additive, has inverse $\\alpha_{-q}$, and $\\alpha_{q+q'}=\\alpha_q\\alpha_{q'}$. Every group element has the unique factorization$(q,p,z)=(0,p,z-q\\cdot p/2)(q,0,0).$Therefore $(n,q)\\mapsto n(q,0,0)$ is a bijection from the semidirect product of [F4] to $H(V,\\omega)$; the conjugation computation makes it a homomorphism. Its coordinate formula and inverse are continuous, so it is a topological group isomorphism. [F2, F4, step 1.1]\n\n3.1 Apply [F3] to $N\\cong\\mathbb R^{n+1}$. Rescaling the coordinates by $2\\pi$ gives every character exactly once as $\\chi_{a,\\mu}(p,t)=e^{i(a\\cdot p+\\mu t)}$. Since $\\alpha_{-q}(p,t)=(p,t+q\\cdot p)$, composition yields$q\\cdot\\chi_{a,\\mu}=\\chi_{a+\\mu q,\\mu}.$ [F3, step 2.2]\n\n4.1 When $\\mu=\\lambda\\ne0$, the map $q\\mapsto a+\\lambda q$ is a bijection of $\\mathbb R^n$ with itself. It is continuous with continuous inverse $a\\mapsto(a-a_0)/\\lambda$, so the orbit through $(a_0,\\lambda)$ is all of $\\widehat N_\\lambda$ and its stabilizer is $\\{0\\}$. This proves the free transitive orbit and stabilizer claims. [step 3.1",
          "proposed_replacement": "  - def-pontryagin-dual-and-compact-open-topology\nproof_strategy: direct\nprovenance:\n  statement: literature-derived\n  proof: ai-altered\nsources:\n  references:\n    - title: \"Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes\"\n      url: \"https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf\"\n    - title: \"Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem\"\n      url: \"https://arxiv.org/pdf/0912.0574\"\n---\n## Statement\n\n\n\nLet $(V,\\omega)$ be a finite-dimensional real symplectic vector space, let\n$H(V,\\omega)$ be [[def-heisenberg-group-of-a-symplectic-vector-space]], and\nwrite $n=\\frac12\\dim V$. For a symplectic basis, write\n$v=(q,p)\\in\\mathbb R^n\\times\\mathbb R^n$ so that\n$\\omega((q,p),(q',p'))=q\\cdot p'-p\\cdot q'$. Set\n\n$$N:=\\{(0,p,t):p\\in\\mathbb R^n,t\\in\\mathbb R\\},\\qquad K:=\\{(q,0,0):q\\in\\mathbb R^n\\}.$$\nThen $H(V,\\omega)$ is a second-countable locally compact group and $H(V,\\omega)\\cong N\\rtimes_\\alpha K$, where\n$$\\alpha_q(p,t)=(p,t-q\\cdot p).$$\nIts center is $\\{(0,0,t):t\\in\\mathbb R\\}$. Every continuous character of $N$ has the form\n$$\\chi_{a,\\mu}(p,t)=e^{i(a\\cdot p+\\mu t)}\\quad(a\\in\\mathbb R^n,\\mu\\in\\mathbb R).$$\nFor $\\lambda\\ne0$, the dual action $q\\cdot\\chi=\\chi\\circ\\alpha_{-q}$ is free and transitive on\n$$\\widehat N_\\lambda:=\\{\\chi_{a,\\lambda}:a\\in\\mathbb R^n\\};$$\nthe stabilizer of $\\chi_{0,\\lambda}$ is trivial and $q\\mapsto\\chi_{\\lambda q,\\lambda}$ identifies $K$ with this orbit.\n\n## Facts & Assumptions\n\n**Given:** The finite-dimensional symplectic vector space, its Heisenberg group, and a symplectic basis as above.\n\n[F1] A symplectic form is alternating, bilinear, and nondegenerate ([[def-symplectic-vector-space]]).\n\n[F2] There is a basis $e_1,f_1,\\ldots,e_n,f_n$ with $\\omega(e_i,f_j)=\\delta_{ij}$ and all other cross-pairings zero; in particular $\\dim V=2n$ ([[prop-symplectic-vector-spaces-have-even-dimension]]).\n\n[F3] Each continuous character of the additive line is uniquely $t\\mapsto e^{2\\pi i\\xi t}$, and the Pontryagin dual of a finite product of locally compact abelian groups is the product of their duals, with the product topology ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-duals-of-finite-products-and-discrete-direct-sums]]).\n\n[F4] The external semidirect product has multiplication $(n,k)(n',k')=(n\\alpha_k(n'),kk')$, and an action by automorphisms obeys $\\alpha_{k+k'}=\\alpha_k\\alpha_{k'}$ ([[def-external-semidirect-product]], [[def-action-by-automorphisms]]).\n\n[F5] The topology on the character group is the compact-open topology, with basic identity conditions of uniform containment on compact sets ([[def-pontryagin-dual-and-compact-open-topology]]).\n\n## Proof\n\n\n\n**Proof technique:** direct.\n\n**Given:** The hypotheses in the Statement.\n\n1.1 In coordinates from [F2], bilinearity gives $\\omega((q,p),(q',p'))=q\\cdot p'-p\\cdot q'$. For three vectors $v,w,u$,$\\omega(v,w)+\\omega(v+w,u)=\\omega(v,w)+\\omega(v,u)+\\omega(w,u) =\\omega(w,u)+\\omega(v,w+u).$Thus $c(v,w)=-\\frac12\\omega(v,w)$ satisfies the normalized 2-cocycle identity $c(v,w)+c(v+w,u)=c(w,u)+c(v,w+u)$. Substitution in the group law proves associativity; $\\omega(v,0)=\\omega(0,v)=0$ gives identity $(0,0)$, and $\\omega(v,-v)=0$ gives inverse $(-v,-t)$. Addition and $\\omega$ are continuous, so multiplication and inverse are continuous. The underlying finite-dimensional Euclidean space $V\\times\\mathbb R$ is locally compact and second countable. [F1, F2, algebra]\n\n2.1 An element $(v,t)$ commutes with every $(w,0)$ exactly when $\\omega(v,w)=0$ for all $w$. Nondegeneracy in [F1] forces $v=0$, and each $(0,t)$ is central by the product formula. Hence the center is the displayed central coordinate. The projection $(v,t)\\mapsto v$ is onto with kernel $\\{(0,t):t\\in\\mathbb R\\}$, proving exactness of the central extension in the definition. [F1, step 1.1]\n\n2.2 For $q\\in K$ and $(p,t)\\in N$, direct multiplication gives $(q,0,0)(0,p,t)(-q,0,0)=(0,p,t-q\\cdot p)$; thus $\\alpha_q(p,t)=(p,t-q\\cdot p)$. This is an automorphism because it is additive, has inverse $\\alpha_{-q}$, and $\\alpha_{q+q'}=\\alpha_q\\alpha_{q'}$. Every group element has the unique factorization$(q,p,z)=(0,p,z-q\\cdot p/2)(q,0,0).$Therefore $(n,q)\\mapsto n(q,0,0)$ is a bijection from the semidirect product of [F4] to $H(V,\\omega)$; the conjugation computation makes it a homomorphism. Its coordinate formula and inverse are continuous, so it is a topological group isomorphism. [F2, F4, step 1.1]\n\n3.1 Apply [F3] to $N\\cong\\mathbb R^{n+1}$. Rescaling the coordinates by $2\\pi$ gives every character exactly once as $\\chi_{a,\\mu}(p,t)=e^{i(a\\cdot p+\\mu t)}$. Since $\\alpha_{-q}(p,t)=(p,t+q\\cdot p)$, composition yields$q\\cdot\\chi_{a,\\mu}=\\chi_{a+\\mu q,\\mu}.$ [F3, step 2.2]\n\n3.2 The frequency parametrization in step 3.1 is a homeomorphism for the compact-open topology of [F5]. First consider $\\beta_b(t)=e^{ibt}$ on $\\mathbb R$. On any nonempty compact set $C\\subset\\mathbb R$, put $M=\\max_{t\\in C}|t|$; the estimate $|e^{ibt}-e^{ib_0t}|\\le |b-b_0|M$ proves continuity uniformly on $C$. Conversely, for any $\\delta>0$, require uniform distance less than $1$ from $\\beta_{b_0}$ on the compact interval $[-\\pi/\\delta,\\pi/\\delta]$. If $|b-b_0|\\ge\\delta$, then $t=\\pi/(b-b_0)$ lies in that interval and $|e^{i(b-b_0)t}-1|=2$, a contradiction. This compact-open neighborhood therefore forces $|b-b_0|<\\delta$ and proves inverse continuity. The finite-product dual homeomorphism in [F3] now proves the full parameter map $(a,\\mu)\\mapsto\\chi_{a,\\mu}$ is a homeomorphism $\\mathbb R^{n+1}\\to\\widehat N$; the rescaling by $2\\pi$ is a Euclidean homeomorphism. Restricting to $\\mu=\\lambda$ gives the corresponding orbit subspace topology, including $n=0$, where the fixed-central-character orbit is a singleton. [F3, F5, step 3.1, algebra]\n\n4.1 When $\\mu=\\lambda\\ne0$, the map $q\\mapsto a+\\lambda q$ is a bijection of $\\mathbb R^n$ with itself. It is continuous with continuous inverse $a\\mapsto(a-a_0)/\\lambda$, so the orbit through $(a_0,\\lambda)$ is all of $\\widehat N_\\lambda$ and its stabilizer is $\\{0\\}$. This proves the free transitive orbit and stabilizer claims. [step 3.1, step 3.2"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-39-step5-context.json"
  },
  {
    "id": "thm-countable-mode-car-has-universal-inductive-limit-norm",
    "batch": "45",
    "source_kind": "concern",
    "reader_batch": "45",
    "before_guard_sha256": "92d03f32d10a51e0b639c599113bb4a64ef0e7924d3bb7e331ebcf6c5789b71f",
    "concern_index": 0,
    "concern": {
      "id": "thm-countable-mode-car-has-universal-inductive-limit-norm",
      "concern": "The Statement calls the algebraic union “$\\mathsf{CAR}_0$”, but the definition and displayed universal-norm formula call it CAR_loc; CAR_0 already denotes the zero-mode algebra C. This is a notation slip in the Statement.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:04:25.937235+00:00",
      "reason": "CAR_loc names the entire finite-stage union, avoiding collision with CAR_0. The asserted star homomorphism requires an explicitly adjointable target. Specified adjoints are closed under algebra operations and norm limits via Cauchy-Schwarz and completeness; no assertion that every bounded operator has an adjoint is needed. Occupation toggles attain the finite-stage norms.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-algebra-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "For every such representation there is a unique contractive unital $*$-homomorphism $\\rho:\\mathsf{CAR}_{\\mathbb N}\\to\\mathcal B(H)$ with $\\rho(a_j)=T_j$. The inductive-limit norm on the algebraic union $\\mathsf{CAR}_0$ equals the universal norm\n\n$$ \\|x\\|_{\\mathrm u}=\\sup_\\rho\\|\\rho(x)\\|,\\qquad x\\in\\mathsf{CAR}_{\\mathrm{loc}}, $$\n\nwhere the supremum is over these representations. The norm is finite and the family of representations is nonempty; a concrete representation is the occupation-space representation on $\\ell^2(\\mathcal P_{\\mathrm{fin}}(\\mathbb N))$ constructed in the proof. Its coordinate vectors $e_S$ form an orthonormal basis, so finite-support vectors are dense.\n\n## Facts & Assumptions\n**Given:** The finite and countably infinite-mode CAR algebras, a nonzero complex Hilbert space $H$ with inner product linear in the first variable, and a bounded CAR representation $(T_j,T_j^*)_{j\\ge1}$.\n\n[F1] $\\mathsf{CAR}_{\\mathbb N}$ is the completion of the increasing union $\\mathsf{CAR}_{\\mathrm{loc}}$ of the finite-mode C*-algebras under their isometric inclusions ([[def-countable-mode-car-algebra]], [[lem-finite-mode-car-canonical-inclusions-are-isometric]]).\n\n[F2] Every finite-mode C*-algebra is $M_{2^n}(\\mathbb C)$, and every unital $*$-representation on a Hilbert space is isometric and has the matrix-unit amplification form proved there ([[thm-finite-mode-car-algebra-is-full-matrix-algebra]]).\n\n[F3] The finite occupation operators are given on subset basis vectors by toggling one mode with sign $(-1)^{|\\{s\\in S:s<j\\}|}$, and they satisfy the finite CAR ([[lem-finite-mode-car-occupation-matrix-units]]).\n\n[F4] A complex Hilbert space is complete for its induced norm ([[def-hilbert-space]]), and its pairing is linear in the first variable and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]).\n\n[F5] $\\mathcal B(H)$ denotes bounded linear operators on $H$, with operator norm $\\|S\\|=\\sup_{\\|x\\|\\le1}\\|Sx\\|$ ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).\n\n[F6] The specified adjoint $S^*$ is characterized by $\\langle Sx,y\\rangle=\\langle x,S^*y\\rangle$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).\n\n[F7] $|\\langle x,y\\rangle|\\le\\|x\\|\\,\\|y\\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).\n\n[F8] For every set $I$, the canonical complex square-summable family space $\\ell^2(I,\\mathbb C)$ is a Hilbert space, its finitely supported families are dense, and its coordinate vectors form an orthonormal basis ([[thm-square-summable-families-form-a-hilbert-space]]).\n\n## Proof\n\n1.1 Restrict the given family to its first $n$ modes. The quotient universal property of [[def-finite-mode-car-algebra]] gives the finite algebraic $*$-homomorphism on generators, and [F2] identifies it with a contractive unital $*$-representation $\\rho_n:\\mathsf{CAR}_n\\to\\mathcal B(H)$. If $m\\le n$, the maps $\\rho_n\\circ\\iota_{m,n}$ and $\\rho_m$ agree on all generators of $\\mathsf{CAR}_m$, so uniqueness of the finite quotient map gives $\\rho_n\\circ\\iota_{m,n}=\\rho_m$. [given, F1, F2, construct]\n\n1.2 Let $\\mathcal P_{\\mathrm{fin}}(\\mathbb N)$ be all finite subsets of $\\mathbb N$, and let $\\mathcal F_\\infty=\\ell^2(\\mathcal P_{\\mathrm{fin}}(\\mathbb N))$ with coordinate vectors $e_S$. By [F8], this is a complex Hilbert space, the vectors $e_S$ are an orthonormal basis, and their finite span is dense. Define $c_j e_S=0$ if $j\\notin S$, and $c_j e_S=(-1)^{|\\{s\\in S:s<j\\}|}e_{S\\setminus\\{j\\}}$ if $j\\in S$; define $c_j^\\dagger$ by the reverse toggle with the same sign. Each map is a partial isometry on the basis and extends boundedly, and the coefficient of each reverse basis transition shows $c_j^\\dagger$ is its adjoint. For any finite set of indices, choose $n$ containing them; under the decomposition of the basis into first-$n$ and tail subsets, the first $n$ operators act as the finite occupation representation tensored with the identity. Hence the CAR hold for every pair of indices. The finite universal property gives compatible contractive representations of all $\\mathsf{CAR}_n$ on $\\mathcal F_\\infty$, which extend to a representation $\\pi_\\infty$ of the inductive limit. [given, F1, F2, F3, F4, F8, construct]\n\n2.1 Define $\\rho_0$ on $\\mathsf{CAR}_{\\mathrm{loc}}$ by $\\rho_0(x)=\\rho_n(x)$ whenever $x\\in\\mathsf{CAR}_n$. Compatibility in step 1.1 makes this well defined, and contractivity at each stage gives $\\|\\rho_0(x)\\|\\le\\|x\\|$. The space $\\mathcal B(H)$ is complete: for an operator-norm Cauchy sequence $(S_k)$, each $(S_kx)$ converges in $H$; its pointwise limit $Sx$ is linear and bounded because $(\\|S_k\\|)$ is bounded, and taking the pointwise limit in the uniform Cauchy bound shows $\\|S_k-S\\|\\to0$. Thus $\\rho_0$ extends uniquely and contractively to the completion. Products pass to limits by $\\|AB\\|\\le\\|A\\|\\|B\\|$. For any bounded operator $A$ with a specified adjoint, [F6] and [F7] give $\\|A^*y\\|=\\sup_{\\|x\\|\\le1}|\\langle A^*y,x\\rangle|=\\sup_{\\|x\\|\\le1}|\\langle Ax,y\\rangle|\\le\\|A\\|\\|y\\|$, hence $\\|A^*\\|\\le\\|A\\|$. Conjugating [F6] shows $A$ is the adjoint of $A^*$; uniqueness gives $(A^*)^*=A$, so applying the same inequality to $A^*$ yields $\\|A^*\\|=\\|A\\|$. Therefore if $S_k\\to S$, the adjoints $S_k^*$ are Cauchy and converge to some $R$; passing to the limit in [F6] gives $\\langle Sx,y\\rangle=\\langle x,Ry\\rangle$, so $R$ is the adjoint of $S$. Thus the extension preserves $*$ and is a unital $*$-homomorphism",
          "proposed_replacement": "Write $\\mathcal B_{\\mathrm{ad}}(H)$ for the subalgebra of $\\mathcal B(H)$ consisting of bounded operators that possess bounded adjoints, with that adjoint as involution. For every such representation there is a unique contractive unital $*$-homomorphism $\\rho:\\mathsf{CAR}_{\\mathbb N}\\to\\mathcal B_{\\mathrm{ad}}(H)$ with $\\rho(a_j)=T_j$. The inductive-limit norm on the algebraic union $\\mathsf{CAR}_{\\mathrm{loc}}$ equals the universal norm\n\n$$ \\|x\\|_{\\mathrm u}=\\sup_\\rho\\|\\rho(x)\\|,\\qquad x\\in\\mathsf{CAR}_{\\mathrm{loc}}, $$\n\nwhere the supremum is over these representations. The norm is finite and the family of representations is nonempty; a concrete representation is the occupation-space representation on $\\ell^2(\\mathcal P_{\\mathrm{fin}}(\\mathbb N))$ constructed in the proof. Its coordinate vectors $e_S$ form an orthonormal basis, so finite-support vectors are dense.\n\n## Facts & Assumptions\n**Given:** The finite and countably infinite-mode CAR algebras, a nonzero complex Hilbert space $H$ with inner product linear in the first variable, and a bounded CAR representation $(T_j,T_j^*)_{j\\ge1}$.\n\n[F1] $\\mathsf{CAR}_{\\mathbb N}$ is the completion of the increasing union $\\mathsf{CAR}_{\\mathrm{loc}}$ of the finite-mode C*-algebras under their isometric inclusions ([[def-countable-mode-car-algebra]], [[lem-finite-mode-car-canonical-inclusions-are-isometric]]).\n\n[F2] Every finite-mode C*-algebra is $M_{2^n}(\\mathbb C)$, and every unital $*$-representation on a Hilbert space is isometric and has the matrix-unit amplification form proved there ([[thm-finite-mode-car-algebra-is-full-matrix-algebra]]).\n\n[F3] The finite occupation operators are given on subset basis vectors by toggling one mode with sign $(-1)^{|\\{s\\in S:s<j\\}|}$, and they satisfy the finite CAR ([[lem-finite-mode-car-occupation-matrix-units]]).\n\n[F4] A complex Hilbert space is complete for its induced norm ([[def-hilbert-space]]), and its pairing is linear in the first variable and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]).\n\n[F5] $\\mathcal B(H)$ denotes bounded linear operators on $H$, with operator norm $\\|S\\|=\\sup_{\\|x\\|\\le1}\\|Sx\\|$ ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).\n\n[F6] The operators possessing bounded adjoints form the unital $*$-subalgebra $\\mathcal B_{\\mathrm{ad}}(H)$: the pairing identity gives $(S+T)^*=S^*+T^*$, $(zS)^*=\\overline zS^*$ and $(ST)^*=T^*S^*$, all bounded; uniqueness and conjugation give $(S^*)^*=S$ and $I^*=I$. The specified adjoint $S^*$ is characterized by $\\langle Sx,y\\rangle=\\langle x,S^*y\\rangle$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).\n\n[F7] $|\\langle x,y\\rangle|\\le\\|x\\|\\,\\|y\\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).\n\n[F8] For every set $I$, the canonical complex square-summable family space $\\ell^2(I,\\mathbb C)$ is a Hilbert space, its finitely supported families are dense, and its coordinate vectors form an orthonormal basis ([[thm-square-summable-families-form-a-hilbert-space]]).\n\n## Proof\n\n1.1 Restrict the given family to its first $n$ modes. The quotient universal property of [[def-finite-mode-car-algebra]] gives the finite algebraic $*$-homomorphism on generators, and [F2] identifies it with a contractive unital $*$-representation $\\rho_n:\\mathsf{CAR}_n\\to\\mathcal B(H)$. If $m\\le n$, the maps $\\rho_n\\circ\\iota_{m,n}$ and $\\rho_m$ agree on all generators of $\\mathsf{CAR}_m$, so uniqueness of the finite quotient map gives $\\rho_n\\circ\\iota_{m,n}=\\rho_m$. [given, F1, F2, construct]\n\n1.2 Let $\\mathcal P_{\\mathrm{fin}}(\\mathbb N)$ be all finite subsets of $\\mathbb N$, and let $\\mathcal F_\\infty=\\ell^2(\\mathcal P_{\\mathrm{fin}}(\\mathbb N))$ with coordinate vectors $e_S$. By [F8], this is a complex Hilbert space, the vectors $e_S$ are an orthonormal basis, and their finite span is dense. Define $c_j e_S=0$ if $j\\notin S$, and $c_j e_S=(-1)^{|\\{s\\in S:s<j\\}|}e_{S\\setminus\\{j\\}}$ if $j\\in S$; define $c_j^\\dagger$ by the reverse toggle with the same sign. Each map is a partial isometry on the basis and extends boundedly, and the coefficient of each reverse basis transition shows $c_j^\\dagger$ is its adjoint. For any finite set of indices, choose $n$ containing them; under the decomposition of the basis into first-$n$ and tail subsets, the first $n$ operators act as the finite occupation representation tensored with the identity. Hence the CAR hold for every pair of indices. The finite universal property gives compatible contractive representations of all $\\mathsf{CAR}_n$ on $\\mathcal F_\\infty$, which extend to a representation $\\pi_\\infty$ of the inductive limit. [given, F1, F2, F3, F4, F8, construct]\n\n2.1 Define $\\rho_0$ on $\\mathsf{CAR}_{\\mathrm{loc}}$ by $\\rho_0(x)=\\rho_n(x)$ whenever $x\\in\\mathsf{CAR}_n$. Compatibility in step 1.1 makes this well defined, and contractivity at each stage gives $\\|\\rho_0(x)\\|\\le\\|x\\|$. The space $\\mathcal B(H)$ is complete: for an operator-norm Cauchy sequence $(S_k)$, each $(S_kx)$ converges in $H$; its pointwise limit $Sx$ is linear and bounded because $(\\|S_k\\|)$ is bounded, and taking the pointwise limit in the uniform Cauchy bound shows $\\|S_k-S\\|\\to0$. Thus $\\rho_0$ extends uniquely and contractively to the completion. Products pass to limits by $\\|AB\\|\\le\\|A\\|\\|B\\|$. For any bounded operator $A$ with a specified adjoint, [F6] and [F7] give $\\|A^*y\\|=\\sup_{\\|x\\|\\le1}|\\langle A^*y,x\\rangle|=\\sup_{\\|x\\|\\le1}|\\langle Ax,y\\rangle|\\le\\|A\\|\\|y\\|$, hence $\\|A^*\\|\\le\\|A\\|$. Conjugating [F6] shows $A$ is the adjoint of $A^*$; uniqueness gives $(A^*)^*=A$, so applying the same inequality to $A^*$ yields $\\|A^*\\|=\\|A\\|$. Therefore if $S_k\\to S$, the adjoints $S_k^*$ are Cauchy and converge to some $R$; passing to the limit in [F6] gives $\\langle Sx,y\\rangle=\\langle x,Ry\\rangle$, so $R$ is the adjoint of $S$. Thus the extension takes values in $\\mathcal B_{\\mathrm{ad}}(H)$, preserves $*$, and is a unital $*$-homomorphism into this subalgebra"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-45-step5-context.json"
  },
  {
    "id": "thm-modc-relative-deligne-product-is-algebra-tensor-product",
    "batch": "79",
    "source_kind": "concern",
    "reader_batch": "79",
    "before_guard_sha256": "cf52c5db00c95966d342922dede2fda8b3333af9760abcd7cd724728659a2a75",
    "concern_index": 2,
    "concern": {
      "id": "thm-modc-relative-deligne-product-is-algebra-tensor-product",
      "concern": "Numbered proof rows contain sentence fragments spanning step boundaries: 1.3 ends with the definition of H_d(L), while 1.4 begins 'constructed as'; 1.8 ends after the free-pair isomorphism with a semicolon, and 1.9 begins 'it identifies'. Consolidating each complete argument into its own tagged paragraph would meet the complete-step formatting requirement.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:04:25.937235+00:00",
      "reason": "The two broken sentence boundaries obscure existing typed bimodule and balanced-functor constructions. Completing those sentences leaves the positive braided product, universal balanced equivalence and weak coherence unchanged.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-algebra-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": ", [F1, F2, given, algebra]\n\n1.4 constructed as the image of the separability idempotent `(r⊙l_L)(1_d⊙e_K⊙1_L)` on d⊙L. Its image exists because D is finite semisimple. The usual centrality and unit equations for e_K show this image corepresents K-balanced maps, just as for the ordinary bimodule supplier: the idempotent is fixed by every balanced map; conversely its projection is balanced. No new coequalizer existence theorem is being assumed. This construction is functorial in L and K-linear maps d→d'. [F1, F2, given, algebra]\n\n1.5 Conversely any module functor H:P→D is canonically H_d with d=H(K). Its right action is H(m_K):H(K⊗K)≅H(K)⊙K→H(K). On free modules K⊗X, its module constraint gives H(K⊗X)≅d⊙X. Every K-module L is a retract of K⊗L: the action is the retraction and the section is `(1_K⊗l_L)(e_K⊗1_L)`. This section is K-linear by centrality, and its action composite is 1_L. Hence the free-module comparison extends uniquely to all retracts. To check naturality it suffices to check free maps. Such a map K⊗X→K⊗Y is uniquely `(m_K⊗1_Y)(1_K⊗f)` for f:X→K⊗Y obtained by inserting η_K; H and H_d agree on this expression by the definition of r. Transformations agree precisely when their value at K is K-linear. This proves an equivalence of categories, including transformations, between module functors P→D and right K-objects in D. For a balanced module functor F:Mod^l(A)×Mod^l(B)→D, put d=F(A,B). Denote its outer constraint by `δ:F(M,NX)→F(M,N)⊙X` and its balance by β. Put `θ=δβ:F(MX,N)→F(M,N)⊙X`. Define `r_A=F(m_A,1_B) θ_{A,A,B}^{-1}:d⊙A→d`, `r_B=F(1_A,m_B) δ_{A,B,B}^{-1}:d⊙B→d`. [F1, F2, given, algebra]\n\n1.6 Naturality with the algebra multiplications proves their associative/unital action equations. Expanding the balance/outer compatibility square gives the precise exchange equation `r_A(r_B⊙1_A)=r_B(r_A⊙1_B)(1_d⊙c_{B,A}):d⊙B⊙A→d`. [F1, F2, given, algebra]\n\n1.7 For an explicit verification, replace θ by δβ, move each multiplication through δ by its naturality, and through β by naturality in its module arguments. The residual two routes move the free B slot past the free A slot. The balance-associativity equation for the chosen inverse left conversion replaces that move by c_{B,A}; its inverse crossing is cancelled by the inverse in θ^-1. The remaining maps are F(m_A,m_B) on both routes. Thus `r=r_B(r_A⊙1_B)` is a right K-action: its iterated action on dABAB first moves the middle B past A by c_{B,A}, then uses the two individual action equations, exactly giving r(1_d⊙m_K). This proves the action equation without assuming ordinary commuting actions. [F1, F2, given, algebra]\n\n1.8 The functor H_d b is canonically equivalent to F. On free pairs first use δ to identify $F(AX,BY)$ with $F(AX,B)\\odot Y$, and then θ on the first factor, to obtain `F(A⊗X,B⊗Y)≅d⊙X⊙Y`. Meanwhile the positive crossing `1_A⊗c_{B,X}⊗1_Y` is a K-linear isomorphism `K⊗X⊗Y→b(A⊗X,B⊗Y)`; [F1, F2, given, algebra]\n\n1.9 it",
          "proposed_replacement": ". [F1, F2, given, algebra]\n\n1.4 Construct $H_d(L)$ as the image of the separability idempotent `(r⊙l_L)(1_d⊙e_K⊙1_L)` on d⊙L. Its image exists because D is finite semisimple. The usual centrality and unit equations for e_K show this image corepresents K-balanced maps, just as for the ordinary bimodule supplier: the idempotent is fixed by every balanced map; conversely its projection is balanced. No new coequalizer existence theorem is being assumed. This construction is functorial in L and K-linear maps d→d'. [F1, F2, given, algebra]\n\n1.5 Conversely any module functor H:P→D is canonically H_d with d=H(K). Its right action is H(m_K):H(K⊗K)≅H(K)⊙K→H(K). On free modules K⊗X, its module constraint gives H(K⊗X)≅d⊙X. Every K-module L is a retract of K⊗L: the action is the retraction and the section is `(1_K⊗l_L)(e_K⊗1_L)`. This section is K-linear by centrality, and its action composite is 1_L. Hence the free-module comparison extends uniquely to all retracts. To check naturality it suffices to check free maps. Such a map K⊗X→K⊗Y is uniquely `(m_K⊗1_Y)(1_K⊗f)` for f:X→K⊗Y obtained by inserting η_K; H and H_d agree on this expression by the definition of r. Transformations agree precisely when their value at K is K-linear. This proves an equivalence of categories, including transformations, between module functors P→D and right K-objects in D. For a balanced module functor F:Mod^l(A)×Mod^l(B)→D, put d=F(A,B). Denote its outer constraint by `δ:F(M,NX)→F(M,N)⊙X` and its balance by β. Put `θ=δβ:F(MX,N)→F(M,N)⊙X`. Define `r_A=F(m_A,1_B) θ_{A,A,B}^{-1}:d⊙A→d`, `r_B=F(1_A,m_B) δ_{A,B,B}^{-1}:d⊙B→d`. [F1, F2, given, algebra]\n\n1.6 Naturality with the algebra multiplications proves their associative/unital action equations. Expanding the balance/outer compatibility square gives the precise exchange equation `r_A(r_B⊙1_A)=r_B(r_A⊙1_B)(1_d⊙c_{B,A}):d⊙B⊙A→d`. [F1, F2, given, algebra]\n\n1.7 For an explicit verification, replace θ by δβ, move each multiplication through δ by its naturality, and through β by naturality in its module arguments. The residual two routes move the free B slot past the free A slot. The balance-associativity equation for the chosen inverse left conversion replaces that move by c_{B,A}; its inverse crossing is cancelled by the inverse in θ^-1. The remaining maps are F(m_A,m_B) on both routes. Thus `r=r_B(r_A⊙1_B)` is a right K-action: its iterated action on dABAB first moves the middle B past A by c_{B,A}, then uses the two individual action equations, exactly giving r(1_d⊙m_K). This proves the action equation without assuming ordinary commuting actions. [F1, F2, given, algebra]\n\n1.8 The functor H_d b is canonically equivalent to F. On free pairs first use δ to identify $F(AX,BY)$ with $F(AX,B)\\odot Y$, and then θ on the first factor, to obtain `F(A⊗X,B⊗Y)≅d⊙X⊙Y`. Meanwhile the positive crossing `1_A⊗c_{B,X}⊗1_Y` is a K-linear isomorphism `K⊗X⊗Y→b(A⊗X,B⊗Y)`. [F1, F2, given, algebra]\n\n1.9 This free-pair isomorphism"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-79-step5-context.json"
  },
  {
    "id": "cex-self-adjoint-part-need-not-be-associative-subalgebra",
    "batch": "80",
    "source_kind": "concern",
    "reader_batch": "80",
    "before_guard_sha256": "549567183e2fef48e0b16e8b7a2ec311e33ae8c85cd45aa6f074e790e7d8f676",
    "concern_index": 0,
    "concern": {
      "id": "cex-self-adjoint-part-need-not-be-associative-subalgebra",
      "concern": "Facts & Assumptions F2 says: “It fixes real matrix units and interchanges E_{12} with E_{21}.” The first clause is false for conjugate transpose: E_{ab}*=E_{ba}, so the real matrix unit E_{12} is not fixed. This contradicts the next clause and proof step 2.1. The worked counterexample uses the correct transpose rule and remains valid, but the stated fact requires correction.",
      "severity": "would-be-fatal"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:04:25.937235+00:00",
      "reason": "Conjugate transpose sends Eab to Eba, so off-diagonal real matrix units are not individually fixed. E11 and E12+E21 remain self-adjoint but their product E12 is not; correcting F2 preserves the witness.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-algebra-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "fixes real matrix units",
          "proposed_replacement": "sends each real matrix unit $E_{ab}$ to $E_{ba}$; in particular, it fixes $E_{11}$ and $E_{22}$"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-80-step5-context.json"
  },
  {
    "id": "def-motivic-hall-algebra-of-a-finite-quiver",
    "batch": "54",
    "source_kind": "concern",
    "reader_batch": "54",
    "before_guard_sha256": "eb4040724707097ad846870ce2da432181b057008782bb6d7767504f6f57cc5c",
    "concern_index": 1,
    "concern": {
      "id": "def-motivic-hall-algebra-of-a-finite-quiver",
      "concern": "The Definition places the entire diagram inline: “The Hall correspondence is ~~~ tikzcd ... ~~~ Its arrows record ...”. These delimiters are embedded in a prose line rather than forming a fenced diagram block, so the intended correspondence diagram is not supplied in renderable fenced form.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:13:21.957310+00:00",
      "reason": "The Hall correspondence needs actual standalone tikzcd fences. Newlines repair rendering while preserving every ordered quotient/subobject/middle map and the exact finite-type convolution convention.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-voa-hall-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": " ~~~ tikzcd & \\mathfrak E_{\\mathbf d,\\mathbf e}(Q) \\ar[dl,\"(q,s)\"'] \\ar[dr,\"m\"] & \\\\ \\mathfrak M_{\\mathbf d}(Q)\\times\\mathfrak M_{\\mathbf e}(Q) && \\mathfrak M_{\\mathbf d+\\mathbf e}(Q) ~~~ ",
          "proposed_replacement": "\n\n~~~tikzcd\n& \\mathfrak E_{\\mathbf d,\\mathbf e}(Q) \\ar[dl,\"(q,s)\"'] \\ar[dr,\"m\"] & \\\\ \\mathfrak M_{\\mathbf d}(Q)\\times\\mathfrak M_{\\mathbf e}(Q) && \\mathfrak M_{\\mathbf d+\\mathbf e}(Q)\n~~~\n\n"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-54-step5-context.json"
  },
  {
    "id": "lem-green-coproduct-products-converge",
    "batch": "51",
    "source_kind": "concern",
    "reader_batch": "51",
    "before_guard_sha256": "7e615c66e3692b2a7d67eddc9da5b8c263af62d376c777e3e675d7717c44e30d",
    "concern_index": 1,
    "concern": {
      "id": "lem-green-coproduct-products-converge",
      "concern": "Step 3.1 concludes finiteness of the coefficient of '[S] ⊗ [R]', whereas the Statement, F2 and steps 1.1–2.1 fix and analyze '[R] ⊗ [S]'. The objects are arbitrary, so this does not invalidate convergence, but the final displayed order is reversed.",
      "severity": "presentation"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:13:21.957310+00:00",
      "reason": "The four short exact sequences in F2 consistently fix R in the quotient factor and S in the subobject factor. Finite Hom(S,M) and Hom(N,R) bound exactly the output coefficient R tensor S; only the final reversed pair label needs correction.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-voa-hall-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "S]\\otimes[R",
          "proposed_replacement": "R]\\otimes[S"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-51-step5-context.json"
  },
  {
    "id": "lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra",
    "batch": "51",
    "source_kind": "concern",
    "reader_batch": "51",
    "before_guard_sha256": "042ba8e4e0ae0706ef61c3500402cf882395d2ced1164668a0deceaf2bbcb26c",
    "concern_index": 0,
    "concern": {
      "id": "lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra",
      "concern": "The Statement and Given do not declare inherited Choice, although F3 invokes thm-integral-triangular-decomposition-for-the-lusztig-form for finite freeness and classical PBW ranks. That supplier's Statement explicitly begins 'Assume the Axiom of Choice'. The proof's PBW dimension conclusion therefore uses a hypothesis not carried into this item's stated assumptions. The same issue affects presentation of this lemma as an unconditional supplier.",
      "severity": "gap-a-reader-closes"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:07:46.408092+00:00",
      "reason": "Confirmed the original missing local authoring obligation. The proposed proof constructs the symmetric word form on the actual half by explicit skew-derivation cancellation and symmetry; contextual Serre matrices give generic quotient dimension bounded by classical dimension via specialization rank. Root independently checked both Serre derivative calculations, inverse-permutation symmetry, the rank inequality direction, Hall Gram kernel via positivity, and surjectivity after scalar extension. The actual integral subalgebra quotient is respected; no integral lattice freeness or choice assumption is used. Full original Statement remains unchanged.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-voa-hall-concerns/root-green-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "thm-integral-triangular-decomposition-for-the-lusztig-form\n- thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral\nproof_strategy: direct\nsources:\n  references:\n  - title: Olivier Schiffmann, Lectures on Hall Algebras\n    url: https://arxiv.org/pdf/math/0611617v2\n    locator: \"Sections 1.4–1.6 and 3.1–3.3; the local proof supplies the specialization descent.\"\n---\n\n## Statement\n\nLet $Q=p^a>1$, $\\nu=\\sqrt Q$, and $K=\\mathbb Q(\\nu)\\subset\\mathbb R$. Let $\\mathcal H$ be the real twisted Hall algebra of the finite-dimensional nilpotent representations of a finite loopless quiver over $\\mathbb F_Q$; an acyclic quiver needs no nilpotence restriction. Write $u_i=[S_i]$ for its vertex simples and $C_K$ for the $K$-algebra they generate. Let $A=\\mathbb Z[t,t^{-1}]$, and let $U_A^-$ be the generic divided-power integral half for the symmetric matrix $a_{ij}=2\\delta_{ij}-(\\text{number of arrows joining }i,j)$.\n\nThere is a surjective graded algebra map\n$$\\Psi:K\\otimes_{A,t\\mapsto\\nu^{-1}}U_A^-\\longrightarrow C_K,\\qquad F_i\\longmapsto u_i.$$\nIt preserves the homogeneous form $(Q-1)^{-\\operatorname{ht}\\alpha}B_{\\nu^{-1}}$. In particular $\\dim_K C_K[\\alpha]$ is at most the classical PBW rank. This conclusion requires only positive Green pairing and the generic word-form identity, and does not require specialized nondegeneracy or any numerical Serre-presentation comparison.\n\n## Facts & Assumptions\n\n**Given:** The indicated quiver Hall algebra, its simple classes and composition algebra, the integral half and the specialization parameter.\n\n[F1] The selected quiver category is a finite-field hereditary Hall category by [[lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary]]. Its simple Euler values symmetrize to the displayed Cartan matrix. The Green coproduct in [[def-green-hall-completion-and-coproduct]] makes each vertex simple primitive, since it has only the zero subobject and itself. The Green form is $([M],[N])_H=\\delta_{[M],[N]}/|\\operatorname{Aut}M|$, so its extension to finite real sums is positive definite. Its homogeneous adjunction is compatible with the primitive braided coproduct on words in vertex simples, with twist $\\nu^{(\\alpha,\\beta)}$, vacuum norm $1$ and simple norms $1/(Q-1)$ ([[prop-green-hall-pairing-is-nondegenerate]], [[thm-green-hall-coproduct-is-a-twisted-bialgebra-map]]). Here the primitive assertion refers to the root-graded braided Hall coproduct, before adjoining the torus.\n\n[F2] The normalized generic half form $B_t$ has primitive tensor twist $t^{-(\\alpha,\\beta)}$ and simple norms $1$. Its divided-power values have only Gaussian-factorial denominators, and all ordinary-word values are Laurent polynomials ([[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]]).\n\n[F3] $U_A^-$ is a graded algebra generated by divided powers $F_i^{(n)}=F_i^n/[n]_t!$, and its components are finite free of the classical PBW ranks ([[thm-integral-triangular-decomposition-for-the-lusztig-form]]).\n\n## Proof\n\n1.1 Let $\\mathcal T$ be the free $A$-algebra on formal symbols $X_{i,n}$ with $i\\in I,n\\ge1$, graded by $\\deg X_{i,n}=n\\alpha_i$. Send $X_{i,n}$ to $F_i^{(n)}$ in the generic half, and denote its image algebra $U_A^-$ by [F3]. Define a second map on $\\mathcal T$ by specializing $t\\mapsto\\nu^{-1}$ and sending $X_{i,n}$ to $u_i^n/[n]_{\\nu^{-1}}!$ in $C_K$. All denominators are nonzero because $\\nu>1$. The latter map has image $C_K$, since $X_{i,1}$ maps to $u_i$. [given, F3, algebra]\n\n2.1 For homogeneous $P,R\\in\\mathcal T$ of degree $\\alpha$, the Hall pairing of their second images is $(\\Phi(P),\\Phi(R))_H=(Q-1)^{-\\operatorname{ht}\\alpha}\\left.B_t(P(F),R(F))\\right|_{t=\\nu^{-1}}$. Indeed first take ordinary words: both sides are determined by the same primitive coproduct and tensor twist, the same simple pairings and the vacuum value, by peeling a first letter through the adjunction. The twists coincide because $(\\nu^{-1})^{-(\\alpha,\\beta)}=\\nu^{(\\alpha,\\beta)}$, and the height factor changes each generator norm from $1$ to $1/(Q-1)$. The formula then extends to divided words by their scalar denominators and to $A$-linear combinations by bilinearity and evaluation of coefficients. All expressions are evaluable by [F2]. Unequal degrees pair to zero on both sides. [F1, F2, step 1.1, algebra]\n\n3.1 If $P$ belongs to the kernel of $\\mathcal T\\to U_A^-$ and is homogeneous, then $P(F)=0$ in the generic half. Therefore $B_t(P(F),P(F))=0$ as a rational function. Step 2.1 makes $(\\Phi(P),\\Phi(P))_H=0$, so positivity in [F1] gives $\\Phi(P)=0$. The kernel is graded, and applying this to its finitely many homogeneous components proves that the entire kernel is killed. Thus $\\Phi$ factors through an $A$-linear algebra map $U_A^-\\to C_K$ (with $A$ acting by the stated evaluation). The tensor universal property gives the asserted map $\\Psi$, which is surjective by step 1.1. This factorization used no nondegeneracy assertion and no finite-parameter Serre-presentation theorem. Formula 2.1 passes through the factorization and gives the stated isometry. Surjectivity and [F3] give the PBW upper bound. [F1, F3, step 1.1, step 2",
          "proposed_replacement": "lem-finite-serre-word-form-and-classical-rank-bound\n- def-lusztig-divided-power-integral-form\nproof_strategy: direct\nsources:\n  references:\n  - title: Olivier Schiffmann, Lectures on Hall Algebras\n    url: https://arxiv.org/pdf/math/0611617v2\n    locator: \"Sections 1.4–1.6 and 3.1–3.3; the local proof supplies the specialization descent.\"\n---\n\n## Statement\n\nLet $Q=p^a>1$, $\\nu=\\sqrt Q$, and $K=\\mathbb Q(\\nu)\\subset\\mathbb R$. Let $\\mathcal H$ be the real twisted Hall algebra of the finite-dimensional nilpotent representations of a finite loopless quiver over $\\mathbb F_Q$; an acyclic quiver needs no nilpotence restriction. Write $u_i=[S_i]$ for its vertex simples and $C_K$ for the $K$-algebra they generate. Let $A=\\mathbb Z[t,t^{-1}]$, and let $U_A^-$ be the generic divided-power integral half for the symmetric matrix $a_{ij}=2\\delta_{ij}-(\\text{number of arrows joining }i,j)$.\n\nThere is a surjective graded algebra map\n$$\\Psi:K\\otimes_{A,t\\mapsto\\nu^{-1}}U_A^-\\longrightarrow C_K,\\qquad F_i\\longmapsto u_i.$$\nIt preserves the homogeneous form $(Q-1)^{-\\operatorname{ht}\\alpha}B_{\\nu^{-1}}$. In particular $\\dim_K C_K[\\alpha]$ is at most the classical PBW rank. This conclusion requires only positive Green pairing and the generic word-form identity, and does not require specialized nondegeneracy or any numerical Serre-presentation comparison.\n\n## Facts & Assumptions\n\n**Given:** The indicated quiver Hall algebra, its simple classes and composition algebra, the integral half and the specialization parameter.\n\n[F1] The selected quiver category is a finite-field hereditary Hall category by [[lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary]]. Its simple Euler values symmetrize to the displayed Cartan matrix. The Green coproduct in [[def-green-hall-completion-and-coproduct]] makes each vertex simple primitive, since it has only the zero subobject and itself. The Green form is $([M],[N])_H=\\delta_{[M],[N]}/|\\operatorname{Aut}M|$, so its extension to finite real sums is positive definite. Its homogeneous adjunction is compatible with the primitive braided coproduct on words in vertex simples, with twist $\\nu^{(\\alpha,\\beta)}$, vacuum norm $1$ and simple norms $1/(Q-1)$ ([[prop-green-hall-pairing-is-nondegenerate]], [[thm-green-hall-coproduct-is-a-twisted-bialgebra-map]]). Here the primitive assertion refers to the root-graded braided Hall coproduct, before adjoining the torus.\n\n[F2] The actual generic symmetric half has the uniquely normalized homogeneous form $B_t$ defined by the matching-permutation formula on ordinary words. Its adjunction is primitive first-letter deletion with tensor twist $t^{-(\\alpha,\\beta)}$ and simple norms $1$. Ordinary-word values are Laurent polynomials; divided-power products have only finite products of symmetric quantum factorials as denominators. In each degree, the finite ordinary-word Gram matrix $G_\\alpha(t)$ satisfies $\\operatorname{rank}_{\\mathbb Q(c)}G_\\alpha(c)\\le p_\\alpha$ at every positive real $c$, where $p_\\alpha$ is the classical PBW rank. These assertions, including actual Serre-quotient descent, are proved in [[lem-finite-serre-word-form-and-classical-rank-bound]].\n\n[F3] The integral half $U_A^-$ is the actual $A$-subalgebra of the generic half generated by $F_i^{(n)}=F_i^n/[n]_t!$. This is its definition in [[def-lusztig-divided-power-integral-form]]. Quantum factorials have nonzero evaluations at $c=\\nu^{-1}>0$; their symmetric quantum-integer factors are positive sums $c^{n-1}+c^{n-3}+\\cdots+c^{1-n}$.\n\n## Proof\n\n1.1 Let $\\mathcal T$ be the free $A$-algebra on $X_{i,n}$, $i\\in I,n\\ge1$, with degree $n\\alpha_i$. The map $X_{i,n}\\mapsto F_i^{(n)}$ has image the actual integral half $U_A^-$. Define $\\Phi:\\mathcal T\\to C_K$ by coefficient evaluation $t\\mapsto c=\\nu^{-1}$ and $X_{i,n}\\mapsto u_i^n/[n]_c!$. The denominator evaluations are nonzero by [F3]. Its image includes every $u_i$, so its $K$-linear span is $C_K$. [given, F3, algebra]\n\n2.1 For ordinary words $w,z$ of degree $\\alpha$ and height $h$, the primitive Hall coproduct and Green adjunction evaluate their Hall pairing by deleting successive letters. Deleting a letter at position $r$ crosses the preceding letters that remain in the second tensor factor and contributes $\\nu^{\\sum_{s<r}a_{i,j_s}}$. Each generator pairing contributes $1/(Q-1)$. Thus repeated deletion gives exactly $(w(u),z(u))_H=(Q-1)^{-h}B_t(w(F),z(F))|_{t=c}$, since $c^{-a}=\\nu^a$. Equivalently both sides have the same first-letter recursion, vacuum value and generator norms after the height rescaling. By dividing by the evaluated factorials and taking finite linear combinations, for homogeneous $P,R\\in\\mathcal T$ one obtains $$ (\\Phi(P),\\Phi(R))_H=(Q-1)^{-\\operatorname{ht}\\alpha}B_t(P(F),R(F))|_{t=c}. $$ Every evaluation is legitimate by the actual form's localization bound in [F2]. Unequal degrees give zero on both sides. [F1, F2, F3, step 1.1, algebra]\n\n3.1 If homogeneous $P$ is in the actual kernel of $\\mathcal T\\to U_A^-$, then $P(F)=0$ as an element of the actual generic half. Since [F2] has constructed a well-defined bilinear form on that actual half, its norm $B_t(P(F),P(F))$ is the zero rational function. Step 2.1 and positive definiteness of the real Green form imply $\\Phi(P)=0$. The kernel is graded, so applying this to its finitely many homogeneous components kills every kernel element. The map $\\Phi$ consequently factors through an $A$-algebra map $U_A^-\\to C_K$, and extension of scalars gives an algebra map whose image contains $K$ and every $u_i$, hence the surjection $\\Psi:K\\otimes_{A,t\\mapsto c}U_A^-\\to C_K$ asserted in the Statement. The evaluated form on $U_A^-$ is $A$-balanced and induces a $K$-bilinear form on its scalar extension. Step 2.1 passes through the quotient and scalar extension, proving the stated form-preservation assertion, with the factor $(Q-1)^{-\\operatorname{ht}\\alpha}$. [F1, F2, F3, step 1.1, step 2.1, algebra]\n\n4.1 Fix $\\alpha$. The finite set of ordinary words $W_\\alpha$ spans $C_K[\\alpha]$, since $C_K$ is generated by the homogeneous simple classes. Let $E:K^{W_\\alpha}\\to C_K[\\alpha]$ be word evaluation. Its pullback Green Gram matrix is $(Q-1)^{-\\operatorname{ht}\\alpha}G_\\alpha(c)$ by step 2.1. The kernel of this matrix is exactly $\\ker E$: one inclusion is immediate; if $v$ is in the matrix kernel then $(E(v),E(v))_H=0$, and positivity in the real Hall space gives $E(v)=0$. All coefficients lie in the specified real field $K=\\mathbb Q(c)=\\mathbb Q(\\nu)$. Finite rank-nullity therefore gives $$\\dim_K C_K[\\alpha]=\\operatorname{rank}_K G_\\alpha(c)\\le p_\\alpha.$$ The final inequality is [F2]. This proves the dimension consequence without asserting freeness of $U_A^-[\\alpha]$, nondegeneracy of the generic or specialized form, or injectivity of any numerical Serre-presentation map. [F1, F2, step 2.1, step 3"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-51-step5-context.json"
  },
  {
    "id": "lem-state-field-reconstruction-from-local-generators",
    "batch": "48",
    "source_kind": "concern",
    "reader_batch": "48",
    "before_guard_sha256": "2e3a5f4b2fba1884ee3134724979d1b134d0eb7edf5338352d4be74c4430e7d3",
    "concern_index": 0,
    "concern": {
      "id": "lem-state-field-reconstruction-from-local-generators",
      "concern": "Step 1.1 proves that both mode sums are finite for fixed m,v and immediately concludes, “Thus every nth product of fields is again a field.” Finiteness establishes well-defined coefficients; lower truncation additionally requires their vanishing for sufficiently large m. This follows readily from the displayed formula: its first sum vanishes once m exceeds the cutoff for B on v, and its second sum involves only finitely many nonzero A_(j)v, on each of which B has a cutoff. That short argument is omitted.",
      "severity": "gap-a-reader-closes"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:13:21.957310+00:00",
      "reason": "Finite coefficient sums alone are insufficient for a field. For fixed n,v choose J with A_jv0 for j>=J, then finitely many B cutoffs b_j. Taking m>=b_v and m>=b_j-n+j kills both sums uniformly, including J0. This completes lower truncation without changing the reconstruction statement.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-voa-hall-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "Thus every $n$th product of fields",
          "proposed_replacement": "For lower truncation, fix $n,v$ and choose $J\\ge0$ with $A_{(j)}v=0$ for $j\\ge J$. Choose a cutoff $b_v$ with $B_{(r)}v=0$ for $r\\ge b_v$, and, for each of the finitely many $0\\le j<J$, a cutoff $b_j$ with $B_{(r)}A_{(j)}v=0$ for $r\\ge b_j$. If $m\\ge b_v$ and $m\\ge b_j-n+j$ for every $j<J$, both displayed sums vanish termwise. Such an $m$-threshold exists even when $J=0$, when the second condition is empty. Thus every $n$th product is vectorwise lower truncated and"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-48-step5-context.json"
  },
  {
    "id": "rem-preprojective-coha-and-nakajima-action-source-boundaries",
    "batch": "55",
    "source_kind": "concern",
    "reader_batch": "55",
    "before_guard_sha256": "f27047d40ffd9251b693669abff4e4a1cb58771f62fa41054859b3c9a76e4a33",
    "concern_index": 0,
    "concern": {
      "id": "rem-preprojective-coha-and-nakajima-action-source-boundaries",
      "concern": "The source report says: “It acts on the Borel–Moore homology of the Lagrangian core of the framed quiver variety and gives an integrable highest-weight representation with highest weight w (Theorem 17 of the review...)”. The cited theorem concerns the direct sum of TOP homology groups H_d(V,W)(L(V,W)), not unqualified full Borel–Moore homology. See Nakajima, https://arxiv.org/pdf/1611.10000v1, §4.5, Theorem 17, printed p. 16; the preceding operator definitions also use those top groups. The distinction is substantive: for the one-vertex no-arrow quiver with framing dimension 2, Example 10 gives L(v,2)=Gr(v,2). Full homology over v=0,1,2 has weight multiplicities 1,2,1 and total dimension 4, whereas the highest-weight-2 sl2 representation has multiplicities 1,1,1 and dimension 3. The source-reported highest-weight assertion needs the top-homology qualification.",
      "severity": "would-be-fatal"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:13:21.957310+00:00",
      "reason": "The unqualified full-homology highest-weight report is false: at A1 framing2, full core homology gives multiplicities1,2,1 while top groups give1,1,1. The actual retained external-source review is attributed to the scientific owner; root read the entire proposed source report. Qualify precisely top-degree H_d with d complex dimension of ambient quiver variety, preserving all separate general CoHA and narrower Yangian scope.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-kept-voa-hall-concerns/root-focused-review.json",
      "proposed_edits": [
        {
          "source_excerpt": "Borel–Moore homology of the Lagrangian core of the framed\nquiver variety and gives an integrable highest-weight representation with\nhighest weight ",
          "proposed_replacement": "direct sum of the top-degree homology groups\n$\\bigoplus_{\\mathbf v}H_{d(\\mathbf v,\\mathbf w)}(\\mathfrak L(\\mathbf v,\\mathbf w);\\mathbb C)$\nof the Lagrangian cores, where $\\mathfrak L(\\mathbf v,\\mathbf w)$ denotes\nthe Lagrangian core and\n$d(\\mathbf v,\\mathbf w)=\\dim_{\\mathbb C}\\mathfrak M(\\mathbf v,\\mathbf w)$,\nand gives an integrable highest-weight representation with highest weight\n"
        }
      ]
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-55-step5-context.json"
  }
]. Review the bound original digest and individual owner evidence; repair confirmed presentation defects as well as mathematical defects. Return ordinary reviews, with no adjudication decision for these concerns. Only actual Statement/Definition changes propagate consumer examinations.

Owner-confirmed findings from original native initial adjudication, assigned for current review and smallest necessary repair:
[
  {
    "id": "def-it-two-user-discrete-memoryless-mac-code",
    "batch": "18",
    "unit": "18",
    "route": "frontier-owner",
    "current_guard_sha256": "0527989bc379db559ed978c42afc405b791dd3f9dd5b734a9f43df1e85a96989",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:21:20.503133+00:00",
      "reason": "With all channel alphabets singleton, n=0 and message sizes1, the unique encoders/decoder and error-zero law exist but R_j=(ln1)/0 is undefined. Requiring integer n>=1 excludes precisely this undefined rate normalization. Positive message sizes are necessary for uniform laws and allow singleton/zero-rate messages. The proposed finite-rate argument, independent messages, separate encoders, average joint error and growing-length capacity limit are sound and retain all valid operational scope. This is a separate root classification for work admission, not an invented native decision or original severity.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-actual-work-admission-requests/generated/root-completion.CONFIRMED.json",
      "full_current_source_read": true,
      "source_raw_sha256": "c126434a4e78d9035be452cac9445f9042c66686d1b3057cb394d9fc4eb04977",
      "proposed_edits": [
        {
          "source_excerpt": "For a DM-MAC as in [[def-it-two-user-discrete-memoryless-mac]], a length-$n$ no-feedback code consists of independent uniform private messages $M_j\\in[M_j]$, separate deterministic message-only encoders $f_j:[M_j]\\to\\mathcal X_j^n$, and one joint decoder $g:\\mathcal Y^n\\to[M_1]\\times[M_2]$. The average joint error is $\\Pr[g(Y^n)\\ne(M_1,M_2)]$; $R_j=n^{-1}\\ln M_j$ nats/use. A pair is achievable if a sequence has error tending to zero and limiting lower rates at least the pair; the capacity region is the closure. In particular, independent messages and separate encoders give $X_{1i}\\perp X_{2i}$ at every coordinate.\n\n## Facts & Assumptions\n\n**Given:** A DM-MAC and two finite message sets.\n\n[F1] [[def-it-two-user-discrete-memoryless-mac]]: the conditional block law is $\\prod_iW(y_i\\mid x_{1i},x_{2i})$.\n\n## Proof\n\n1.1 The independent uniform messages and the two deterministic maps induce separate input words; combining these with [F1] defines a probability law on the finite set of message, input and output tuples. [given, F1, algebra]\n\n2.1 Since each input coordinate is a function only of its own independent message, $X_{1i}$ and $X_{2i}$ are independent. The decoder event and the rate convention are finite and well-defined. [given, step 1.1, algebra] ∎",
          "proposed_replacement": "For a DM-MAC as in [[def-it-two-user-discrete-memoryless-mac]], fix integers $n\\ge1$ and $M_1,M_2\\ge1$, and write $[m]=\\{1,\\ldots,m\\}$. A length-$n$ no-feedback code consists of independent uniform private messages $\\mathsf M_j\\in[M_j]$, separate deterministic message-only encoders $f_j:[M_j]\\to\\mathcal X_j^n$, and one joint decoder $g:\\mathcal Y^n\\to[M_1]\\times[M_2]$. The average joint error is $\\Pr[g(Y^n)\\ne(\\mathsf M_1,\\mathsf M_2)]$; $R_j=n^{-1}\\ln M_j$ nats/use. A pair is achievable if a sequence with $n\\to\\infty$ has error tending to zero and limiting lower rates at least the pair; the capacity region is the closure. In particular, independent messages and separate encoders give $X_{1i}\\perp X_{2i}$ at every coordinate $1\\le i\\le n$.\n\n## Facts & Assumptions\n\n**Given:** A DM-MAC, an integer $n\\ge1$, and two finite nonempty message sets of sizes $M_1,M_2\\ge1$.\n\n[F1] [[def-it-two-user-discrete-memoryless-mac]]: the conditional block law is $\\prod_iW(y_i\\mid x_{1i},x_{2i})$.\n\n## Proof\n\n1.1 The independent uniform messages and the two deterministic maps induce separate input words; combining these with [F1] defines a probability law on the finite set of message, input and output tuples. [given, F1, algebra]\n\n2.1 Since each input coordinate is a function only of its own independent message, $X_{1i}$ and $X_{2i}$ are independent for $1\\le i\\le n$. Because $n\\ge1$ and $M_j\\ge1$, each rate $n^{-1}\\ln M_j$ is a finite nonnegative real number. The decoder event belongs to the finite probability space in step 1.1, so its probability is well-defined. [given, step 1.1, algebra] ∎"
        }
      ],
      "classification": {
        "severity": "fatal",
        "defect_type": "logic",
        "reason": "With all channel alphabets singleton, n=0 and message sizes1, the unique encoders/decoder and error-zero law exist but R_j=(ln1)/0 is undefined. Requiring integer n>=1 excludes precisely this undefined rate normalization. Positive message sizes are necessary for uniform laws and allow singleton/zero-rate messages. The proposed finite-rate argument, independent messages, separate encoders, average joint error and growing-length capacity limit are sound and retain all valid operational scope. This is a separate root classification for work admission, not an invented native decision or original severity."
      },
      "open_finding_correspondence": {
        "confirmed_same_finding": true,
        "report_excerpt": "Outside assigned lane: this sibling defines R_j=n^{-1} ln M_j for a length-n code without requiring n>=1. At n=0 the separate maps to singleton empty words and a decoder exist, but the rate formula is undefined.",
        "output_excerpt": "The unassigned no-feedback Definition also states R_j=n^{-1} ln M_j without requiring n>=1. Empty-word encoding and decoding data exist at n=0, but the rates are undefined.",
        "reason": "Root read both exact individual detailed and immutable final structured objects. They identify the same def-it-two-user-discrete-memoryless-mac-code coordinate/rate/defining-interface defect in the unchanged full current source; literal report and output excerpts are preserved exactly."
      }
    },
    "source_read": {
      "mode": "owner-current-source-confirmation",
      "native_full_read_adopted": false,
      "before_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-actual-work-admission-requests/generated/before/def-it-two-user-discrete-memoryless-mac-code.md",
      "before_raw_sha256": "c126434a4e78d9035be452cac9445f9042c66686d1b3057cb394d9fc4eb04977",
      "source_excerpt": "For a DM-MAC as in [[def-it-two-user-discrete-memoryless-mac]], a length-$n$ no-feedback code consists of independent un"
    },
    "origin_kind": "native-open-finding",
    "open_finding_index": 1,
    "finding": {
      "ledger": "canonical-defect-ledger",
      "action": "record-open-finding",
      "id": "def-it-two-user-discrete-memoryless-mac-code",
      "route": "frontier-owner",
      "locus": "items/def-it-two-user-discrete-memoryless-mac-code.md#Definition",
      "finding": "Outside assigned lane: this sibling defines R_j=n^{-1} ln M_j for a length-n code without requiring n>=1. At n=0 the separate maps to singleton empty words and a decoder exist, but the rate formula is undefined.",
      "minimality": "Owner should require positive integer blocklength and nonempty message sets, then check its direct consumers under the ordinary interface-change rule. No outside-lane item was edited.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    },
    "output_finding_index": 1,
    "output_finding": {
      "ledger": "canonical-defect-ledger",
      "action": "record-open-finding",
      "id": "def-it-two-user-discrete-memoryless-mac-code",
      "route": "frontier-owner",
      "finding": "The unassigned no-feedback Definition also states R_j=n^{-1} ln M_j without requiring n>=1. Empty-word encoding and decoding data exist at n=0, but the rates are undefined.",
      "minimality": "Owner should state positive integer blocklength, check message-set nonemptiness and examine direct consumers. This item was neither edited nor adjudicated.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "id": "def-finite-alphabet-conditional-entropy-given-observation",
    "batch": "5",
    "unit": "5",
    "route": "frontier-owner",
    "current_guard_sha256": "d0b3a549d895363b125aebc6621917f6d2b89fc52955de5ae237531108e6bf37",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T06:21:20.503133+00:00",
      "reason": "A supplied conditional kernel does not require a kernel-existence theorem. The finite singleton family determines finite laws, and actual conditional-law supplier proves version uniqueness using supplied determining families without AC. Finite union of canonical discrepancy sets proves the entropy integrands agree almost everywhere. Remove only unused existence/general-uniqueness/choice suppliers; preserve all observation scope.",
      "evidence_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-actual-work-admission-requests/generated/root-completion.CONFIRMED.json",
      "full_current_source_read": true,
      "source_raw_sha256": "2a4d67bf2dea2687058a2e0b2a443a2528ea86c4532fc57d7c1385274039f9e4",
      "proposed_edits": [
        {
          "source_excerpt": "--\nid: def-finite-alphabet-conditional-entropy-given-observation\nkind: definition\ntitle: \"Finite-alphabet conditional entropy given an observation\"\nstatus: draft\norigin: pipeline\npipeline_run: non-ml-math-remaining-81-2026-10-18\ndependency_level: 2\ndeps:\n  - def-it-finite-conditional-entropy\n  - cor-expectation-agrees-with-the-finite-weighted-sum\n  - def-kullback-leibler-divergence\n  - def-qa-35-finite-probability-entropy-and-stochastic-matrices\n  - def-conditional-law-given-a-random-element\n  - def-regular-conditional-distribution\n  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets\n  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable\n  - lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions\n  - thm-measurability-of-integration-against-a-kernel\n  - def-standard-borel-space\n  - def-axiom-of-choice\naxiom_use: \"AC supplies the regular conditional law of the finite-valued variable given the standard-Borel observation and the simultaneous almost-everywhere uniqueness used for version independence; it is also an explicit hypothesis of the cited general KL interface used for continuity and boundedness of t ln t.\"\nprovenance:\n  statement: literature-derived\n  proof: not-applicable\nverification:\n  precheck: n/a\nsources:\n  references:\n    - title: \"Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 2 §2.5 and Chapter 5 §5.5\"\n      url: \"https://ee-www.stanford.edu/~gray/it.pdf\"\n    - title: \"John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1\"\n      url: \"https://web.stanford.edu/class/stats311/lecture-notes.pdf\"\n---\n\n## Definition\n\nLet $X$ take values in a finite nonempty set $S$ and let $Y$ take values in a standard-Borel space $(T,\\mathcal T)$. Let $K:T\\rightsquigarrow S$ be a conditional law of $X$ given $Y$, so that $K(Y,\\cdot)$ is a regular conditional distribution given $\\sigma(Y)$. Define\n$$H(X\\mid Y):=\\int_T\\left(-\\sum_{x\\in S}K(y,\\{x\\})\\ln K(y,\\{x\\})\\right)P_Y(dy),$$\nwith $0\\ln0:=0$ and natural logarithms. The finite entropy convention is that of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. Each evaluation $y\\mapsto K(y,\\{x\\})$ is measurable. The explicit argument in [[def-kullback-leibler-divergence]] proves $-t\\ln t$ extends continuously to zero and is bounded by $1/e$ on $[0,1]$; hence the finite entropy integrand is measurable and bounded by $|S|/e$. The result is independent of the supplied version by simultaneous almost-everywhere uniqueness of standard-Borel regular conditional laws.",
          "proposed_replacement": "--\nid: def-finite-alphabet-conditional-entropy-given-observation\nkind: definition\ntitle: \"Finite-alphabet conditional entropy given an observation\"\nstatus: draft\norigin: pipeline\npipeline_run: non-ml-math-remaining-81-2026-10-18\ndependency_level: 2\ndeps:\n  - def-it-finite-conditional-entropy\n  - cor-expectation-agrees-with-the-finite-weighted-sum\n  - def-kullback-leibler-divergence\n  - def-qa-35-finite-probability-entropy-and-stochastic-matrices\n  - def-conditional-law-given-a-random-element\n  - def-regular-conditional-distribution\n  - thm-measurability-of-integration-against-a-kernel\n  - def-standard-borel-space\naxiom_use: \"No choice axiom is used for the supplied-kernel interface. Finite singleton evaluations give a supplied finite determining family and version independence. The cited KL text is used only for its elementary real-function t ln t calculation, not for existence of a Radon–Nikodym density. No conditional-kernel existence assertion is made.\"\nprovenance:\n  statement: ai-altered\n  proof: not-applicable\nverification:\n  precheck: n/a\nsources:\n  references:\n    - title: \"Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 2 §2.5 and Chapter 5 §5.5\"\n      url: \"https://ee-www.stanford.edu/~gray/it.pdf\"\n    - title: \"John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1\"\n      url: \"https://web.stanford.edu/class/stats311/lecture-notes.pdf\"\n---\n\n## Definition\n\nLet $X$ take values in a finite nonempty set $S$ and let $Y$ take values in a standard-Borel space $(T,\\mathcal T)$. Let $K:T\\rightsquigarrow S$ be a conditional law of $X$ given $Y$, so that $K(Y,\\cdot)$ is a regular conditional distribution given $\\sigma(Y)$. Define\n$$H(X\\mid Y):=\\int_T\\left(-\\sum_{x\\in S}K(y,\\{x\\})\\ln K(y,\\{x\\})\\right)P_Y(dy),$$\nwith $0\\ln0:=0$ and natural logarithms. The finite entropy convention is that of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. Each evaluation $y\\mapsto K(y,\\{x\\})$ is measurable. The explicit argument in [[def-kullback-leibler-divergence]] proves $-t\\ln t$ extends continuously to zero and is bounded by $1/e$ on $[0,1]$; hence the finite entropy integrand is measurable and bounded by $|S|/e$. The result is independent of the supplied version without a choice axiom: the finite supplied singleton family $\\{\\{x\\}:x\\in S\\}$ determines probability measures on $S$ by finite additivity. Apply the supplied-determining-family argument in [[def-conditional-law-given-a-random-element]] to two supplied kernels $K,L$. Outside the finite union of their singleton-evaluation discrepancy sets, which is a measurable $P_Y$-null set, all probabilities $K(y,\\{x\\})$ and $L(y,\\{x\\})$ agree. Their entropy integrands therefore agree almost everywhere, proving equality of the integrals. This uses supplied kernels, not a theorem asserting their existence."
        }
      ],
      "open_finding_correspondence": {
        "confirmed_same_finding": true,
        "report_excerpt": "Definition asserts version independence using simultaneous standard-Borel conditional-law uniqueness without stating AC; its uniqueness supplier explicitly assumes AC.",
        "output_excerpt": "The assigned report records exact unassigned frontier uses needing explicit AC hypotheses or the existing Lebesgue complete-measure dependency. No unassigned items were edited.",
        "reason": "Root read the exact individual detailed report object and the immutable plural final object, whose actual repair_notes.report references that detailed report. The plural summary contains no individual item ID; the detailed object supplies this item identity. The preserved literal excerpts and full actual defining source confirm their correspondence without inventing an individual final-output finding."
      },
      "classification": {
        "severity": "nonfatal",
        "defect_type": "logic",
        "reason": "A supplied conditional kernel does not require a kernel-existence theorem. The finite singleton family determines finite laws, and actual conditional-law supplier proves version uniqueness using supplied determining families without AC. Finite union of canonical discrepancy sets proves the entropy integrands agree almost everywhere. Remove only unused existence/general-uniqueness/choice suppliers; preserve all observation scope."
      }
    },
    "source_read": {
      "mode": "owner-current-source-confirmation",
      "native_full_read_adopted": false,
      "before_file": "research/non-ml-math-remaining-81-2026-10-18-owner-step5-actual-work-admission-requests/generated/before/def-finite-alphabet-conditional-entropy-given-observation.md",
      "before_raw_sha256": "2a4d67bf2dea2687058a2e0b2a443a2528ea86c4532fc57d7c1385274039f9e4",
      "source_excerpt": "Let $X$ take values in a finite nonempty set $S$ and let $Y$ take values in a standard-Borel space $(T,\\mathcal T)$. Let"
    },
    "origin_kind": "native-open-finding",
    "open_finding_index": 14,
    "finding": {
      "ledger": "canonical-defect-ledger",
      "path": "research/defect-ledger.jsonl",
      "action": "record-open-finding",
      "id": "def-finite-alphabet-conditional-entropy-given-observation",
      "status": "open",
      "route": "frontier-owner",
      "affected_use": "Definition asserts version independence using simultaneous standard-Borel conditional-law uniqueness without stating AC; its uniqueness supplier explicitly assumes AC.",
      "reason": "Outside assigned item scope. The local explicit-choice convention requires the actual inherited AC assumption in this defining interface; the minimal repair is to expose it, preserving the entire definition, and examine direct consumers only if that Definition changes.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    },
    "output_finding_index": 1,
    "output_finding": {
      "ledger": "canonical-defect-ledger",
      "action": "record-open-findings",
      "route": "frontier-owner",
      "reason": "The assigned report records exact unassigned frontier uses needing explicit AC hypotheses or the existing Lebesgue complete-measure dependency. No unassigned items were edited."
    },
    "finding_shape": "plural-report-reference"
  }
]. Read the original native report/finding and bound individual root instructions. These are explicit work requests, not Step-4 reader concerns, judge rejections, new adjudication decisions, or current acceptance. Return ordinary reviews with no adjudication decision. Only actual Statement/Definition changes propagate consumer examination.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"impact-initial",round:1,unit:"3",input_sha256:"e780a383755314048be6b4034b5c067a12e210a9a8ce47abb208e252a2eba2d3",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.



Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-finite-block-information-and-entropy",
    "severity": "nonfatal",
    "reason": "The conditional-entropy formula used H_2 on a finite probability law without introducing that notation. Added H_2(p)=H_nat(p)/ln 2 and H_2(U)=H_2(P_U) in Definition and matching step 2.1; finite sums, zero-mass conventions and all rates are preserved."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ams-source-and-stationary-mean",
    "severity": "nonfatal",
    "reason": "The telescoping proof establishes stationarity for every measurable alphabet, but its cited definition covered only finite alphabets. Preserved the unrestricted scope by specifying the measurable product space and citing the general measure-preserving and ergodicity definitions; the finite-alphabet convention remains explicitly compatible."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-infinite-past-conditional-block-information-rate",
    "severity": "nonfatal",
    "reason": "The alleged missing mean identity is already proved in the supplier's Proof 5.1–6.1, so there is no mathematical gap. Review nevertheless confirmed a nonfatal source-citation defect: this item's Chapter 5/Theorem 6 thesis locator is wrong. Corrected it to Chapter 3, Theorem/Corollary 3.1 after inspecting the source, and made F1's precise supplier proof-step citation explicit."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-triangular-information-averages",
    "outcome": "false_positive",
    "reason": "The abstract hypotheses are intentionally stronger in scope than the title's finite-past application. Tail envelopes U_K decrease to zero in L1; Birkhoff and finite-measure L1 convergence preserve their integrals, so their decreasing limits vanish. The triangular error therefore tends to zero almost surely and in L1 without any information-specific hypothesis."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-general-process-information-rate",
    "outcome": "false_positive",
    "reason": "H_n is explicitly taken 'as in' the finite-block bit-entropy definition, and the owning page explicitly fixes all entropy rates in bits. Thus its uniform-reference KL identity is -H_n+log_2 N as written. Omitting the superscript locally does not change the defined unit. Updated only its contract quotation of the clarified supplier Definition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-stationary-expected-prefix-code-rate",
    "outcome": "false_positive",
    "reason": "The actual F3 supplier thm-stationary-entropy-rate-limit uses finite-block entropy from the bit definition, and its proof 3.1 identifies h with bit conditional entropies. F2 also uses bits, so H_n/n <= L_n*/n < H_n/n+1/n converges to h as claimed, including singleton support. Updated only its contract quotation of the clarified bit-entropy supplier."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cor-smb-limit-is-conditional-entropy-under-ac",
    "outcome": "false_positive",
    "reason": "F1's actual supplier explicitly records g_infinity in L1 in its Facts F1 and uses that integrability in Proof 2.1; its proved envelope supplier 5.1 establishes it directly. The corollary therefore applies finite-measure Birkhoff identification to a valid L1 input. AC, strict invariant measurability, integrability and all eventwise integral tests match the conditional-expectation definition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cor-fixed-rate-lossless-coding-stationary-ergodic",
    "outcome": "false_positive",
    "reason": "The cited AEP lemma's actual Proof 3.1 already proves the strong converse: for epsilon>0 with R+epsilon<h, every success set has at most 2^floor(nR) words, so success <= P(I_n/n <= R+epsilon)+2^(-n epsilon), tending to zero. Its Statement's weaker summary does not invalidate this proved conclusion. Ergodic SMB and dominated convergence supply exactly the required probability AEP; equality R=h remains unclaimed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cor-fixed-rate-lossless-coding-ams-ergodic",
    "outcome": "false_positive",
    "reason": "The AEP coding supplier's Proof 3.1 explicitly proves success tends to zero below h using the success-set cardinality and the information threshold R+epsilon<h. The AMS AEP supplies convergence under P itself, and dominated convergence gives its in-probability form. Thus both strict-rate conclusions follow, with AC inherited explicitly and no stationarity imposed on P."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-affected-published-consumers",
    "supplier_ids": [
      "def-finite-block-information-and-entropy",
      "def-ams-source-and-stationary-mean"
    ],
    "reason": "The run-aware dependency/reference inventory found sixteen distinct direct item consumers of the two changed Definitions; every consumer is in the frozen draft frontier and none is published. No published repair or maintenance subject is proposed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-rate-distortion-convexity-and-monotonicity",
    "severity": "nonfatal",
    "locus": "Proof step 2.3",
    "reason": "Step 2.3 left the choice-free selection rule unstated; replaced the minimizing sequence by a compact nested-set argument without changing the Statement.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-it-gaussian-squared-error-rate-distortion",
    "severity": "nonfatal",
    "locus": "Proof step 1.3",
    "reason": "Step 1.3 used an unstated positive starting index; h=1/(n+1), n>=0 now defines every event of the decreasing sequence.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-it-finite-alphabet-blahut-arimoto",
    "severity": "nonfatal",
    "locus": "Definition outer stopping loop",
    "reason": "The separate local certified-gap termination theorem already proves gamma_t tends to one and the interval procedure returns; the algorithm requires no edit.",
    "status": "false-positive"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-it-binary-hamming-rate-distortion-curve",
    "severity": "nonfatal",
    "locus": "Facts F1 and Proof step 1.1",
    "reason": "F1 overstated its supplier interface and the range of the backward mass formula; the needed finite construction and information calculation are now proved locally.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-existing-step4-finding",
    "id": "ex-it-gaussian-distortion-waterline",
    "status": "open",
    "reason": "Verified the existing Step-4 finding against current artifacts; route to its actual owner without editing or adjudicating an unassigned item.",
    "route": "Original frontier owner for ex-it-gaussian-distortion-waterline; it is draft, not published maintenance.",
    "origin": "research/non-ml-math-remaining-81-2026-10-18-batch-11-step5-context.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "items/ex-it-gaussian-distortion-waterline.md",
    "affected_use": "Step 2.1 claims that F2 gives mutual information equal to the water-filling rate for the displayed reconstruction, but the Statement requires U,V independent only of each other, not independent of X2.",
    "invalidated_claim": "Take independent standard normals Z1,Z2, X1=2Z1, X2=Z2, a=sqrt(5/2), b=sqrt(3/2), U=(a Z1+b Z2)/2, V=(b Z1-a Z2)/2. The transform is orthogonal, U,V are independent standard normals and X1=aU+bV, yet Y1=aU=a^2 X1/4+ab X2/2 is a nondegenerate deterministic function of the source vector. The joint source/reconstruction law is graph-supported while the corresponding product law gives that graph zero mass, so its mutual information is infinite.",
    "minimality": "The owning frontier reviewer should require X2 independent of (U,V), with X1 formed from U,V as displayed. This repairs the actual attainment assertion; it changes the Statement and requires ordinary direct-consumer examination. Route through the original Step-4 concern owner, not this assignment.",
    "source_observation": "Existing Step-4 batch-11 concern, verified against current Statement and Proof step 2.1; no edit or adjudication of this unassigned item."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-existing-step4-finding",
    "id": "point-to-point-source-channel-separation",
    "status": "open",
    "reason": "Verified the existing Step-4 finding against current artifacts; route to its actual owner without editing or adjudicating an unassigned item.",
    "route": "Owning page/batch metadata lane; no edit made.",
    "origin": "research/non-ml-math-remaining-81-2026-10-18-batch-11-step5-context.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "library/information-theory/point-to-point-source-channel-separation.md",
    "affected_use": "The page lists no requires field although thm-it-point-to-point-lossy-source-channel-separation imports finite information RDF, minimum attainment, operational coding and right-continuity from rate-distortion-and-lossy-source-coding.",
    "invalidated_claim": "The page prerequisite metadata omits an actual prerequisite page; the examined mathematical citations preserve the supplier claims.",
    "minimality": "The owning page lane should add rate-distortion-and-lossy-source-coding to requires; no mathematical statement repair is implied.",
    "source_observation": "Existing Step-4 alert, verified read-only against current page frontmatter and consumer Facts F1,F2,F5."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-density-channel-threshold-random-coding-bound",
    "locus": "Proof 1.1 and 1.2: missing score on zero-density competitor pairs",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "before_sha256": "dc3ddbc744630391ca9bb0bb93481344eeda7a73ba8fb33dad96fa9c6107f193",
    "post_sha256": "425de2a09c6ea64ec046d117b716214e3d7d2bbc4aceeaefb06a9c9a81c87f50",
    "reason": "The original decoder evaluates a logarithm at zero for mismatched pairs, e.g. independent competitor/output in the binary identity channel. Proof 1.1 now defines a measurable extended score, assigning minus infinity to zero likelihood and outside the output probability-one support. Proof 1.2 integrates only over that support and obtains E L <= 1; Markov and the finite union bound retain exactly the claimed error estimate. The Statement and all hypotheses remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-jensen-for-integrable-cost-random-variable",
    "locus": "Facts F1 and Proof 1.2: real supremum is explicitly supplied by thm-dedekind-complete",
    "outcome": "false_positive",
    "before_sha256": "41ced4dfdf01cfa129eb5369d62f23267a4c78c98759083478f9aa37ede6fa62",
    "post_sha256": "41ced4dfdf01cfa129eb5369d62f23267a4c78c98759083478f9aa37ede6fa62",
    "reason": "The cited thm-dedekind-complete explicitly states that the Dedekind construction of R is order-complete, and its proof concludes that R has the least-upper-bound property. Real numbers here are Dedekind cuts, so its bounded-set assertion applies directly to the nonempty right-secant slope set. Ordered-field structure is already part of that supplier context. The endpoint proof forces U=a almost surely; for E U>a, the supremum of right slopes is bounded by every left slope and gives the asserted integrable affine majorant.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-standard-normal-fourth-moment",
    "locus": "Proof 3.1: independence factorization applied also to i=j",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "before_sha256": "cae71ff104dbe72e6ba19bfa01138e8932de53912bfd6d76aee76457d882715a",
    "post_sha256": "60db5166f1000f5c03108d2c059eb3ec05c1b99bda721d1f4fad22ba344a2e9e",
    "reason": "The unqualified cross-moment identity in original step 3.1 is false for i=j: a nondegenerate coordinate has E G_i^4=3 sigma_i^4, not sigma_i^4. The repaired step restricts factorization to distinct independent coordinates and uses the computed fourth moment on the diagonal, including sigma=0 and the empty combination. Tail comparison, finite-interval integration by parts, vanishing boundary terms and scaling establish the scalar moments first. The Statement and AC assumption are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-countable-dmc-zero-cost-information-capacity",
    "locus": "Definition: N conflicted with the library zero-inclusive convention",
    "outcome": "confirmed_nonfatal",
    "before_sha256": "b39fab2f8ce3fe7885b61da5b35d9e800ccde6e0b6b14b111df83ac9e92949f1",
    "post_sha256": "08d286e47a44a6b3f9bfc6d5d35eb164b4b870486c558cb4ed00ddcd3f615350",
    "reason": "The explicit set {1,2,...} and all sums already specify positive input labels, so there is no missing row under that local convention. However writing this set as N conflicts with def-natural-numbers, where 0 belongs to N. Replacing N by N_{>0} removes this nonfatal notation conflict without changing the model, cost, information functional or supremum. Bounded finite-output entropies ensure the conditional series converges. The companion example supplies all positive rows and is unchanged by the clarification.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-countable-input-channel-finite-capacity-supremum-not-attained",
    "locus": "Facts F3: entropy endpoint convention attributed to positive-domain log definition",
    "outcome": "confirmed_nonfatal",
    "before_sha256": "43e26c57af8820073d73f4070e4f8e273c66e54c8eaa50110690c0f0747b68fd",
    "post_sha256": "927bdecea078018d03577a8e024729526177470346b568dbf1384018a784dc5e",
    "reason": "F3 incorrectly attributed the entropy endpoint convention to def-natural-logarithm, which defines log only for positive arguments. The existing countable-channel definition and finite-simplex entropy lemma explicitly supply 0 ln 0 = 0; F3 now attributes it to F1/F2. Every positive input row has strictly positive binary entropy, so every probability sequence yields I<ln 2. The explicit equal mixture on labels 2k and 2k-1 has uniform output and information ln 2-h_2(1/(k+2)), tending to ln 2. Positive-label clarification of its supplier changes none of these uses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-parallel-awgn-cost-constrained-achievability",
    "locus": "Facts F6 and Proof 3.1: omitted exchangeability hypothesis, satisfied by IID ensemble",
    "outcome": "confirmed_nonfatal",
    "before_sha256": "5e8ec9c62c6b65523dc279a8d0aa92a016e3a22f79f460c83379591d6586514c",
    "post_sha256": "47dc396aca4693bae247f724b825c10238b115882fd3acd7f7aa3cfc3a2e254e",
    "reason": "F6 omitted the exchangeability hypothesis in the pruning supplier Statement. This is a nonfatal interface overstatement because the actual ensemble uses IID message codewords and therefore is exchangeable. F6 now states the hypothesis, and step 3.1 verifies it explicitly. Strict mean-power slack gives q_n <= Var(Q)/(n(P-mu)^2), Gaussian fourth moments justify that finite variance, and information-density convergence plus threshold decoding gives a_n -> 0. Pruning preserves asymptotic rate and enforces every retained codeword cost; orthogonal norm preservation transfers the code.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-finite-dmc-feedback-code",
    "locus": "Definition: missing positive integer blocklength for divisions by n",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "before_sha256": "b4497f8280e374069db9dc3d8c230513bf2ee130eae364d74ab93e6c99fe383c",
    "post_sha256": "039465c7bffefcb2e8c2ad7014df993db2b97abb78d0a4714ed156ec302668be",
    "reason": "The feedback-code definition introduced n without the positive blocklength condition carried by def-fixed-length-channel-code. Allowing n=0 makes its displayed expected average cost and rate undefined. It now explicitly requires an integer n>=1, preserving all causal-map, expected-cost and asymptotic-capacity clauses. Finite alphabets and finite letter costs make each positive-blocklength expectation finite. Its direct theorem consumer uses sums over t=1,...,n, a uniform index in [n], and Fano divided by n, all sound on this explicit domain.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-correlated-gaussian-noise-orthogonal-reduction",
    "locus": "Facts A1 and Verification 1.1: scalar Gaussian interface does not assert coordinate independence",
    "outcome": "confirmed_nonfatal",
    "before_sha256": "3575021d48a880aea88459f74aebeb12041eca78a703911ab1613a674f97e034",
    "post_sha256": "9e7d438f3058f52b0e0f32711aedb952232b814d5a97a9a9c93a3e5f426e4a20",
    "reason": "The scalar normal-law definition supplies AC and the one-dimensional Gaussian density, not independence of coordinates. A1 now states only that scalar interface. Step 1.1 explicitly obtains transformed independence from the diagonalization argument of F1, where F2 acts on the underlying independent standard-normal vector. Matrix multiplication verifies UKU^T=diag(1,4) and U^TU=I, so energy and code laws are preserved. At P=2 the water level is 3, allocating (2,0) and giving one half ln 3. The erroneous A1 attribution is nonfatal because the needed multivariate conclusion was already supplied by F1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "The only changed Statement/Definition sections are the two assigned draft definitions. Searches over current items and library pages found only draft direct item consumers: the countable-channel example and the DMC feedback-capacity theorem. Their mathematical uses remain sound; no potentially defective published consumer or outside-frontier consumer was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-gallager-input-maxima-attained",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "reason": "F4 overextended scalar continuity suppliers to a Euclidean simplex. Steps 1.2 and 2.1 now prove continuity by explicit norm estimates and finite epsilon-delta arguments. The claim, compactness interface and choice-free boundary are preserved.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-it-one-shot-decision-threshold-achievability",
    "reason": "The rejected additive-block-interface concern is not used by this proof: the Statement defines its own arbitrary-input block ratio, equivalently the single-use information density of the finite channel W^n on block alphabets. The first definition clause and stochasticity supplier suffice.",
    "status": "rejected-finding"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-it-berger-tung-lossless-slepian-wolf-special-case",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "F3 quoted a correct difference identity not stated by its named supplier. Replaced it with the actual symmetric identity and proved the diagonal conditional-entropy calculation from the existing definitions in step 2.1. No missing substantial prerequisite or false conclusion was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-it-two-user-discrete-memoryless-mac-feedback-code",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition and proof step 2.1",
    "finding": "No positive blocklength domain was stated, so the n=0 empty code has undefined rates despite the well-definedness assertion.",
    "repair": "Require integer n>=1 and M_j>=1; use these hypotheses explicitly to establish finite nonnegative rates. Specify encoder index range, empty history and growing blocklength in achievability.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-it-two-user-discrete-memoryless-mac-code",
    "route": "frontier-owner",
    "locus": "items/def-it-two-user-discrete-memoryless-mac-code.md#Definition",
    "finding": "Outside assigned lane: this sibling defines R_j=n^{-1} ln M_j for a length-n code without requiring n>=1. At n=0 the separate maps to singleton empty words and a decoder exist, but the rate formula is undefined.",
    "minimality": "Owner should require positive integer blocklength and nonempty message sets, then check its direct consumers under the ordinary interface-change rule. No outside-lane item was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-real-gaussian-multicast-relay-network",
    "severity": "nonfatal",
    "location": "definition",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/1"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-real-gaussian-multiple-access-random-coding-region",
    "severity": "fatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "Confirmed fatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/4",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-complex-gaussian-interference-entropy-estimates",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/5"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-finite-relay-cut-set-outer-bound",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/6"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-finite-full-feedback-relay-capacity",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/8"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-real-gaussian-strong-interference-region",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/10"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap",
    "severity": "fatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "Confirmed fatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/11",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-real-gaussian-relay-fixed-quantizer-gap",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "Confirmed nonfatal defect repaired in the assigned carrier. Exact finding and resolution are bound by the cited decision and corresponding review.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u19.json#/decisions/12"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "id": "def-real-gaussian-multicast-relay-network",
    "reason": "The only changed defining section is the relay network Definition. All three direct item consumers are draft members of this frozen frontier, and their exact affected uses remain sound. No published consumer repair or outside maintenance finding was discovered."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-finite-wiretap-product-kernel-is-stochastic",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "reason": "The library function-set convention makes A^n functions on {0,...,n-1}; without a shifted labeling rule the displayed i=1,...,n product evaluates coordinate n outside its domain. Added a_i:=a^n(i-1) for 1<=i<=n. This bijectively labels all n coordinates; each entry is nonnegative and finite distributivity gives a product of n row sums equal to one, including n=1 and zero entries. No choice is used.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-it-wiretap-channel",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "definition",
    "reason": "The one-based product has an out-of-domain coordinate under the library A^n function-set convention. Defined a_i:=a^n(i-1) for 1<=i<=n and made n>=1 explicit. The supplied product-kernel lemma now applies literally; summing out either output factors into the corresponding n marginal row factors. Uniform messages, private randomized encoding, no feedback/key/public aid, erasure error, and rate are preserved. This resolves the undefined expression without weakening the code model.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-it-classical-quantum-state-and-holevo-information",
    "severity": "nonfatal",
    "location": "definition",
    "disposition": "fixed",
    "reason": "The displayed B marginal is correct: first-index contraction of the block matrix gives sum_x p_x rho_x. The text incorrectly calls X the second factor and cites the map that retains X. Replaced that citation and dependency with def-qc-first-factor-partial-trace; ensemble hypotheses, state, marginal, Holevo formula and zero-weight convention are unchanged. This is a nonfatal citation/factor-description defect.",
    "model": "gpt-6-luna",
    "context_sha256": "c2f4dd807ee356f3c2bb2fbbbf016dd76dd72edbcfe007ac8e7a30c944e806b7",
    "uncertain": false,
    "source_urls": [
      "https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-it-relative-modular-representation",
    "severity": "nonfatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "Step 1.1 overloads a_i,b_j as vectors and scalars. The intended matrix-unit proof is sound, but its notation is ill-typed; renamed eigenvectors u_i,v_j and wrote Au_i=a_i u_i, Bv_j=b_j v_j. The matrix units are linear under the linear-first convention, are Hilbert-Schmidt orthonormal, and have positive eigenvalues b_j/a_i. The logarithm formula and cyclic trace identity then give D(A||B) without assuming A and B commute. Statement unchanged; nonfatal notation repair.",
    "model": "gpt-6-luna",
    "context_sha256": "36233d64549a74fa9a40ea63a990a14b1354ff94ecd42d413dac992744abc39c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-it-bell-pair-negative-conditional-entropy",
    "severity": "nonfatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "The state and entropy computations are correct, but the displayed F6 only states the reciprocal-log identity and leaves the final strict sign unexplained. Added strict monotonicity and ln(1)=0 from the already declared thm-natural-logarithm-laws, and used 2>1 to obtain ln(2)>0. Both marginals are I_2/2 and the joint spectrum is 1,0,0,0, so S(A|B)=-ln(2)<0. Nonfatal missing explanation; Example unchanged.",
    "model": "gpt-6-luna",
    "context_sha256": "a64532c63dc568f8c4d0d2fc88f49dabd67c6be908d219328458f750eac729a2",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-it-holevo-measurement-bound",
    "severity": "fatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "The unqualified finiteness assertion fails for p_0=1, rho_0=diag(1,0), p_1=0, rho_1=diag(0,1): bar rho=rho_0 and D(rho_1||bar rho)=+infinity by support failure. The displayed unrestricted sum in step 3.1 can then contain undefined 0 times infinity. Restricted finiteness and the divergence sum explicitly to p_x>0, and justified trace linearity using the common support logarithm extended by zero. The support argument and channel data processing now sum to the unchanged Holevo bound for all allowed ensembles. Fatal logic defect in the written finiteness/sum claim, rather than a false theorem.",
    "model": "gpt-6-luna",
    "context_sha256": "1672b012e29752a7b184849cd1796c4b7d38eb259cd984e7b006b367c319c270",
    "uncertain": false,
    "source_urls": [
      "https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-reviewed-interface-event",
    "id": "def-it-classical-quantum-state-and-holevo-information",
    "reason": "Citation-only Definition change; all 17 direct item consumers are draft frozen-frontier items and their relevant mathematical uses remain sound. No published or outside-frontier item repair is proposed. Record this focused examination separately from whole-item independent reviews.",
    "consumers": [
      "cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm",
      "def-it-classical-quantum-memoryless-channel",
      "def-it-quantum-channel-operational-capacities",
      "def-it-quantum-channel-private-information",
      "ex-it-classical-ensemble-holevo-equality",
      "ex-it-cq-binary-pure-state-channel",
      "lem-it-cq-typical-projector-dimension",
      "lem-it-degradable-channel-coherent-information-concavity-and-subadditivity",
      "lem-it-dimension-dependent-quantum-entropy-continuity",
      "lem-it-exponential-cq-spectral-projectors",
      "lem-it-finite-cq-wiretap-strong-secrecy-achievability",
      "lem-it-flat-input-entanglement-assisted-achievability",
      "lem-it-private-information-is-coherent-information-difference",
      "thm-it-holevo-measurement-bound",
      "thm-it-hsw-classical-quantum-channel-capacity",
      "thm-it-quantum-channel-capacity-regularized-private-information",
      "thm-it-quantum-entropy-identities"
    ],
    "uncertain": false,
    "source_urls": [
      "https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-outside-lane-page-finding",
    "id": "quantum-relative-entropy-data-processing-and-strong-subadditivity",
    "path": "library/information-theory/quantum-relative-entropy-data-processing-and-strong-subadditivity.md",
    "disposition": "owner-route",
    "severity": "nonfatal",
    "reason": "Verified the original Step-4 alert: this draft page lists only the Weyl-twirl/SSA/CMI items but still says it proves resolvent compression and partial-trace/channel data processing, and lacks a requires field. Those proofs are placed on quantum-information-measures. Route to the page owner; not caused by this citation-only repair, and no outside-lane file was edited.",
    "minimality": "Correct the page summary/diagram placement and restore its actual prerequisite edge; preserve all theorem statements.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-it-strong-subadditivity-for-pure-tripartite-state",
    "severity": "nonfatal",
    "disposition": "fixed",
    "locus": "facts-block",
    "reason": "F8 misattributes a rank-one spectral claim to a positivity equivalence. This is a nonfatal citation gap: g=(000+111)/sqrt(2), h=(000-111)/sqrt(2), and the six remaining computational vectors give eigenvalues 1,0,...,0 directly. Step 1.1 now supplies that elementary calculation and uses the actual F8 interface for positivity. No substantial prerequisite is missing.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-it-strong-subadditivity-for-pure-tripartite-state",
    "severity": "nonfatal",
    "disposition": "fixed",
    "locus": "facts-block",
    "reason": "Confirmed Step-4 F5 concern: the Schmidt supplier proves the expansion and norm identity, not the reduced-density spectrum. F5 now states its actual interface; step 1.2 independently computes the marginal eigenvalues and identifies the explicit Schmidt expansion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-it-finite-positive-square-root-is-order-preserving",
    "action": "record-false-positive",
    "reason": "F1 locally defines operator-order shorthand using the cited nonnegativity definition. Congruence proves inverse order, subtraction proves resolvent order, and the convergent positive spectral integral proves root order, including singular operators. No missing mathematical prerequisite was found."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-it-finite-quantum-entropy-continuity",
    "action": "record-fixed",
    "severity": "nonfatal",
    "location": "facts-block",
    "subclass": "citation-misattributed",
    "reason": "The inverse identities are in def-natural-logarithm, rather than the cited logarithm-laws Statement. Added that direct definition dependency and citation, and made the substitution t=1/exp(u) explicit. This is a nonfatal citation mismatch; eigenvalue Lipschitz control and continuity of −t ln(t) prove the unchanged claim."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-it-hayashi-nagaoka-finite-operator-inequality",
    "action": "record-fixed",
    "severity": "nonfatal",
    "location": "proof-step",
    "subclass": "missing-case",
    "reason": "The nonzero-space hypothesis of square-root monotonicity was not discharged when H={0}. Added the trivial zero-space case before invoking that supplier. The weighted cross-term estimate, support congruence and reducing kernel block prove the unchanged inequality; the omitted trivial case is nonfatal."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-it-schmidt-rank-compression-fidelity-bound",
    "action": "record-fixed",
    "severity": "fatal",
    "location": "facts-block",
    "subclass": "citation-inflated",
    "defect_type": "dependency_citation",
    "reason": "F4 attributes the reduced-spectrum identity to a supplier that states only Schmidt expansion and norm. The proof also treats its positive Schmidt family as a full reference basis. This is a fatal dependency/citation defect. Added existing partial-trace suppliers, derived both marginals in step 1.2, completed the reference basis with kernel vectors, and retained the rank-M overlap and Kraus-normalization argument."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "No assigned Statement or Definition changed, and no potentially defective published consumer was discovered. This is a scoped no-new-finding report, not a published-item audit or repair."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-finite-extension-from-purification-channel",
    "severity": "nonfatal",
    "locus": "facts-block",
    "reason": "F5 incorrectly attributed an ancilla dimension guarantee to orthogonal-complement and direct-sum results. This is nonfatal: step 2.1 already fixes G=C^d, so F2 gives dim(Z tensor F tensor G)>=d. Removed the overstatement, retaining the finite orthonormal-completion consequence. The fixed-eigenbasis Gram argument, completion on zero-Schmidt directions, and full-space CPTP partial trace establish the unchanged extension statement without choice.",
    "status": "fixed",
    "statement_changed": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-qudit-erasure-channel-coherent-information",
    "severity": "nonfatal",
    "locus": "facts-block",
    "reason": "F1 omitted the erasure-channel definition when attributing the receiver formula. This is a nonfatal citation defect: that definition is already a direct dependency and its exact full-operator formula gives the stated receiver block on trace-one inputs. Added it to F1 and the contract citations. Flagged entropies are h(epsilon)+(1-epsilon)S(rho) and h(1-epsilon)+epsilon S(rho); binary entropy symmetry cancels them and yields (1-2epsilon)S(rho), including epsilon=0,1 and d=1.",
    "status": "fixed",
    "statement_changed": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-finite-mixture-entropy-bounds",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "proof-step",
    "step": "1.1",
    "reason": "The original support argument inferred <rho_i v,v>=0 from a sum omitting rho_i, so that inference did not license finite relative entropy in the lower-bound proof. Repaired step 1.1 by writing 0=<bar rho v,v>=p_i<rho_i v,v>+sum_{j!=i}p_j<rho_j v,v>; positivity and p_i>0 force rho_i v=0. The relative-entropy trace identity now gives the lower bound. For the upper bound, the normalized eigenstate purification has label diagonal q_ij=p_i lambda_ij and the same positive marginal spectrum as bar rho, so D(G||diag q)=H(q)-S(bar rho)>=0 gives the stated H(p) bound. Zero weights and singular states are covered.",
    "status": "fixed",
    "statement_changed": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-entanglement-assisted-information-is-additive",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "reason": "F6 cited only an entropy upper bound but asserted and used nonnegativity to establish finite suprema. The lower bound was not furnished by that interface. Restricted F6 to S<=ln d, added the density and spectral-entropy definitions as direct dependencies/F8, and proved nonnegativity in step 3.1 from 0<lambda<=1 and increasing ln with ln(1)=0. SSA gives nonnegative mutual information; local complementary-channel data processing bounds the exact deficit -I(A1:A2)-I(B1:B2)+I(E1:E2). Product spectra and finite approximate suprema then establish the unchanged additivity claim, with finite choices only.",
    "status": "fixed",
    "statement_changed": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-qkd-finite-authenticated-protocol",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition, register identification and displayed abort output",
    "finding": "The original registers were identified with the key alphabet K, so the displayed abort ket was not a vector in A or B. Specifying full registers Q_(|K|+1) labelled by K union {bot}, with bot distinct and last, makes the abort and accepted blocks well typed. Accepted-state calculations use the key subspaces Q_|K| and zero extension; no claim is weakened.",
    "repair": "Declared ordered K-plus-abort computational bases for full A,B and accepted K-subspace identifications with zero extension.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-qkd-abort-weighted-secrecy-distance",
    "severity": "nonfatal",
    "locus": "Frontmatter title",
    "finding": "The title incorrectly names abort probability as the weight. The Example and verification correctly use p_acc=3/4 and conditional distance 1/2, giving secrecy and real-ideal distance 3/8 with zero mismatch. Renamed the title to acceptance probability and made the uniform accepted-key state explicit, with zero on the abort coordinate.",
    "repair": "Changed Abort probability to Acceptance probability and expanded tau_A in verification step 2.1 to the two accepted-key projectors.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-viterbi-max-product-on-finite-trellis",
    "model": "gpt-6-luna",
    "context_sha256": "d943f151a02c861c447e903115c29f5b5874c520278784fef5b5bd8733600bd8",
    "reason": "The counterexample violates def-finite-layered-trellis: a path must have alpha(v_1)>0 and beta(v_T)>0. Thus the T=1 tuple with beta(v)=0 is not admissible. All admissible path scores are positive; by the prefix recurrence Q(v)>0 exactly when a full path ends at v, so the all-zero test is correct, including an empty terminal layer.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-hmm-viterbi-sequence-map",
    "model": "gpt-6-luna",
    "context_sha256": "ae773c37cd8c5a37787465d1de3a492a03b5984a1e60808ac2f81a6f21f80806",
    "reason": "The proposed T=1 path with pi(s)=0 is not a trellis path: alpha_y(s)=pi(s)B(s,y_1)=0, and def-finite-layered-trellis requires positive initial weight. The initial factor is enforced by endpoint admissibility, while later zero transition/emission factors are excluded by edge construction. Thus every admissible trellis path has positive joint mass; deleting zero-weight vertices is unnecessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qc-tqc-fusion-tree-basis",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "evidence": "The old representative set could omit the actual tensor unit: for a distinct representative d isomorphic to 1, Hom(1,d) has dimension one but the empty-tree family was empty. Requiring the tensor unit itself to represent its class restores the claimed empty basis without changing any fusion multiplicity or requiring AC.",
    "action": "record-adjudication"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qc-tqc-ising-data",
    "status": "false_positive",
    "evidence": "The Example fixes sector data in the pullback convention and expressly makes the object-braiding eigenvalues their inverses. No object-level chirality from Nayak is imposed. Thus e^(-i*pi/8), e^(3*i*pi/8) are consistent pullback values, with ratio i; H^2=I and both phases have modulus one. Inverting them would select the other chirality, not repair an inconsistency. Nayak III.C.2 supplies these numerical phases, not a requirement identifying its object braiding with this chosen one. No all-label realization or coherence is asserted.",
    "action": "record-adjudication"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qc-tqc-f-symbol-unitary",
    "status": "fixed",
    "severity": "nonfatal",
    "evidence": "F3 inaccurately restated a theorem restricted to simple-input vertex spaces as an arbitrary-domain Hom pairing. This is a nonfatal citation-scope gap: composing orthonormal vertex maps gives u_j u_k dagger = delta_jk id_d, and expansion in the complete tree basis proves the scalar formula for every tree Hom map. Added that derivation, restricted F3 to its actual simple-input domain, then used alpha inverse alpha cancellation and bijectivity. The statement, dependencies, and zero-dimensional case remain unchanged.",
    "action": "record-adjudication"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-qc-tqc-fusion-tree-dimension",
    "batch": "28",
    "severity": "nonfatal",
    "status": "open",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "items/lem-qc-tqc-fusion-tree-dimension.md",
    "source_excerpt": "Their projections sum to $\\operatorname{id}_T$, because the child decompositions and each decomposition of $e\\otimes f$ do.",
    "affected_use": "Proof 1.2 constructs inclusions only of a fixed total d, then claims their range projections sum to the identity of the entire input tensor T.",
    "invalidated_claim": "For T=tau tensor tau=1 direct-sum tau with d=1, these projections sum only to the unit isotypic projection, not id_T. Completeness of Hom(T,d) remains true.",
    "minimality": "Sum inclusions over all simple outputs to obtain id_T, then use the fixed-d subfamily to obtain the complete Hom(T,d) basis; no statement change is needed.",
    "reason": "Confirmed independently against proof 1.2. The supplier convention repair fixes the empty-tree case but does not fix this separate projection-sum error. Item is unassigned here; route to the ordinary frontier owner for proof-only repair."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-qc-tqc-braid-action-unitary-and-artin",
    "severity": "nonfatal",
    "status": "open",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "items/thm-qc-tqc-braid-action-unitary-and-artin.md",
    "source_excerpt": "restriction to $V(x^n\\to c)$ preserves the same relations.",
    "affected_use": "Proof 2.1 restricts an object-level braid action to a multiplicity Hom space and identifies it with T_i inverse R_i T_i without applying inverse-precomposition.",
    "invalidated_claim": "Hom(x tensor n,c) is not literally a subobject of the tensor power; this identification needs the contragredient Hom action. The representation conclusion is sound after that short derivation.",
    "minimality": "Replace the restriction passage by B_b(f)=f composed with b inverse and B_(h composed g)=B_h composed B_g, then identify local F/R coordinates. Leave the statement unchanged.",
    "reason": "Confirmed the Step-4 alert by reading proof 2.1 and the explicit correct argument in thm-qc-tqc-gauge-covariance step 2.1. This separate draft consumer proof repair is outside assigned item ownership and goes to its frontier owner."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-qc-tqc-braid-action-from-fusion-data",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The rejection treats R as the object braiding, but def-qc-tqc-r-symbol Definition explicitly defines R as the matrix of f ↦ f ∘ c_{x,x}^{-1}. Thus inverse precomposition is already included in R_i; replacing it by R_i^{-1} would reverse the stated convention. F recoupling gives T_i^{-1} R_i T_i, with the specified column-vector product order. The nonzero simple-charge domain and owning contract/page agree. No source edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-qc-tqc-block-approximation-error",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F2 omitted the published operator-norm definition’s zero-domain branch, and the original maximum-over-unit-vectors proof did not cover the stated V=0 case. Both error maps are then zero; the repair handles this case explicitly, retains the full theorem, and proves the remaining contraction bounds using ||Ay||≤||A|| ||y|| including y=0. This is a nonfatal boundary omission, not a false theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-qc-tqc-projective-gate-and-metric",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The PU(V) equivalence relation, attained minimum, representative independence, symmetry, triangle inequality and separation are sound for V≠0, including dim V=1. The braid-gate title/interface lacked its explicit specialization to the declared braid-action supplier. Added only the projective braid gate [rho_c(b)] in the same quotient; no metric, common-phase convention or hypothesis changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-qc-tqc-determinant-character-phase",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The actual Statement and word-by-word proof correctly give the common scalar character chi(b)=R_1^{e(b)}, including inverse letters, empty words and zero exponent sum. The title incorrectly calls this a determinant character: in dimension d the determinant satisfies det rho(b)=R_1^{d e(b)} det rho_tilde(b). Replaced only determinant by scalar in the title, retaining the complete phase-tracking theorem and its source/dependency conventions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cex-qc-tqc-controlled-global-phase",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The one-dimensional target C has all unit scalars as unit vectors, so the original Given incorrectly asserts uniqueness. Specified the concrete normalized target 1∈C. Controlled I fixes |+>⊗1 and controlled -I gives |->⊗1, with plus-outcome probabilities 1 and 0. The statement refuted and the full coherent-control witness remain unchanged; this is a nonfatal initial-state wording error.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-qc-tqc-b6-joint-su5-su8-density",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The cited suppliers’ Remarks and proofs do contain the 24/63 Lie-word data, so those data are not invented. However the original joint proof never placed the initial pair (C5−C5^{-1},C8−C8^{-1}) in Lie(G), and its F1 contract quotes only separate-density Statements. This is a fatal logical gap in the simultaneous-closure argument. The repair uses only those separate-density Statements: common irrational-angle powers give a simultaneous circle and nonzero tangent; each projected Lie space is a nonzero SU(n)-invariant ideal, hence is all su(n). Finite determinant image, the proved nonisomorphic simplicity argument, and IFT/connectedness then give SU(5)×SU(8).",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/0001108"
    ],
    "familiar": false,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-qc-tqc-su2-determinant-lifts-dense",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The general lemma quantifies over arbitrary dense Gamma; a Fibonacci-specific density theorem cannot supply that hypothesis for every Gamma. F2 now follows explicitly from the Given density assumption. Removed the unused specialized dependency and updated dependency_level to 9 (the covering supplier is level 8). The covering-sheet proof is sound: S0∩O is nonempty open, its image is nonempty open and meets Gamma, and the unique sheet lift lies in O. ACω and the full-inverse-image, rather than selected-lift, conclusion are retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-qc-tqc-ising-vs-fibonacci",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Verification 2.1 wrongly attributes circle closures to the individual Fibonacci generators. Their eigenvalue ratio r=e^{-3πi/5} has order 10, so each generated projective cyclic subgroup is finite. The actual density supplier proves density via the irrational-angle word B1 B2^{-1} and its conjugate. Since F2 already supplies the full density conclusion, this is a nonfatal false explanatory sentence; replaced it with direct application of F2, retaining the conditional Majorana–Ising finite-image comparison.",
    "uncertain": false,
    "source_urls": [
      "https://www.preskill.caltech.edu/ph219/topological.pdf"
    ],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-qc-tqc-fusion-tree-dimension",
    "owner_batch": "28",
    "severity": "nonfatal",
    "locus": "Proof 1.2",
    "source_excerpt": "Their projections sum to $\\operatorname{id}_T$, because the child decompositions and each decomposition of $e\\otimes f$ do.",
    "affected_use": "The fixed-output-d induction claims its d-copy projections resolve the whole tensor object T before concluding a basis of Hom(T,d).",
    "invalidated_claim": "For fixed d, this sum is the projection onto the d-isotypic summand, not id_T. In the supplied Fibonacci category T=τ⊗τ=1⊕τ and d=1, it annihilates the nonzero τ summand.",
    "minimality": "Replace the full-identity assertion for fixed d by the d-isotypic projection. The all-output family resolves id_T, and for any f:T→d the other simple-output summands contribute zero; hence f factors through this d-isotypic projection and completeness of the stated Hom basis follows. No Statement change is needed.",
    "route": "unassigned_frontier_owner",
    "status": "reported_not_edited",
    "reason": "For fixed d, this sum is the projection onto the d-isotypic summand, not id_T. In the supplied Fibonacci category T=τ⊗τ=1⊕τ and d=1, it annihilates the nonzero τ summand. Replace the full-identity assertion for fixed d by the d-isotypic projection. The all-output family resolves id_T, and for any f:T→d the other simple-output summands contribute zero; hence f factors through this d-isotypic projection and completeness of the stated Hom basis follows. No Statement change is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-qc-tqc-braid-action-unitary-and-artin",
    "owner_batch": "29",
    "severity": "nonfatal",
    "locus": "Proof 2.1",
    "source_excerpt": "naturality of the braiding makes each block invariant, so restriction to $V(x^n\\to c)$ preserves the same relations.",
    "affected_use": "Proof 2.1 identifies the tensor-object braid action restricted to a block with the matrices on Hom(x^⊗n,c).",
    "invalidated_claim": "This fusion space is a Hom multiplicity space, not literally an object subspace on which the tensor-object braid is restricted. Its stated R coordinates act by inverse precomposition.",
    "minimality": "Replace the restriction passage by B_b(f)=f∘b^{-1} and the composition identity B_{h∘g}=B_h∘B_g. This transports the Artin relators and matches T_i^{-1}R_iT_i. The complete elementary passage is already present in thm-qc-tqc-gauge-covariance Proof 2.1. The existing Statement need not change.",
    "route": "unassigned_frontier_owner",
    "status": "reported_not_edited",
    "reason": "This fusion space is a Hom multiplicity space, not literally an object subspace on which the tensor-object braid is restricted. Its stated R coordinates act by inverse precomposition. Replace the restriction passage by B_b(f)=f∘b^{-1} and the composition identity B_{h∘g}=B_h∘B_g. This transports the Artin relators and matches T_i^{-1}R_iT_i. The complete elementary passage is already present in thm-qc-tqc-gauge-covariance Proof 2.1. The existing Statement need not change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "reason": "No published mathematical defect was identified or repaired by this assignment. All five direct consumers of the changed projective Definition are draft frontier items and retain valid uses. The two additional verified alerts concern unassigned draft frontier proofs, so their route is the frontier owner, not published-consumer maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-qc-tqc-toric-excitations",
    "severity": "nonfatal",
    "locus": "definition",
    "reason": "The negative-eigenvalue sets are well-defined independently of error syndromes, but the Definition incorrectly attributes a check-eigenvalue convention to a supplier defining Pauli commutation bits. Corrected that nonfatal attribution and proved g(Eφ)=(-1)^s Eφ for gφ=φ and Eg=(-1)^s gE; no realizability claim for arbitrary eigenvectors is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "post_sha256": "8cf91b3eae2c89edb5ee7898765c3c29ce548f7f1666e963fc3d93790ad28e3d"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-qc-tqc-toric-gap",
    "reason": "False positive: the actual F4 supplier Statement expressly gives 0 at every other star or plaquette, and Proof 1.1–1.2 proves same-species commutation. Thus a one-edge Z applied to a code vector has (Ne,Nm)=(2,0), and a one-edge X has (0,2); unitarity preserves nonzeroness. Joint-sector decomposition and even parities give the lower bound, attained at 4 min(Je,Jm), including equal couplings. The shortened F4 summary does not remove the cited full conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-qc-tqc-toric-mutual-sign",
    "reason": "False positive: the supplier Proof 1.1 identifies Z on the primal trail support, and 1.2 explicitly identifies a dual edge with the crossed primal edge carrying its qubit. These specify the string operators used in its Statement; the eigenvalue syndrome conclusion is not being used to reconstruct support. With one shared physical qubit the pure Z/X labels have symplectic pairing 1, so the cited commutator theorem proves the sign. No dynamics or statistics experiment is inferred.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-qc-tqc-toric-recovery",
    "reason": "False positive: the periodic toric code is the family defined from def-qc-tqc-periodic-square-cellulation, whose Definition fixes an integer L≥3; def-qc-tqc-toric-checks uses precisely that cellulation. Recovery does not define or quantify over an alternative L=1 or L=2 code. Its contract likewise explicitly excludes L<3. Within this inherited domain the dimension theorem gives a nonzero stabilizer code, d(S)=L, and 2t<L is exactly the finite-channel correction hypothesis, including t=0.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cex-qc-tqc-planar-is-not-toric",
    "reason": "False positive: the published planar supplier Proof 6.2 constructs a straight top-to-bottom dual normalizer path and proves it nontrivial by odd intersection with the Z row; 7.1 explicitly proves that it attains weight d+1. Thus F2 accurately reports a conclusion proved in the cited item even though its Statement advertises only the lower bound. At d=3 the weights are (3,4); the toric lower bound and nontrivial three-edge pure X/Z loops give (3,3), with one versus two encoded qubits. No published repair is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-qa-37-finite-adiabatic-braid-input",
    "outcome": "confirmed_nonfatal",
    "reason": "The input already supplied endpoint isometries and an independent transport inequality, so the rejection overstates the gap. Its phrase physical action nevertheless mislabels the categorical target and left frame coordinates implicit. Replaced it with categorical action on V_cat and explicit Q_j, rho_log=Q_1^*rho(b)Q_0, iota_j=A_jQ_j^*. This preserves the independent transport premise and makes no realization inference from JRS.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "proposed_row": {
      "defect_id": "non-ml-math-remaining-81-2026-10-18-step5-initial-r1-u31-def-qa-37-finite-adiabatic-braid-input",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "other",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-qa-37-finite-adiabatic-braid-input",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "The input already supplied endpoint isometries and an independent transport inequality, so the rejection overstates the gap. Its phrase physical action nevertheless mislabels the categorical target and left frame coordinates implicit. Replaced it with categorical action on V_cat and explicit Q_j, rho_log=Q_1^*rho(b)Q_0, iota_j=A_jQ_j^*. This preserves the independent transport premise and makes no realization inference from JRS.",
      "evidence": [
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json",
          "anchor": "def-qa-37-finite-adiabatic-braid-input"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-qa-37-fusion-input-encoding",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Arbitrary isometries form an uncountable family even in a fixed nontrivial finite dimension, whereas finite strings are countable; the previous carrier supplied no exact finite encoding. Repaired the finite record to name a background isometry through a declared codebook; varying classical-input isometries require an explicit exact finite description language and fully charged description. Arbitrary abstract isometries remain available as fixed background model data, without a false universal finite-coordinate encoding.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "proposed_row": {
      "defect_id": "non-ml-math-remaining-81-2026-10-18-step5-initial-r1-u31-def-qa-37-fusion-input-encoding",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-qa-37-fusion-input-encoding",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "Arbitrary isometries form an uncountable family even in a fixed nontrivial finite dimension, whereas finite strings are countable; the previous carrier supplied no exact finite encoding. Repaired the finite record to name a background isometry through a declared codebook; varying classical-input isometries require an explicit exact finite description language and fully charged description. Arbitrary abstract isometries remain available as fixed background model data, without a false universal finite-coordinate encoding.",
      "evidence": [
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json",
          "anchor": "def-qa-37-fusion-input-encoding"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-qa-37-resource-cost-model",
    "outcome": "confirmed_nonfatal",
    "reason": "The carrier delegated circuit and nonoracle costs to existing QC definitions but omitted them from its displayed record; N_prep alone counts no computational gates. Appended the complete applicable QC circuit cost record and a separate total nonoracle gate count, including description, wire, depth, ancilla, oracle and classical-family coordinates. Declared branch costs, overlaps and not-applicable conventions prevent zero-cost or double-counting interpretations.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "proposed_row": {
      "defect_id": "non-ml-math-remaining-81-2026-10-18-step5-initial-r1-u31-def-qa-37-resource-cost-model",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "other",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-qa-37-resource-cost-model",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "The carrier delegated circuit and nonoracle costs to existing QC definitions but omitted them from its displayed record; N_prep alone counts no computational gates. Appended the complete applicable QC circuit cost record and a separate total nonoracle gate count, including description, wire, depth, ancilla, oracle and classical-family coordinates. Declared branch costs, overlaps and not-applicable conventions prevent zero-cost or double-counting interpretations.",
      "evidence": [
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json",
          "anchor": "def-qa-37-resource-cost-model"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-qa-37-fusion-measurement-branches",
    "outcome": "confirmed_nonfatal",
    "reason": "For the displayed positive-real superposition the probabilities and conditional vectors are correct. The zero-coefficient variation allows a surviving coefficient alpha of modulus one; its normalized conditional vector is alpha|a>, not literally |a>. Repaired step 2.1 to preserve that scalar and distinguish the vector from its pure-state ray. The zero-probability outcome still has no normalized conditional state.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "proposed_row": {
      "defect_id": "non-ml-math-remaining-81-2026-10-18-step5-initial-r1-u31-ex-qa-37-fusion-measurement-branches",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "other",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "ex-qa-37-fusion-measurement-branches",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "For the displayed positive-real superposition the probabilities and conditional vectors are correct. The zero-coefficient variation allows a surviving coefficient alpha of modulus one; its normalized conditional vector is alpha|a>, not literally |a>. Repaired step 2.1 to preserve that scalar and distinguish the vector from its pure-state ray. The zero-probability outcome still has no normalized conditional state.",
      "evidence": [
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json",
          "anchor": "ex-qa-37-fusion-measurement-branches"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-qa-37-approximate-b6-target",
    "outcome": "confirmed_nonfatal",
    "reason": "The identity conclusion is correct, but F1 is existential for positive tolerance and does not itself give a zero-error guarantee for the particular empty word. Replaced that citation-dependent inference by the direct calculation: ambient identity fixes every code vector and has zero projection to its orthogonal complement. Determinant corrections are identities and exponent sum zero gives physical scalar one.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "proposed_row": {
      "defect_id": "non-ml-math-remaining-81-2026-10-18-step5-initial-r1-u31-ex-qa-37-approximate-b6-target",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "other",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "ex-qa-37-approximate-b6-target",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "The identity conclusion is correct, but F1 is existential for positive tolerance and does not itself give a zero-error guarantee for the particular empty word. Replaced that citation-dependent inference by the direct calculation: ambient identity fixes every code vector and has zero projection to its orthogonal complement. Determinant corrections are identities and exponent sum zero gives physical scalar one.",
      "evidence": [
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json",
          "anchor": "ex-qa-37-approximate-b6-target"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-qa-37-su2-compiler-error-length",
    "outcome": "confirmed_nonfatal",
    "reason": "F1 literally called a finite alphabet dense, which is false; its supplier correctly proves density of the generated subgroup. Repaired F1 to state generated-subgroup density. The proof now uses exactly the standard inverse-closed dense gate-package hypothesis. Independently checked q_j=4096 eta_j, q_next=q_j^(3/2), existence of least J including J=0, logarithmic length exponent, the separate polynomial Cauchy-name/algebraic-input bit bound, and the retained physical scalar. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "proposed_row": {
      "defect_id": "non-ml-math-remaining-81-2026-10-18-step5-initial-r1-u31-thm-qa-37-su2-compiler-error-length",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-qa-37-su2-compiler-error-length",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "F1 literally called a finite alphabet dense, which is false; its supplier correctly proves density of the generated subgroup. Repaired F1 to state generated-subgroup density. The proof now uses exactly the standard inverse-closed dense gate-package hypothesis. Independently checked q_j=4096 eta_j, q_next=q_j^(3/2), existence of least J including J=0, logarithmic length exponent, the separate polynomial Cauchy-name/algebraic-input bit bound, and the retained physical scalar. Statement unchanged.",
      "evidence": [
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json",
          "anchor": "thm-qa-37-su2-compiler-error-length"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-qa-37-fibonacci-budget",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The old proof assumed all arbitrary U(2) and CNOT QSD factors already had delta approximations, without obtaining them from its stated facts; SK on SU(2) and exact QSD alone do not supply this. Added F5 from the already declared arbitrary-n approximation theorem, carrying its AComega and nonzero-spectator hypotheses. At tolerance delta/2 each factor has code-isometry error at most delta by adding its logical and leakage components. An explicit telescoping identity on code inputs now bounds the product by M delta <= epsilon/2 relative to the recorded product scalar. The numerical recurrence remains eta1=2^(-27/2), eta2=2^(-57/4), J=2 and length <=25 L0, with no B6 length bound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "proposed_row": {
      "defect_id": "non-ml-math-remaining-81-2026-10-18-step5-initial-r1-u31-ex-qa-37-fibonacci-budget",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "ex-qa-37-fibonacci-budget",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "subclass_note": "The old proof assumed all arbitrary U(2) and CNOT QSD factors already had delta approximations, without obtaining them from its stated facts; SK on SU(2) and exact QSD alone do not supply this. Added F5 from the already declared arbitrary-n approximation theorem, carrying its AComega and nonzero-spectator hypotheses. At tolerance delta/2 each factor has code-isometry error at most delta by adding its logical and leakage components. An explicit telescoping identity on code inputs now bounds the product by M delta <= epsilon/2 relative to the recorded product scalar. The numerical recurrence remains eta1=2^(-27/2), eta2=2^(-57/4), J=2 and length <=25 L0, with no B6 length bound.",
      "evidence": [
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u31.json",
          "anchor": "ex-qa-37-fibonacci-budget"
        }
      ]
    }
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published item was edited or found defective in this assignment. The Step-4 fusion-tree alert concerns a current draft owned by batch 28 and is routed separately below; draft-only history must not enter the published ledger.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-odd-self-jacobi-in-characteristic-zero",
    "severity": "nonfatal",
    "locus": "frontmatter",
    "reason": "Display title promised arbitrary characteristic-zero fields while the Statement and local prerequisite fix C; corrected item title and owning manifest title mirror, preserving all mathematics.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-graded-clifford-modules-and-real-complex-types",
    "severity": "nonfatal",
    "location": "proof-step",
    "status": "fixed",
    "reason": "Step 1.2 cites F1 (the graded-module correspondence) for the volume square, although the needed square relation is already supplied by F8. For standard complex generators e_j^2=1, anticommutation gives Omega^2=(-1)^(n(n-1)/2), and i^(2 floor(n/2)) cancels this sign. The calculation is valid; its local attribution is defective. Replaced F1 by F8, made the square-product calculation explicit, and cited F9 for parity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-real-clifford-low-signature-models",
    "severity": "nonfatal",
    "location": "proof-step",
    "status": "fixed",
    "reason": "The five algebra identities already follow correctly from step 1.1 and the supplier statement. The extra explicit-model check used A,B_+,B_- without local definitions and attributed generator data to an interface containing only isomorphisms. The supplier proof actually constructs these matrices, so no theorem is missing. Defined them locally, checked their products and basis independence, and used existing universal-property and PBW suppliers explicitly to establish all five maps.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-outside-lane-finding",
    "id": "thm-real-complex-clifford-algebra-classification",
    "route": "frontier owner",
    "status": "open",
    "location": "proof-step 2.1",
    "reason": "Verified current step 1.2 defines the pure dimension as 8t+s with 0<=s<8, but step 2.1 resets s=q-p in the negative branch while still substituting n=8t+s+2m. For (p,q)=(0,9), the former has t=1,s=1 and the latter says s=9. The intended correct table follows by replacing that phrase with q-p=8t+s, 0<=s<8. This assigned theorem uses only the correct table Statement. No outside edit or adjudication was performed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-outside-lane-finding",
    "id": "thm-complex-spin-modules-and-compact-reducibility",
    "route": "frontier owner (current carrier is draft)",
    "status": "open",
    "location": "proof-step 2.1",
    "affected_use": "Step 1.1 chooses arbitrary orthogonal anisotropic e_i; step 2.1 uses omega=i^m e_1...e_(2m) and asserts omega^2=1 to construct p_+=(1+omega)/2 and p_-=(1-omega)/2.",
    "invalidated_claim": "In fact omega^2=product Q(e_i). In a positive definite plane e_1=2f_1,e_2=f_2 gives omega^2=4, so these p_+ and p_- are not idempotent. Even replacing e_i by u_i only gives omega^2=(-1)^q for signature (p,q).",
    "minimality": "Normalize to a complex orthogonal basis f_i of square +1: f_i=u_i when Q(e_i)>0 and f_i=i u_i when Q(e_i)<0. Use omega=i^m f_1...f_(2m) at this proof step; no change to the half-spin Statement is needed. This is separate from either assigned repair.",
    "reason": "Current proof passages confirm the digest normalization defect by the explicit square computation. Routed without editing or adjudicating the unassigned draft. No potentially defective published carrier was identified.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-real-clifford-group-and-normalized-pin-spin",
    "severity": "nonfatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Missing justified_by links repaired using the existing twisted-action and norm-law discharges; the Definition is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-normalized-pin-spin-product-and-norm-laws",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The empty normalized-vector set generates {1}, not Pin(0)={±1}; repaired the Statement, F2 and proof to distinguish dimension zero."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-complex-spin-modules-and-compact-reducibility",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Step 2.1 used an unnormalized basis in chirality, making its square possibly unequal to 1; repaired using the existing normalized vectors. The assigned Haar-method rationale is false, but this separate logic defect warrants rejecting the carrier."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-real-pin-spin-image-kernel-and-compactness",
    "severity": "nonfatal",
    "status": "open",
    "route": "frontier-owner-lane",
    "affected_use": "Facts F3: Pin consists exactly of the norm-±1 normalizer elements and is generated by normalized anisotropic vectors. Proof 1.3 uses the norm locus to determine scalar kernel; 2.1 separately treats dimension zero.",
    "invalidated_claim": "The unqualified Facts description of Pin/Spin as normalized-vector products is false at V=0 because -1 is not an empty product.",
    "minimality": "F3 still incorrectly asserts generation at V=0. Qualify the generation phrase by dim V>0 and state Pin(0)={±1}; the unchanged proof/conclusion need no further repair.",
    "reason": "F3 still incorrectly asserts generation at V=0. Qualify the generation phrase by dim V>0 and state Pin(0)={±1}; the unchanged proof/conclusion need no further repair.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-real-spin-modules-and-real-types",
    "severity": "nonfatal",
    "status": "open",
    "route": "frontier-owner-lane",
    "affected_use": "Facts F2: Full-even Spin consists of even products of normalized anisotropic vectors. Proof 1.1 uses even PBW products lying in Spin and the reverse inclusion Spin subset Cl0.",
    "invalidated_claim": "The unqualified Facts description of Pin/Spin as normalized-vector products is false at V=0 because -1 is not an empty product.",
    "minimality": "The equality restatement F2 excludes -1 at V=0. Qualify the product assertion to positive dimension and explicitly retain Spin(0)={±1}. The span proof needs only inclusions and contains 1, so its statement and conclusions remain sound.",
    "reason": "The equality restatement F2 excludes -1 at V=0. Qualify the product assertion to positive dimension and explicitly retain Spin(0)={±1}. The span proof needs only inclusions and contains 1, so its statement and conclusions remain sound.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-real-pin-spin-topological-double-covers",
    "severity": "nonfatal",
    "status": "open",
    "route": "frontier-owner-lane",
    "affected_use": "Facts F3: Pin consists of homogeneous normalized-vector products. Proof 3.1 uses product parity only after separately treating n=0.",
    "invalidated_claim": "The unqualified Facts description of Pin/Spin as normalized-vector products is false at V=0 because -1 is not an empty product.",
    "minimality": "Qualify the product description to positive dimension and add the scalar exception at zero. Proof 3.1 already proves the two-point-to-point covering at zero, so no Statement change is necessary.",
    "reason": "Qualify the product description to positive dimension and add the scalar exception at zero. Proof 3.1 already proves the two-point-to-point covering at zero, so no Statement change is necessary.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-cartan-dieudonne-real-nondegenerate-reflection-factorization",
    "severity": "nonfatal",
    "status": "open",
    "route": "frontier-owner-lane",
    "affected_use": "Remarks identify the real-polynomial selection replacement as step 1.2, but that argument is in step 1.3; step 1.2 handles an anisotropic fixed vector.",
    "invalidated_claim": "The Remarks proof-step locator is inaccurate.",
    "minimality": "Change only the Remarks locator from step 1.2 to step 1.3; no mathematical interface changes.",
    "reason": "Confirmed the digest presentation concern against current proof steps 1.2 and 1.3 and Remarks; this unassigned item was not edited.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-ahat-and-relative-chern-character-forms",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The supplier Statement separates the supplied-Spin associated construction from its assertion for any graded Hermitian Clifford module. Proof 3.1 allows overlap Spin lifts with a sign cocycle and explicitly does not assert a global multiplicity bundle; conjugation cancels the signs, and 4.1 patches the supertrace even when no global spinor bundle exists. Dimension zero is checked in 5.1. Thus the cited relative interface has no global Spin-lift prerequisite.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-graded-hermitian-clifford-module-and-geometric-dirac",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The supplied action, connection and contraction define data without choice. The final sentence attributes formal symmetry and global well-definedness to a lemma whose interface assumes Countable Choice, without mentioning that qualification. This is a nonfatal attribution/assumption omission, not a failure of the local contraction: inserted the exact Countable Choice qualifier, dependency and axiom metadata, preserving every defining equation and later domain restriction.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-geometric-dirac-operator-is-well-defined",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The divergence supplier explicitly requires positive dimension, whereas the lemma includes dimension zero. The zero-dimensional contraction is the zero operator, so its symmetry needs no divergence theorem. Added this direct branch before the positive-dimensional divergence argument, and corrected F3 to state n>=1; the frame-change contraction and the linear-first Hermitian sign calculation remain valid. This is a nonfatal omitted elementary boundary case, with no Statement change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "cex-dirac-on-euclidean-space-is-not-fredholm",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The Sobolev definition explicitly assumes Countable Choice as well as the Fourier suppliers. The original last step incorrectly confined its use to F2. Corrected A1 and step 3.1 to include F3 and the L2 subsequence argument; made the n=1 power unambiguous as |xi|^(1/2). Independently checked the multiplier domain, density of range, finite radial integral integral r dr, and divergent inverse integral integral dr/r for every n>=1. No mathematical conclusion or Statement changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-lichnerowicz-formula-for-geometric-dirac-operators",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "F1 cites the geometric-module definition, which explicitly fixes Cl_C(T*M,-g) and the negative polarized relation. The universal plus-Q Clifford construction permits arbitrary quadratic forms: take Q(xi)=-g^{-1}(xi,xi) and polarize (xi+eta)^2. There is no opposite-sign premise. Checked the normal-frame expansion, [c_a c_b,c_k]=2(delta_ak c_b-delta_bk c_a), curvature commutant, and Bianchi/scalar contraction giving scal/4. No item edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-dirac-maximal-domain-is-h1",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Formal symmetry of D is used in the energy identity, symmetry of DB, distributional resolvent testing and adjoint-domain argument, while the direct citation named only the defining data. Added the proved well-definedness/symmetry supplier to deps and F4 and cited it at each use, carrying its Countable Choice via full AC. This is a nonfatal missing explicit dependency: the formal-symmetry hypothesis and cited Lichnerowicz chain already made the analytic reasoning valid. Checked B:L2->H2, DB:L2->H1, the test identity u=DB(Du)+lambda Bu, graph-norm density and exact adjoint domain. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-spin-lift-of-oriented-orthonormal-frame-bundle",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The referenced oriented bundle definition is topological and the supplied Euclidean metric need only be continuous. For the trivial oriented line over R with metric e^(2|x|), Gram-Schmidt of the constant frame gives e^(-|x|), which is not differentiable at zero. Thus the original unconditional smoothness assertion is false. Replaced it by continuity for the given topological data, with smoothness retained when the base, bundle and metric are smooth. The SO reduction, covering, rank range and continuous equivariant Spin-lift interface are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-spinor-and-clifford-associated-bundles-are-well-defined",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F5 attributed the double-cover property to a supplier whose Statement supplies only a continuous local section. The needed central two-sheeted covering is proved by thm-real-pin-spin-topological-double-covers, already in the defining Spin-lift chain; its explicit logarithm section has smooth power series on smaller matrix balls. Added the covering theorem directly and separated its covering conclusion from the analytic smoothness calculation s(A)=exp(b(log A)), yielding translated smooth inverse branches. Checked smoothing of the actual supplied lift, finite Clifford averaging, connection gluing, local matrix-algebra factorization, sign-twisted overlap conjugacy and relative supertrace patching. The relative argument uses only trivial local Spin lifts. Statement unchanged; this is a nonfatal citation omission with the actual supplier available.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-metadata-correction",
    "id": "lem-lichnerowicz-formula-for-geometric-dirac-operators",
    "status": "fixed",
    "reason": "The owning proof contract incorrectly said Proof 4.1 explicitly treats dimension one. Corrected the one-boundary worksheet to not_applicable because the defining module data require even base dimension; no item carrier changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "Both changed definitions have only frontier direct item consumers in the current dependency/reference inventory. No published or outside-frontier direct consumer or necessary maintenance repair was found. The digest's outside draft spin-module alert is separately recorded as corrected in the current supplier, without editing that supplier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-polynomial-differential-representation-of-weyl-algebra",
    "severity": "nonfatal",
    "locus": "frontmatter",
    "reason": "The title advertised a characteristic-p kernel description, but the stated and proved claim is only nonfaithfulness: the monomial calculation gives D_i^p=0 and the all-characteristic normal-ordered basis gives p_i^p nonzero. This is a nonfatal display-title overstatement, repaired by naming positive-characteristic nonfaithfulness without changing the mathematical claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-heisenberg-group-of-a-symplectic-vector-space",
    "reason": "False positive: the actual cited lemma, Proof step 2.1, explicitly states that (v,t) maps onto v with kernel {(0,t)}, proving exactness of this central extension. Its steps 1.1 and 2.1 also establish the group law, topology and center, including V=0. The judge saw a statement-only interface that omitted an existing proof computation; the definition and page cite that computation accurately.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-incomplete-tensor-product-with-reference-vector",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "Proof 1.1 and 1.2",
    "reason": "The original 1.1 invokes L1 Fubini on a product before proving it integrable; that supplier expressly assumes L1. Added the existing nonnegative Tonelli theorem and explicit Borel-representative/product-measure suppliers, established the finite norm integral first, and justified section projections and subsequent integrable Fubini uses in 1.2. This repairs an unsatisfied load-bearing dependency hypothesis without changing the Definition.",
    "uncertain": false,
    "source_urls": [
      "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-stone-von-neumann-for-finite-dimensional-weyl-systems",
    "severity": "nonfatal",
    "locus": "axiom_use, Facts F11 and A1; Proof 4.1 and 6.1",
    "reason": "The orthogonal-decomposition supplier assumes Countable Choice, not full AC. The theorem already assumes AC, so the application in 6.1 is valid, but axiom_use and A1 misattribute the supplier assumption. Corrected the choice ledger, F11 and A1, retaining AC for the actual spectral, Mackey, standard-Borel and operator-field suppliers. Additionally supplied compact-open orbit estimates and the explicit one-dimensional K1 conclusion.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0912.0574"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-heisenberg-group-lagrangian-splitting-and-dual-orbit",
    "severity": "nonfatal",
    "locus": "Proof 4.1",
    "reason": "Step 4.1 treats frequency parameters as compact-open topological coordinates, whereas the cited real-line character lemma supplies only the classification. Forward compact convergence follows from the exponential Lipschitz estimate; inverse continuity follows by testing on the interval |t|<=pi/delta. Its assigned consumer uniqueness theorem now proves these estimates explicitly in its own 4.1. The unassigned lemma is not edited; route its local omitted justification to its owner.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0912.0574"
    ],
    "familiar": true,
    "affected_use": "items/thm-stone-von-neumann-for-finite-dimensional-weyl-systems.md, Proof 4.1 transports the spectral PVM through the compact-open orbit Borel isomorphism; that consumer now proves the required continuity estimates locally.",
    "minimality": "For its owner: add the exponential uniform-on-compacts estimate and the coordinate-segment inverse estimate to the unassigned lemma Proof 4.1. No Statement change is needed; no unassigned item was edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-formal-associative-deformation-of-a-commutative-algebra",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "locus": "Definition",
    "status": "fixed",
    "before_sha256": "b21b01a9266b8e5311cc4a962cb9b06eb3c9a39d80b10199d0614da508c28488",
    "post_sha256": "00113d476b4635e77259e808540683fb4e38a031719836746c552073ccbd77b8",
    "reason": "The equivalence as written includes associativity, which normalization alone does not imply. On R[t], let B1(t,t)=t and let B1 vanish on all other monomial pairs, with Br=0 for r>1. Then (t star t) star t^2=t^4+hbar t^3, whereas t star (t star t^2)=t^4, despite B1(1,f)=B1(f,1)=0. Restricting the equivalence to the unit requirement preserves the explicit associativity requirement and the complete approved formal-product interface.",
    "repair": "Restricted the equivalence to the fixed-unit requirement; retained associativity as a separate mandatory condition. Five direct item consumers and the owning page were examined and remain mathematically sound.",
    "uncertain": false,
    "source_urls": [
      "https://people.tamu.edu/~sjw/pub/gsm204.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-hh-cochain-complex-and-gerstenhaber-bracket",
    "outcome": "false_positive",
    "locus": "Definition: attribution of insertion closure",
    "reason": "The cited proposition states bracket closure but actually proves the stronger insertion closure in Proof step 5.1. In each insertion, a unit input either lies in the inner block and kills that normalized cochain, or remains in the outer cochain and kills it. Leibniz expansion of a finite composition of finite-order differential operators gives a finite multidifferential expression. Thus the Definition accurately says insertion closure is proved there; it does not claim it appears verbatim in the proposition Statement. No edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-change",
    "reason": "All five direct consumers of the changed Definition are draft frontier items. No affected published consumer or defective published prerequisite was found in this review; no published-item repair or maintenance record is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-resolved-finding",
    "id": "def-filtered-l-infinity-morphism",
    "severity": "nonfatal",
    "locus": "definition",
    "finding": "F^1W need not be an ideal when filtration bounds apply only to positive input indices.",
    "resolution": "The assigned carrier now says complete positive-filtration subalgebra and explicitly says it need not be an ideal in W; its degenerate-boundary contract is corrected. No Taylor equation or completeness hypothesis changed.",
    "evidence": "The ideal assertion is false although the Taylor-morphism definition is valid. For the ordinary degree-zero Lie algebra [a,b]=b, shift to W=g[1], take F^1W=k(sa), F^rW=0 for r>=2, and q_1=0 with only the shifted bracket q_2 nonzero. The filtration is degreewise complete and all operations on positive-filtration inputs vanish, but q_2(sa,sb) is a nonzero multiple of sb outside F^1W. Replaced ideal by complete positive-filtration subalgebra and explicitly disclaimed an ideal condition; changed the owning degenerate-boundary contract accordingly. This is a nonfatal false terminology claim: no defining Taylor equation or convergence argument needs mixed-input ideal stability.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1407.6735"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra",
    "supplier": "def-filtered-l-infinity-morphism",
    "severity": "nonfatal",
    "locus": "statement and proof-step 1.1",
    "affected_use": "The final Statement sentence calls the total-weight completion a completion on the positive ideal, and proof step 1.1 calls P=F^1W an ideal.",
    "invalidated_claim": "Positive-filtration stability only yields a subalgebra of W, as the shifted [a,b]=b example with F^1=k(sa), F^2=0 shows.",
    "minimality": "Replace the two ideal labels by subalgebra or subspace. The completion proof is otherwise valid on positive inputs; no filtration or mathematical conclusion needs changing.",
    "route": "ordinary frontier owner; this consumer is outside unit 43 assigned repair files and is therefore left unedited",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1407.6735"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-real-clifford-block-rotation-index-lower-bound",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "F3 now distinguishes Hess(E)=I for half-energy from Hess(2E)=2I. The negative-mode spans and all index inequalities are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-real-clifford-restriction-matrices",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "The repaired period square places the eight B generators first, so standard restriction drops the last old generator. Matrix-unit equivalence transports every restriction row."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-given-spin-and-spinc-structures-and-associated-spinor-bundles",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "The defining representation now descends exactly when tau(-1)(-1)^k=I, with the standard Clifford spinor at weight one. All four direct uses remain sound."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-uniqueness-of-stable-clifford-hopf-decomposition",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "New Proof 3.1 gives a frame-independent, injective, module-linear regular embedding and polar normalization preserving both end splittings. Its invariant complement makes the cylinder ambient regular, satisfying the relative supplier exactly."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "The Statement and Given now require finite CW X, matching both Thom and Morita suppliers. The balanced quaternionic branch, rank-zero line and product conventions are preserved; all six direct uses satisfy the hypothesis."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "updates": [],
    "reason": "Both changed defining interfaces have only draft frontier direct item consumers. No published or outside-frontier consumer was found in their dependency/reference inventories, so no published maintenance finding or repair is proposed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-sugawara-quadratic-modes-well-defined",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "False positive: step 1.1 of lem-the-casimir-operator-is-basis-independent-and-intertwining explicitly identifies sum_i x_i tensor x^i with the inverse form tensor via g tensor g* = End(g), before multiplication into U(g). Thus F4 cites a proved intermediate conclusion, not an inference from the Casimir product alone. For fixed v a finite maximum of current cutoffs kills both normal-ordered tails; the fixed-r bilinear operator contraction is basis independent. No additional prerequisite or item edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-virasoro-algebra",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Confirmed logic defect: centrality implies that rho(C) commutes with every rho(L_m), but does not imply rho(C)=c I_V on an arbitrary module. For example, left multiplication on U(Vir) is a Lie representation and sends 1 to C, which is not a scalar multiple of 1 by PBW. Qualified central charge by the explicit condition C acts as c id_V, retaining the Lie bracket and all module classes. No AC or extra prerequisite is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-sugawara-modes-act-on-currents",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "False positive: the supplier proves precisely [L_m,J_x(n)]=-n J_x(m+n) for every restricted module at k+h^vee != 0 with the same r<0 normal ordering. Applying that proved result is a valid deduction; repeating a supplier conclusion is not a mathematical defect. The complete supplier proof uses stabilized finite cutoffs, invariant tensor cancellation, and the signed boundary sum sum f_n=n, so it covers negative n and n=0 as well. The positive-energy unitary subclass is restricted by definition. No item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "affine-current-algebras-virasoro-and-sugawara",
    "path": "library/quantum-algebra-and-representation-theory/affine-current-algebras-virasoro-and-sugawara.md",
    "route": "owner-page-maintenance",
    "status": "open",
    "reason": "The unassigned owning page repeats the scalar-action presupposition in its Current and Virasoro conventions paragraph. Reported without editing because this dispatch authorizes assigned items and necessary owning contracts/metadata.",
    "affected_use": "Current and Virasoro conventions: \"where $C$ is central and its scalar in a representation is the central charge.\"",
    "invalidated_claim": "Centrality of C does not ensure scalar action on an arbitrary representation, as the left regular U(Vir) representation shows.",
    "minimality": "Replace only that clause by: where C is central; when C acts as cI in a representation, c is its central charge. The bracket, Sugawara theorem and page scope need no change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-affine-vacuum-character-at-level-k",
    "severity": "nonfatal",
    "locus": "statement",
    "reason": "Undefined central-generator notation K is repaired by declaring K=c; the original two-step character proof is valid under this identification.",
    "status": "fixed"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-no-published-effects",
    "id": "lem-affine-vacuum-character-at-level-k",
    "reason": "The three direct item consumers are draft frontier items in batch 48; none requires a mathematical repair. No published consumer defect was found."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-rank-one-heisenberg-vertex-operator-algebra",
    "outcome": "false_positive",
    "status": "closed",
    "locus": "facts-block F2 and proof-step 2.1",
    "reason": "Reconstruction proof 2.1 and 3.1–5.1 explicitly proves the transport identity used in theorem step 2.1; close the rejection as a false positive without editing the theorem.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0809.1380"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-rational-vertex-algebra",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "Definition, both paragraphs",
    "reason": "Made the irreducible admissible summands and their inherited specified grading explicit; removed an unsupported comparison between different module conventions. Nonfatal definition-precision defect repaired.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0607679",
      "https://arxiv.org/pdf/1012.4193"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "No published carrier was edited or found defective. The only direct item consumer of the changed rationality Definition is the draft frozen-frontier example ex-trivial-vertex-algebra-is-rational; its existing homogeneous basis-line proof remains sound. There are no outside-frontier consumer repairs to route from this interface change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-same-marginal-conditional-product-law-well-defined",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "stage": "5-adjudicate",
    "locus": "proof-step",
    "reason": "The rectangle identity gives the Z marginal by setting A=E_X and B=E_Y with C arbitrary, not C=E_Z. Repaired that immediate marginal calculation. The supplied simultaneous-uniqueness lemma explicitly requires AC, already in Given/A1; made that hypothesis visible in the Statement. Product-kernel composition and equality outside the union of the two null sets then prove existence and version independence.",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-standard-borel-conditional-mutual-information",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "stage": "5-adjudicate",
    "locus": "definition",
    "reason": "The original KL compares P_XYZ on X×Y×Z to R on Z×X×Y, so it is undefined for distinct carriers. Both laws now explicitly use Z,X,Y and P_ZXY. Rectangle construction supplies a probability reference independent of kernel versions; explicit AC carries the conditional-law and KL interfaces. MIT 6.441 Chapter 2 Definition 2.4 confirms the product-of-conditional-marginals construction; this repair uses the local joint-law lemma rather than assuming a joint density.",
    "source_urls": [
      "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
    ],
    "familiar": true,
    "uncertain": false,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "stage": "5-adjudicate",
    "locus": "statement",
    "reason": "The finite-KL bridge explicitly assumes AC for the measurable-space KL interface. Added that existing Given/A1 assumption to the Statement. At p=0 or 1 both laws are the same point mass. For 0<p<1 the diagonal ratios are 1/p and 1/(1-p), giving exactly the asserted finite entropy; no arbitrary finite density selection is needed. Also removed the premature internal tag in step 1.2.",
    "source_urls": [],
    "familiar": true,
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-finite-alphabet-conditional-entropy-version-and-chain-rule",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "stage": "5-adjudicate",
    "locus": "statement",
    "reason": "Disintegration and simultaneous uniqueness explicitly assume AC, which the original Statement omitted. Added AC. For finite i,j, the two disintegrations give equality of the event integrals of p_i m_ij and p_ij; testing strict discrepancy sets proves their almost-everywhere equality on one common finite-union null set. The finite rowwise logarithm identity integrates to the chain rule, including zero rows. Version invariance now explicitly covers (X,U)|Z, and finiteness uses the supplied |alphabet|/e bound.",
    "source_urls": [],
    "familiar": true,
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-law-entropy-countable-support-characterization",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "stage": "5-adjudicate",
    "locus": "statement",
    "reason": "The countable determining-algebra supplier assumes AC, and countable union of arbitrary finite atom sets uses it; made this hypothesis explicit in the Statement and A1. Each mass-threshold set is finite. On countable full support the explicit diagonal density is 1/p_i and monotone convergence gives the entropy sum. Otherwise the measurable diagonal outside S×S has positive joint mass and zero product mass by its singleton sections, so KL is infinite. MIT Chapter 2 Theorem 2.4(1) supplies the same complete diagonal-null-set argument.",
    "source_urls": [
      "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
    ],
    "familiar": true,
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-mutual-information-and-conditional-mutual-information-equality-conditions",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "stage": "5-adjudicate",
    "locus": "proof-step",
    "reason": "The original equality criterion compared P_XYZ to a Z,X,Y law and concluded equality on C×A×B without a coordinate permutation. Repaired both directions to use P_ZXY. KL=0 iff equality of probability measures gives the law criterion; conditioning-event tests give the indicator factorization, and bounded simple approximation gives all bounded f,g. The reverse indicator identity determines the entire law by pi-lambda. AC is now explicit as required by KL and conditional independence.",
    "source_urls": [
      "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
    ],
    "familiar": true,
    "uncertain": false,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-uniform-law-has-infinite-self-information-entropy",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "stage": "5-adjudicate",
    "locus": "facts-block",
    "reason": "The Lebesgue definition explicitly postpones countable additivity to its complete-measure theorem. Added that existing published theorem to deps and F1, so restriction to Borel subsets is a countably additive measure, and the box theorem normalizes it and makes every singleton null. Explicit AC supplies countable choice and the repaired law-entropy theorem. The empty atomic set gives infinite self-MI, while the density 1_[0,1] has identically zero f ln f and differential entropy zero.",
    "source_urls": [],
    "familiar": true,
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "thm-mutual-information-chain-rule",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Proof 1.1 constructs the common-Z-marginal law on Z,X,Y; 4.1 identifies the integrated conditional-product divergence with I(X;Y|Z).",
    "reason": "The actual reference-law calculations already use P_ZXY and remain valid. Given/A1 assumes AC but Statement does not; the minimal necessary repair is to state AC, then inspect only its direct consumers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "ex-null-conditional-kernel-version-does-not-change-information",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Proof 3.1 explicitly compares P_ZXY to its reference, using equality of K and K-prime off the P_Z-null singleton.",
    "reason": "The coordinate and version-independence argument remains sound under Given AC. Statement omits AC. In addition F2 and Proof 1.1 infer that restricted Lebesgue measure is a probability without citing the complete-measure theorem; add that existing dependency and citation. No claim needs narrowing.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "ex-coarsening-conditioning-can-increase-conditional-mutual-information",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Proof 1.1 compares the law of (Z,X,Y) to the product reference; 1.2 computes the law of (W,X,Y) against that reference.",
    "reason": "Both computations already use conditioning-first order, so the coordinate correction preserves their values. Given/A1 assumes AC but Statement omits it; explicitly state the existing assumption.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "thm-mutual-information-and-conditional-mutual-information-quantization",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Proof 2.2 retains Z and pushes the reference to rectangles C×A-prime×B-prime using the product of the quantized kernels.",
    "reason": "This is exactly the corrected Z,X,Y reference and its push-forward. Given/A1 supplies AC for generating algebras and conditional laws but Statement omits it; add the actual hypothesis, with no change to either limit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "lem-it-random-cut-ergodic-block-channel-approximation",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Facts F5 and Proof 4.2 use symmetry, chain rules and nonnegativity of conditional information given the marker process E; coordinate-swap invariance is explicit.",
    "reason": "The CMI use remains sound: Statement assumes AC, and swapping both laws preserves KL. Separately F4 calls unit-interval Lebesgue restriction a probability using only the box normalization; add thm-lebesgue-measure-is-a-complete-measure for countable additivity. This is an outside-lane frontier alert, not an adjudication of that item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "def-measure-theoretic-mutual-information",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Definition defines measurable-space KL of the joint law and marginal product without stating AC; its axiom_use field says AC is inherited.",
    "reason": "Outside assigned item scope. The local explicit-choice convention requires the actual inherited AC assumption in this defining interface; the minimal repair is to expose it, preserving the entire definition, and examine direct consumers only if that Definition changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "def-law-entropy-as-self-mutual-information",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Definition defines the self-MI through measurable-space KL without stating AC; its axiom_use field says AC is inherited.",
    "reason": "Outside assigned item scope. The local explicit-choice convention requires the actual inherited AC assumption in this defining interface; the minimal repair is to expose it, preserving the entire definition, and examine direct consumers only if that Definition changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "def-finite-alphabet-conditional-entropy-given-observation",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Definition asserts version independence using simultaneous standard-Borel conditional-law uniqueness without stating AC; its uniqueness supplier explicitly assumes AC.",
    "reason": "Outside assigned item scope. The local explicit-choice convention requires the actual inherited AC assumption in this defining interface; the minimal repair is to expose it, preserving the entire definition, and examine direct consumers only if that Definition changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "All eleven discovered direct item consumers are draft members of the frozen frontier. No published consumer was found for any changed assigned interface, and no published item was edited or adjudicated. The published Lebesgue complete-measure supplier is sound for the cited countable-additivity claim under countable choice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-untwisted-hall-algebra",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The Definition claims only a bilinear Hall product and explicitly assigns finite support to lem-untwisted-hall-product-finiteness. The separate thm-untwisted-hall-algebra-is-associative-and-unital proves associativity by the bijection between quotient subobjects and flags W≤U≤L, and proves the zero-object unit. Its existence makes the algebra title accurate; the finiteness lemma is never claimed to prove associativity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-jordan-block-automorphism-count",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F1 attributes cyclic modules k[T]/(T^r) to a supplier Statement that states only a decomposition into I_r. This is a nonfatal citation gap: the supplier proof constructs Jordan-string blocks, and the missing identification follows explicitly by T^i↦v_(r−i). F1 now cites only the decomposition; new F3 cites the Jordan-string definition, and step 1.1 proves the module isomorphism before counting Hom spaces. The formula and subsequent argument are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0611617v2"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir",
    "source": "step5-rejection",
    "source_rejection": {
      "id": "lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir",
      "model": "gpt-6-luna",
      "context_sha256": "dad540bfd612e3cf62ee9c407fbf184fe24004c6df2f9afca5ed0a60058af4da"
    },
    "proposed_status": "false_positive",
    "severity": "none",
    "reason": "Propose false_positive for the exact assigned rejection; mathematical evidence and repair are recorded in decisions[0] and reviews[0].",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-prime-power-numerical-serre-half-is-the-integral-specialization",
    "source": "step5-rejection",
    "source_rejection": {
      "id": "thm-prime-power-numerical-serre-half-is-the-integral-specialization",
      "model": "gpt-6-luna",
      "context_sha256": "3394cbaf446d8071ffdc02cfe4abffc0d08440dc6971e7a1a2b746699963099f"
    },
    "proposed_status": "false_positive",
    "severity": "none",
    "reason": "Propose false_positive for the exact assigned rejection; mathematical evidence and repair are recorded in decisions[1] and reviews[1].",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-green-hall-pairing-is-nondegenerate",
    "source": "step5-rejection",
    "source_rejection": {
      "id": "prop-green-hall-pairing-is-nondegenerate",
      "model": "gpt-6-luna",
      "context_sha256": "c3f33fe45f6ce3bc6c1c214657707c8812df834cc211eea169a99dca3ef467b3"
    },
    "proposed_status": "false_positive",
    "severity": "none",
    "reason": "Propose false_positive for the exact assigned rejection; mathematical evidence and repair are recorded in decisions[2] and reviews[2].",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-finite-dynkin-hall-algebra-is-simple-generated",
    "source": "step5-rejection",
    "source_rejection": {
      "id": "lem-finite-dynkin-hall-algebra-is-simple-generated",
      "model": "gpt-6-luna",
      "context_sha256": "d034a88f5822beb20d7d3b0215fc379fa746c4a98c266f4f0a65bad873b64229"
    },
    "proposed_status": "fixed",
    "severity": "gap-a-reader-closes",
    "reason": "Propose fixed for the exact assigned rejection; mathematical evidence and repair are recorded in decisions[3] and reviews[3].",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-green-hall-coproduct-is-coassociative",
    "source": "step5-rejection",
    "source_rejection": {
      "id": "lem-green-hall-coproduct-is-coassociative",
      "model": "gpt-6-luna",
      "context_sha256": "4a697367485378dfa3df148cc010e02e53874c463069c23a8bb44e8ef98c0ad3"
    },
    "proposed_status": "false_positive",
    "severity": "none",
    "reason": "Propose false_positive for the exact assigned rejection; mathematical evidence and repair are recorded in decisions[4] and reviews[4].",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-green-hall-coproduct-is-a-twisted-bialgebra-map",
    "source": "step5-rejection",
    "source_rejection": {
      "id": "thm-green-hall-coproduct-is-a-twisted-bialgebra-map",
      "model": "gpt-6-luna",
      "context_sha256": "4810571c52cc874acb3c0756cb59b8740e8b2bf0bd14b9bb876829f511f34468"
    },
    "proposed_status": "false_positive",
    "severity": "none",
    "reason": "Propose false_positive for the exact assigned rejection; mathematical evidence and repair are recorded in decisions[5] and reviews[5].",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0611617v2"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-ringel-map-is-well-defined-and-has-composition-image",
    "source": "step5-rejection",
    "source_rejection": {
      "id": "prop-ringel-map-is-well-defined-and-has-composition-image",
      "model": "gpt-6-luna",
      "context_sha256": "f8ac30b4e028370d56f16771a03c7f6b791f8cc1723c9b9097356d07ba058056"
    },
    "proposed_status": "fixed",
    "severity": "gap-a-reader-closes",
    "reason": "Propose fixed for the exact assigned rejection; mathematical evidence and repair are recorded in decisions[6] and reviews[6].",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "proposed_action": "no_update",
    "reason": "No published carrier was edited, no Statement or Definition changed, and no defective published-consumer use was discovered in these assigned reviews. Published maintenance has no Step-5 adjudication or gate obligation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "proof-step",
    "original_steps": [
      "2.1",
      "3.1"
    ],
    "status": "fixed",
    "reason": "Confirmed a fatal logic gap: the original Proof 2.1 checks vector-stack relations only over finite quiver quotient bases, while the coefficient presentation admits every finite-type Artin base with affine stabilizers. Proof 3.1 therefore did not establish descent through ambient coefficient equalities. The repair keeps the Statement and proves finiteness for all coefficient generators, checks every relation there, then restricts the resulting realization.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0205130v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations",
    "severity": "nonfatal",
    "locus": "proof-step",
    "original_steps": [
      "2.1"
    ],
    "status": "fixed",
    "reason": "The old fiber identification omitted additive-vector-group torsor triviality. This is a valid identification, now justified locally by choosing a geometric torsor point and solving b^q-b=-a to obtain a Frobenius-fixed rational point; the argument also works in rank zero.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0205130v2"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-step5-initial-r1-u55-lem-general-linear-quotient-stacks-are-algebraic",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18T05:46:43.358934+00:00",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-general-linear-quotient-stacks-are-algebraic",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "reason": "Confirmed missing inference: the atlas and diagonal criterion applies only to a stack in groupoids. New step 1.3 descends affine torsors, their actions and equivariant maps using effective affine algebra descent and represented-morphism descent; identities and unique gluing establish both stack axioms. The Statement, atlas and affine diagonal are unchanged, including empty X and rank-zero factors.",
      "adjudication_ref": [
        {
          "file": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
          "id": "lem-general-linear-quotient-stacks-are-algebraic",
          "model": "gpt-6-luna",
          "context_sha256": "a12fd53cdbca94dc656c4a75862ca76459abfc3a97cc900c9c92a1ff36d213ad"
        }
      ],
      "repair_evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
      "independent_review_of_repair": false
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-step5-initial-r1-u55-lem-quiver-exact-sequence-correspondence-is-smooth-and-proper",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18T05:46:43.358934+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "lem-quiver-exact-sequence-correspondence-is-smooth-and-proper",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "reason": "The relative scheme-level Plucker embedding used in step 1.2 was not established by the cited set definition and full-flag statement. Added the existing Plucker-equation and affine-chart suppliers and proved locally over arbitrary C-algebras that their equations have polynomial pivot charts representing direct-summand subbundles. These charts glue functorially to the closed relative embedding, so arrow invariance is a closed incidence condition and every scheme base change of p is proper. Also made parabolic-torsor descent explicit and included the projective-bundle supplier in inherited AC. The dimension calculation e-u and Statement are unchanged.",
      "adjudication_ref": [
        {
          "file": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
          "id": "lem-quiver-exact-sequence-correspondence-is-smooth-and-proper",
          "model": "gpt-6-luna",
          "context_sha256": "e3750d7b921aa39d2e125205804ab116f59ca5ee585bd0e8faf3bf04452e8500"
        }
      ],
      "repair_evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
      "independent_review_of_repair": false
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-step5-initial-r1-u55-lem-quiver-parabolic-levi-borel-model-comparisons",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18T05:46:43.358934+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-quiver-parabolic-levi-borel-model-comparisons",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "reason": "F1 wrongly attributes arbitrary-flag geometry to two-block suppliers, although step 1.1 already contains its own adapted-frame construction. This is a nonfatal attribution defect. F1 now distinguishes the two-block conventions and relative Grassmannian construction from the local arbitrary-flag proof. Step 1.1 explicitly realizes flags and preserved-arrow loci as closed incidence varieties, realizes G/L as the open direct-sum decomposition locus, and gives finite pivot sections. These prove separated quasi-projective finite type, including zero ranks. The common L-frame product comparison has both intrinsic indices pull back to i+2 dim U+2 dim V; growing cohomology gaps and principal-bundle descent give naturality and cocycles without assuming the comparison being proved.",
      "adjudication_ref": [
        {
          "file": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
          "id": "lem-quiver-parabolic-levi-borel-model-comparisons",
          "model": "gpt-6-luna",
          "context_sha256": "a45327fbbc6a229fb5f7c2b2b0e2a390f027593bb2ca4ca6a3666e3738fb89ef"
        }
      ],
      "repair_evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
      "independent_review_of_repair": false
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-step5-initial-r1-u55-ex-jordan-quiver-extension-correspondence",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "at": "2026-10-18T05:46:43.358934+00:00",
      "class": "accuracy",
      "subclass": "missing-choice-scope",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-jordan-quiver-extension-correspondence",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "reason": "Confirmed a nonfatal assumption-accounting defect: F3 invokes the complete-flag lemma for dimension two, whose Statement expressly assumes AC. A1 now records inheritance through both F2 smoothness/properness and F3 projective flag geometry. AC was already in Given and deps, so no claim is weakened. Matrix multiplication gives c+(mu-lambda)t, relative stack dimension is 1-1=0, and the invariant-line calculations and closed incidence properness remain correct.",
      "adjudication_ref": [
        {
          "file": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
          "id": "ex-jordan-quiver-extension-correspondence",
          "model": "gpt-6-luna",
          "context_sha256": "5cc5908fc2752eeb3d9b6fceea3dad379ac42717b445501809b51d79b0a435fa"
        }
      ],
      "repair_evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json",
      "independent_review_of_repair": false
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "rem-preprojective-coha-and-nakajima-action-source-boundaries",
    "severity": "fatal",
    "reason": "The cited theorem concerns the direct sum of TOP homology H_{d(V,W)}(L(V,W)), not full Borel–Moore homology. For A1 and framing dimension 2 the cores Gr(v,2), v=0,1,2, give full Betti dimensions 1,2,1 but the highest-weight-2 sl2 representation has weight multiplicities 1,1,1.",
    "affected_use": "items/rem-preprojective-coha-and-nakajima-action-source-boundaries.md, Source-reported scope, Nakajima paragraph: unqualified Borel–Moore homology is said to give the integrable highest-weight representation.",
    "minimality": "Qualify this paragraph as top Borel–Moore homology and identify the direct-sum degree. No action proof or other source-reported assertions need alteration for this finding.",
    "route": "owner of this unassigned draft frontier item; no edit or adjudication performed",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1611.10000v1"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "No published item was edited or found defective in this bounded assignment. All four repaired carriers and the separately routed Nakajima source-report finding are draft items. Draft findings remain in this run report and canonical defect-ledger proposals; no new published audit or repair classification is claimed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form",
    "defect_id": "nm81-step5-u56-finitary-title",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "frontmatter title",
    "reason": "The title omitted the finite-field qualification: for the one-vertex quiver over an infinite field K, Hom(K,K)=K is infinite. The Statement already correctly restricts finitarity to F_q. Qualified the title and its owning manifest mirror; preserved the general-field heredity and Euler claims and the complete proof.",
    "repair": "Qualified the title to finite-field finitarity and synchronized its unique owning manifest title. Statement and proof remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids",
    "defect_id": "nm81-step5-u56-zero-stack-groupoid",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "Statement; proof step 2.1",
    "reason": "The Statement quantifies over d=0, but the prerequisite defines Z-semistability only for nonzero representations. Its geometric zero locus and trivial G_0 give a one-object groupoid, whereas the claimed semistable-object groupoid lacks an explicit zero convention. Added that convention in the Statement and a separate zero-dimensional case in proof step 2.1, preserving all dimensions and the mass 1.",
    "repair": "Included zero explicitly without a phase, proved its trivial quotient groupoid separately, and synchronized the owning Statement and proof-contract mirrors. Both direct item consumers and the page use remain sound.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1611.03696"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "rem-finite-quiver-hall-counts-and-dt-bps-interpretation",
    "reason": "The phrase “proved on this page” refers to the owning library page, not to the remark carrier. That page lists thm-finite-quiver-hall-wall-crossing immediately before this remark and explicitly describes its proof in construction-order clause 8. The theorem is also a declared dependency; the attribution is accurate.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1611.03696"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-a2-quiver-hall-wall-crossing-pentagon",
    "reason": "The declared dependency def-subobject-first-completed-finite-quiver-hall-algebra-and-tori explicitly defines kappa_M=a_M delta_M with a_M=|Aut(M)|. Substitution in the stated J interface cancels a_M and gives exactly F3; the integration theorem also computes this formula in proof step 1.4. No normalization factor is missing.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1611.03696"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-finite-acyclic-quiver-stability-data",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "open",
    "route": "frontier-owner",
    "affected_path": "items/def-finite-acyclic-quiver-stability-data.md",
    "source_excerpt": "The rational-point groupoid of $\\mathfrak M^{ss}_{\\mathbf d}$ is finite, and\nthe finite-field descent lemma identifies it with the groupoid of finite-field\nsemistable representations and their isomorphisms.",
    "affected_use": "The final Definition paragraph asserts the stack/semistable representation groupoid identification for every dimension vector, but the preceding semistability paragraph defines that predicate only for nonzero representations.",
    "invalidated_claim": "At d=0 the geometric condition is vacuous and the quotient has one zero object with mass 1; the finite-field side is not specified to contain it. The assigned lemma now states its own explicit convention, but that does not rewrite this upstream defining interface.",
    "minimality": "Add an explicit zero-inclusive convention to the defining semistable groupoid, without assigning zero a phase or restricting dimension vectors. Preserve the nonzero stability inequalities and HN factors; the owner must inspect the actual direct consumers after any Definition change.",
    "reason": "The same zero-dimension mismatch appears in the unassigned frontier definition itself. Its last paragraph claims the equivalence although semistability was introduced only for nonzero M. This supplier was read but is outside the four-item assignment and was not edited. Route its minimal convention repair to its frontier owner; this is a separate open finding, not an adjudication of an unassigned tuple.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1611.03696"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-temperley-lieb-diagram-generators-span",
    "severity": "nonfatal",
    "locus": "frontmatter",
    "status": "fixed",
    "finding": "The title says every finite planar pairing diagram although d_i:n-to-n cannot generate a 0-to-2 cup. The Statement and proof correctly establish generation in D(n,n).",
    "repair": "Inserted endomorphism in the item title and its owning batch-57 manifest mirror; no Statement or Proof change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-b60-step5-initial-r1-kauffman-direction-compatibility",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "batch": "60",
      "at": "2026-10-18T05:46:03.768654+00:00",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-framed-kauffman-link-evaluation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Point independence of each fixed-direction expansion does not show that the reverse-direction expansion on a descending knot equals its terminal scalar. The old direct prescription and average were therefore not proved compatible. Removed that second prescription, checked curls separately for over-first and under-first traversal, and derived descending values and equality of both directed expansions only after II/III invariance.",
      "evidence": [
        {
          "path": "items/lem-framed-kauffman-link-evaluation.md",
          "note": "The average now defines every knot, including descending knots. Terminal scalars support the basepoint comparison without assuming compatibility. Curl transport gives -b^(-epsilon)+t(1+h)=b^epsilon for the under-first traversal; II/III invariance then gives L(U)=b^w(U). Expanding the established skein equation recovers Q(D,p)=L(D) for either direction. Checked the subsequent phase conversion, universal-ring injection, integral descending reduction and empty-diagram inverse; Statement unchanged. Precheck and rendercheck both passed. This is a repair review, not an independent review of the repair."
        },
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "Round-bound adjudication and repair review; no independent review of the repair is claimed."
        }
      ],
      "adjudication_ref": [
        {
          "id": "lem-framed-kauffman-link-evaluation",
          "model": "gpt-6-luna",
          "context_sha256": "f1d03ac963bf1033c4978a7e0d257d8c94af5ffef30f3a800a9ea02db4d32639",
          "item_sha256": "4a3cc4087aae0b691cba4796672289a3ab157babd9bdfc6e9e5b4fd7fc89f2e5"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-b60-step5-initial-r1-bmw-rank-one-cup-ideal",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "batch": "60",
      "at": "2026-10-18T05:46:03.768654+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-bmw-kauffman-tangle-basis",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Step 14.1 wrote W_r e_1 W_r under r>0 although W_1 has no e_1. This is nonfatal because step 12.1 already establishes the odd rank-one filtration base, so the inductive advance only needs r>=3 there. Repaired the universally phrased step anyway: at r=1 the cup ideal is zero and W_1=V_1^(1)=Lambda_0; the e_1 decomposition is now explicitly restricted to r>=2.",
      "evidence": [
        {
          "path": "items/thm-bmw-kauffman-tangle-basis.md",
          "note": "Checked the coefficient/sign conversion against the repaired scalar supplier, the specialization pairing and cokernel base change, the algebraic cup slides, diamond span and shuffle filtration. Step 14.1 now handles the scalar rank-one block without an undefined generator; for r>=2 its cup block tensors into I_n^(r-2). The n=0,1, k=0 and adjacent-partner cases remain covered. Statement and dependencies unchanged. This review assesses the repair and does not claim independent review of it."
        },
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "Round-bound adjudication and repair review; no independent review of the repair is claimed."
        }
      ],
      "adjudication_ref": [
        {
          "id": "thm-bmw-kauffman-tangle-basis",
          "model": "gpt-6-luna",
          "context_sha256": "3990f05df48394111b98b2b06fb6f7eed18c0261f8bb971a80a16a19b84a1f55",
          "item_sha256": "b86f1a1c38a4eafdd7cd87ffa8dcce336afba245f586eb12d8fdafe423233714"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-b60-step5-initial-r1-rank-normal-form-rejection",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "batch": "60",
      "at": "2026-10-18T05:46:03.768654+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-symmetric-and-alternating-rank-coordinate-rings",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "false-positive",
      "description": "The actual cited supplier lem-gram-map-fibers-and-rank-strata proves in Proof step 1.1 that any rank-r alternating matrix is congruent to J_r direct-sum zero, with r even. The consumer cites the normal form in that item, not an unsupported claim imported from its Statement. That proved intermediate result is sufficient: coefficients of omega^(n+1) are (n+1)! times the principal Pfaffians, and in block form this power is nonzero exactly when r>=2n+2.",
      "evidence": [
        {
          "path": "items/lem-symmetric-and-alternating-rank-coordinate-rings.md",
          "note": "Read the complete Gram-map supplier: step 1.1 proves precisely the congruence form used in consumer step 1.1, including the radical and even rank. Checked the exterior-power Pfaffian criterion in characteristic zero, m=0, and empty generator families. The actual normality supplier Statements assert integrally closed domains for exactly these quotient ideals under AC, which the consumer explicitly assumes, so primality and normality in step 2.1 follow. No source, contract or page edit is needed; its guard matches the frozen before guard."
        },
        {
          "path": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "Round-bound adjudication and repair review; no independent review of the repair is claimed."
        }
      ],
      "adjudication_ref": [
        {
          "id": "lem-symmetric-and-alternating-rank-coordinate-rings",
          "model": "gpt-6-luna",
          "context_sha256": "be2b6ab6d6de6533f798bcf5464688033ad948e134b5fcdb395df88318f05790",
          "item_sha256": "e5e2ec75c17976b019af967988fbd0a4af9c6eac6d0b09133c04ac8992b0b9d4"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "nm81-b60-step5-initial-r1-kauffman-empty-residual",
      "run": "non-ml-math-remaining-81-2026-10-18",
      "batch": "60",
      "at": "2026-10-18T05:46:03.768654+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-framed-kauffman-link-evaluation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "description": "Step 5.1 factored hL(R) from a residual link without excluding R empty, while the sum-skein recursion defines L only on nonempty links.",
      "repair": "Explicitly separate R empty, omitting hL(R) and using hL(A)L(B) for both two-component terminal orders.",
      "evidence": [
        {
          "path": "items/lem-framed-kauffman-link-evaluation.md",
          "note": "Proof 5.1 now treats the empty residual link before reducing to the two-component comparison."
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-temperley-lieb-rank-one-lusztig-tilting-category",
    "outcome": "false_positive",
    "reason": "The frozen/current carrier has no ribbon-lemma entry in deps or justified_by: its guard equals assignment before f2343e192927179f3c22c323dc0008542f4958fd208988c3c16ae18493de41b9. The sole linked ribbon lemma is explicitly a nonpremise in Remarks. The alleged reverse dependency and cycle are absent; no edit is warranted."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-temperley-lieb-closure-trace-and-partial-trace",
    "outcome": "false_positive",
    "reason": "False positive under the actual library convention: def-commutative-ring defines a commutative ring as a ring, and def-ring includes a multiplicative identity in axiom R2 and explicitly applies that convention throughout the library. Thus delta^0 and Tr_0(1)=1 are defined under the original hypotheses. The proposed wording clarification was reverted; the item is byte-identical to its assigned guard."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "The finite-digit clauses silently presupposed finite ell, while the item also treated ell=infinity. Qualified the opening digit data, reflection and nested-sign clauses and their proof steps explicitly; retained the full singleton/nonvanishing branch. The bound sum_{j<k} n_j s_j <= s_k-1 proves separation and reflection, and carry-free nested differences satisfy the proved digitwise binomial test. Strict scoped contract check passes after repairing malformed derivation mirrors."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "The separately specified bases p_0 and p_1 are sound, but the unqualified recursive clause also permitted r=0 and an undefined cap-cup U_0 on one strand. Restricted that clause to r>=1; the denominator range [2],...,[n] and all projectors are preserved. This repairs the boundary indexing without altering the recursion or asserting a necessity criterion for other projectors."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-temperley-lieb-general-theta-net-evaluation",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "F2 previously took the recursion from the property lemma Facts/Proof rather than its Statement. Added the defining-recursion item to deps and cited its Definition explicitly, including p_0,p_1 and a>=1. The existing finite-matrix proof is retained: symmetric JW kernel entries, nested contraction and adjacent-interval Vandermonde give the factorial value before specialization in the unit localization. No Statement changes. Owning manifest and citation mirrors were synchronized under the acquired shared-write lock; strict focused contract checks pass."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-temperley-lieb-critical-standard-modules-are-simple",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "F3 incorrectly attributed polynomial continuation to each Gram quotient instead of the entire product. For t+1=6,j=4, [10]/[4] has poles at delta=+/-sqrt(2), so it is not a polynomial. Corrected F3 and step 2.1 to use local removable continuation at the chosen critical root: nonmultiples give epsilon, multiples j=s*kappa give ((m+s)/s)(-1)^(mv), always nonzero. The polynomial product therefore has nonzero value. Also corrected nonexistent step 2.2 to 2.1. Statement unchanged; the contract mirrors were synchronized under the acquired shared-write lock and pass strict focused checks."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-temperley-lieb-signed-forest-candidates-and-their-composition",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "The terminal assertion of 6.3 was false: Att_{1,1} is the identity and a simple cup in E gives U_i E=-T E, not zero. Kept the proved intertwining relation and stated its correct consequence for annihilated inputs. Step 7.1 now explicitly uses the already annihilated V_u from 5.1 before applying 6.3; uniqueness and the chain coefficient then establish the same composition identity. Checked coefficientwise finiteness, exposed-arc cancellations, finite missing-nip binomial and the wall digit test against Cox-Graham-Martin section 5. Statement unchanged; the contract mirrors were synchronized under the acquired shared-write lock and pass strict focused checks."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-temperley-lieb-root-gram-rank-and-reflection-dimensions",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "The convention assigns kappa=infinity at nonroots, but kappa>=2 alone did not explicitly exclude that case from Euclidean division and the reflection index. Added finite kappa in the Statement and Given, as required by the referenced reflection definition. Checked the regular spectral-projector Gram splitting and both dimension recurrences; the four remainder cases, kappa=2 and out-of-range labels give the reflected dimension. The direct classification consumer already treats infinity separately by its nonvanishing determinant and applies this lemma only to finite-order reflected pairs."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All direct item consumers of the three changed defining interfaces are draft frozen-frontier items. No published consumer defect or outside-frontier maintenance target was found."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-tracial-standard-form-and-normal-functional-vectors",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "affected_use": "F11 and Proof step 4.1 import nuclear characterization and finite-rank trace-norm density from a Statement that supplies only the Banach-ideal interface.",
    "correction": "Directly cite the existing nuclear-series lemma, add its declared dependency and exact contract citation, and prove finite-rank density by its tail bound.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ucla.edu/~popa/Books/IIun.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-temperley-lieb-right-closure-preserves-trace-radical",
    "outcome": "false_positive",
    "reason": "The rejected interface consequence follows by composing the two identities explicitly asserted by the conditional-expectation supplier. The actual radical proof needs only E_n trace preservation and bimodularity. Do not create a confirmed-defect row for this rejection.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-yangian-evaluation-module",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "disposition": "fixed",
    "reason": "The Definition falsely asserted a pole for every allowed module; W=C with zero Lie action disproves it. Corrected to at most a simple pole without restricting modules or changing the evaluation action.",
    "source_rejection": {
      "model": "gpt-6-luna",
      "context_sha256": "1744ca12a6f86c8685c3f1987da24f07cd38f1ac83e3c2080bcb93e4a9b65cb8"
    },
    "pre_sha256": "48315761ca2d383e8e77dc28952d048468ffcd68a6887a35280700c748f25840",
    "post_sha256": "9b7b5147612919051deeaf442f1879cbf72ce486775507216c8e9d110e503e6f",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/hep-th/9409025"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update",
    "reason": "All four direct item dependency/reference consumers are draft frozen-frontier items. No published direct consumer or outside-frontier affected use was found in the item and page reference search; no published repair is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-pa36-module-global-sections-derived-cohomology",
    "severity": "nonfatal",
    "reason": "F5 omits the supplied-datum qualification, but the datum fixed by def-sheaf-cohomology-derived-global-sections is on all abelian sheaves, so M, the terms and all cycles automatically lie in its domain. The injective-module embedding, exact module extension by zero and flasqueness arguments are valid. Repaired F5 and step 3.1 to name the datum and verify its conditions explicitly; the Statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-pa36-p1-line-bundle-cohomology",
    "severity": "fatal",
    "reason": "On U0 every polynomial times e0 is a section regardless of d. The proof correctly computes the intersection C[z] intersect z^d C[z^-1], which describes restrictions of global sections on P1. Corrected that false literal Statement clause without changing any dimension or basis; the Laurent quotient also verifies d=-1 and d=0 and all higher-degree vanishings.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-pa36-nilpotent-normality-and-springer-functions",
    "severity": "nonfatal",
    "reason": "The cited supplier Statement omits these auxiliary facts, but its complete local proof establishes them: step 1.1 is a regular-sequence/CM argument, step 1.2 gives r principal sl2 strings and centralizer dimension r, steps 3.2/4.2 give nilpotent conjugacy, and 6.1/7.1 give regularity at e. Repaired F1 with precise proof locators. Checked the codimension-two parabolic incidence bound, singleton geometric fibers plus characteristic-zero degree argument, and finite integral global-functions argument; no Statement change.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-pa36-localization-adjunction",
    "severity": "fatal",
    "reason": "F2 cited only an O-module tensor definition and quasi-coherence definition for an A-relative affine computation. Added the actual PBW and affine-equivalence suppliers and proved on every distinguished open that Q_f tensor_A V equals (Q tensor_A V)_f, with commuting left O/right A actions. Explicit balanced tensor maps prove the adjunction, so arbitrary V lands in QCoh without a flatness or finiteness assumption. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.numdam.org/item/AST_1989__173-174__55_0.pdf",
      "https://yisun.io/notes/dmod.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "cor-pa36-category-o-localization",
    "severity": "nonfatal",
    "reason": "Step 3.1 explicitly uses def-pa36-flag-tdo-and-module for the central quotient, but deps omitted it. Added that direct dependency. The proof obtains integral weights from finite-length highest-weight factors, integrates finite upper-nilpotent weight spaces by exponential/BCH, and restricts the regular equivalence to rational B-actions and exact central annihilation. No mathematical claim changed.",
    "uncertain": false,
    "source_urls": [
      "https://www.numdam.org/item/AST_1989__173-174__55_0.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-pa36-finite-dimensional-integral-central-character",
    "severity": "nonfatal",
    "reason": "The Example and all three verification steps already concern the irreducible V(n rho), whose exact character is chi_(n+1)rho=chi_-(n+1)rho with strictly negative nonzero integral pairing for n>=0. The broad title incorrectly suggests a single exact character for arbitrary finite-dimensional sums: V(0) direct-sum V(rho) has distinct characters. Corrected only the title to specify irreducibles; no Example or proved claim was narrowed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "cex-pa36-positive-twist-global-sections-fail",
    "route": "frontier owner; outside this assigned item lane",
    "adjudicated": false,
    "locus": "Proof 2.1",
    "itemHashGuard": "9a051adf807d7ff04f5825d8054de274bd0c4f0c4e06d3aeaa115851eecceab0",
    "source_excerpt": "By [F3], $H^1(X,M)$ is the first right-derived functor of $\\Gamma$ in the $\\mathcal D_\\kappa$-module category.",
    "affected_use": "The nonexactness inference uses derived global sections in all module sheaves while the stipulated D-module category requires underlying quasi-coherence.",
    "invalidated_claim": "The displayed cohomology calculation remains correct, but the cited comparison alone does not establish nonexactness on the quasi-coherent subcategory.",
    "minimality": "Add the quasi-coherent D-module exact sequence 0 -> M -> j_*(M|U) -> Q -> 0 for a standard affine chart U. The dense-open restriction map is injective for this line bundle, its direct image is quasi-coherent and acyclic, and H1(M) != 0 forces Gamma(j_*(M|U)) -> Gamma(Q) not to be onto. No Statement change is needed.",
    "reason": "Confirmed the Step-4 reader concern against the unchanged current proof. The intended conclusion is true, but the all-module-derived-functor argument needs the stated quasi-coherent exact-sequence bridge. This is an owner alert, not an assigned adjudication or item edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-open-finding",
    "id": "ex-pa36-integral-line-bundle-translation",
    "route": "frontier owner; outside this assigned item lane",
    "adjudicated": false,
    "locus": "Verification 3.1",
    "itemHashGuard": "9c596b04db72591f0c6afdec2e267d8c0dc54d260e69c3093ae90efae500ad5e",
    "source_excerpt": "By [F4], global sections is not faithful and not exact at this translated twist.",
    "affected_use": "The nonexactness inference uses derived global sections in all module sheaves while the stipulated D-module category requires underlying quasi-coherence.",
    "invalidated_claim": "The displayed cohomology calculation remains correct, but the cited comparison alone does not establish nonexactness on the quasi-coherent subcategory.",
    "minimality": "Add the quasi-coherent D-module exact sequence 0 -> M -> j_*(M|U) -> Q -> 0 for a standard affine chart U. The dense-open restriction map is injective for this line bundle, its direct image is quasi-coherent and acyclic, and H1(M) != 0 forces Gamma(j_*(M|U)) -> Gamma(Q) not to be onto. No Statement change is needed.",
    "reason": "Confirmed the Step-4 reader concern against the unchanged current proof. The intended conclusion is true, but the all-module-derived-functor argument needs the stated quasi-coherent exact-sequence bridge. This is an owner alert, not an assigned adjudication or item edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published item was edited or adjudicated. The only changed Statement belongs to the projective-line lemma, and both discovered direct item consumers are draft frontier items whose uses remain sound; no published consumer repair or outside maintenance event was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "lem-simply-laced-quantum-braid-symmetries-preserve-the-integral-form",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "proof-step",
    "location": "8.1",
    "finding": "At c=1,t=2 the claimed Vandermonde identity has the wrong difference, so integral toral preservation was unproved. Replaced it by T(c,t)=q^(-t)T(c-1,t)+q^(c-t)K T(c-1,t-1), derived by factoring the toral product. Induction on t obtains T(0,t) from E^(t)F^(t), then all shifts in both directions using Laurent units. No statement or dependency changed.",
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-root-of-unity-weyl-and-dual-weyl-module-families",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "statement",
    "finding": "The definition allowed reducible finite simply-laced systems while its category supplier selects a simple system and h was unspecified for unequal components. Preserved the full finite-type scope: h is the maximum component Coxeter number, full weight conditions apply to every component, and commuting integral component forms identify their tensor product by the integral triangular bases. Tensor coproduct, antipode and product pivot provide the stated duality for all finite modules, including modules not themselves pure tensors."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "none",
    "reason": "Both repaired carriers are draft. The sole changed Definition has ten direct item consumers, all draft frontier items; the owning page retains its simple quotient branch. No potentially defective published or outside-frontier use was found.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-quasi-bialgebra-and-quasi-hopf-algebra",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The rejected sentence is correct. In cex-a-quasi-bialgebra-need-not-be-quasi-hopf the universal assertion is explicitly under Statement refuted. Its monoid algebra has a nonidentity idempotent group-like e; Phi=1 forces beta alpha=alpha beta=1, and the quasi-antipode identities would make e invertible, a contradiction. The displayed definition agrees with EGNO Definition 5.12.5 and Definition 5.13.2, including the bijectivity convention.",
    "uncertain": false,
    "source_urls": [
      "https://math.mit.edu/~etingof/egnobookfinal.pdf",
      "https://arxiv.org/pdf/q-alg/9708023"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-quasi-bialgebra-modules-form-a-monoidal-category",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "location": "proof-step",
    "subclass": "citation-missing",
    "disposition": "fixed",
    "reason": "The mathematical theorem is valid, but Proof 1.2 and 2.1 use coherent vector-space identifications without declaring the published elementary coherence lemma required by the cited conventions. This is a nonfatal missing citation: that lemma proves the needed naturality, pentagon and unit triangle on spanning elementary tensors, without any new hypothesis. Added it as dependency and F8, explicitly typed both pentagon paths, corrected the triangle domain to (U tensor k) tensor V, and made unit naturality and inverses explicit. The quasi-coassociativity intertwiner and both pentagon products have the correct multiplication order; middle-counit normalization gives the triangle. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://math.mit.edu/~etingof/egnobookfinal.pdf",
      "https://arxiv.org/pdf/q-alg/9708023"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "No defective published supplier or consumer was found in this bounded review. No published item or public Statement/Definition was changed; there is no published-maintenance finding to merge.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-unequal-parameter-weight-function-and-coefficient-order",
    "outcome": "false_positive",
    "evidence": "The permitted forward justified_by discharge does not form a logical prerequisite cycle; the definition uses no premise supplied by the extension lemma."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "evidence": "F6 included an unused two-letter-deletion procedure absent from the cited exported Statement. Removed that clause, retaining the complete arbitrary-subword equivalence used by step 4.1. No Statement/Definition changed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "frontmatter",
    "finding": "The title claimed a p-adic origin although q>1 is arbitrary real.",
    "repair": "Title now states the actual real affine-Hecke scope."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-hh-sl2-q3-iwahori-convolution-corner",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "proof-step",
    "location": "1.1",
    "finding": "I is not open in the ambient Z_3^4 determinant hypersurface.",
    "repair": "Use closedness in Z_3^4 for compactness and its open entry conditions relative to G for openness, before Haar normalization."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-hh-affine-hecke-parabolic-subalgebras-and-central-characters",
    "finding": "The definition-to-discharge justified_by link is the required schema pattern, not a reverse logical prerequisite.",
    "evidence": "Definition deps contains PBW only; filtration deps contains the definition, and its proof 3.1 proves the orbit property without assuming it."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-hh-affine-hecke-standard-module-unique-irreducible-quotient",
    "finding": "Generalized-weight exactness is proved in the cited supplier, although not separately listed in its Statement.",
    "evidence": "Filtration proof 2.1 explicitly constructs simultaneous generalized eigenspace decompositions and polynomial projections, and states exactness in invariant-subspace sequences."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-daha-a1-affine-normal-words-span",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited DAHA Definition explicitly imposes ZZ^{-1}=Z^{-1}Z=1 in relation 1, and the Given fixes that generator-and-relation algebra. Thus adjacent lattice letters multiply to Z to the sum of their integer exponents. F1 is a summary, not a replacement for the defined algebra. The Bernstein corrections are finite Laurent sums; the lexicographic reduction lowers Hecke count on correction terms and lattice/reflection inversions on main terms, after which the quadratic and pi relations give the claimed alternating spanning words. No independence or choice is used.",
    "context_sha256": "adab283483f1c09395ab250f8cd87d097b2258d8e3c54b47c9231d8e1a25a9fa",
    "model": "gpt-6-luna",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "rem-daha-skein-and-physical-knot-interfaces-require-specific-maps",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The text says This page, not This item. Its owning A-page contains the quotient presentation, the Laurent-quotient lemma and the complete polynomial-operator relation-check proof; the representation definition explicitly identifies that well-definedness supplier. The remark asserts no skein map or physical theorem and correctly lists the extra data and relation checks those interfaces would require. A prose remark need not reproduce the page proofs or turn all page items into logical dependencies.",
    "context_sha256": "d582458be5d7f78227bbf2f733f7be61b400d5523944b3c4167579bdba1dda15",
    "model": "gpt-6-luna",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-daha-a1-y-sum-restricts-to-macdonald-operator",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "Step 3.1 inferred equality of coefficients of powers of Y from equality in the represented Y algebra without proving that those powers are independent. Generation by an invertible element only supplies a quotient of a Laurent algebra, so this is an unsupported inference in the given proof. Replaced it by p(Y)=(p(Y)+p(Y^{-1}))/2 and paired the averaged coefficients; this uses exactly the stated invariance and characteristic zero, and is valid even without injective evaluation. The recurrence for Y^n+Y^{-n}, together with the checked restriction Y+Y^{-1}=D and preservation of V, completes the unchanged claim.",
    "context_sha256": "be345734a6ec215e3a5c2faf7090f4db74a86ddd890a61578b9afa97707b479d",
    "model": "gpt-6-luna",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/9501219"
    ],
    "familiar": false,
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "unsupported-inference",
    "location": "proof-step",
    "step": "3.1",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-page-finding",
    "id": "double-affine-hecke-algebras-and-macdonald-theory",
    "path": "library/hopf-hecke-algebras/double-affine-hecke-algebras-and-macdonald-theory.md",
    "owner_route": "batch-72 page owner; outside this item-only assignment",
    "severity": "nonfatal",
    "disposition": "open",
    "source_excerpt": "[[thm-daha-a1-polynomial-representation-faithful]] proves faithfulness for non-root-of-unity $q$ and nonzero $t$ by a local leading-substitution argument.",
    "affected_use": "The Locally proved construction page bullet attributes a specialized-parameter faithfulness theorem to the linked formal-parameter theorem.",
    "invalidated_claim": "The linked Statement only proves faithfulness over Q(q,t) with algebraically independent parameters and explicitly makes no coefficient-specialization claim.",
    "minimality": "Change this page bullet to generic faithfulness over Q(q,t), matching its first paragraph and the theorem. No theorem change is necessary or licensed by this assignment.",
    "reason": "Confirmed the digest concern by comparing the exact page sentence with the current theorem Statement. The page overstates the parameter range of its cited result; recorded for owner repair without editing the page or adjudicating the unassigned theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-rational-cherednik-log-connection-meridian-eigenvalues",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The positive arc is not determined by an arbitrary real lift theta of zeta. With zeta=i, theta=-3pi/2, R=1/2 and g=1, the positive-arc transport exp(i*pi/4) differs from exp(-3i*pi/4). Restricting theta to the positive arc angle 0<theta<=2pi repairs the claim, including a full turn for zeta=1. Sector conjugacy and the Gronwall limit establish exactly the characteristic-polynomial assertion, without diagonalizability.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "severity": "fatal",
    "defect_type": "logic",
    "post_sha256": "26419cf09c171f888b12aa236e3d831b883fb6367ebf071c321a84ee7e106f9a"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-rational-cherednik-costandard-orthogonality-and-character",
    "outcome": "false_positive",
    "status": "not-a-defect",
    "reason": "F2 explicitly cites the finite-length proof, not merely its Statement. That supplier proves the Euler commutators and W-invariance in step 1.1, defines a_E and standard weights a_E+d in step 2.1, proves local finiteness in steps 2.2-3.1 and finite generalized weight spaces in step 4.1. Its step 3.2 proves unique heads. These are precisely the intermediate facts used here, so the alleged missing mathematics is present in the declared dependency.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0212036"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-rational-cherednik-category-o-projective-generator-from-generalized-standards",
    "outcome": "false_positive",
    "status": "not-a-defect",
    "reason": "F1 expressly invokes the Euler/finite-length proof. Its dependency proves Euler commutators (1.1), standard eigenvalues (2.1), Euler local finiteness (2.2-3.1), finite generalized weight spaces (4.1), and finite length (7.1). The present step 1.1 itself derives the spectrum inclusion Sigma+Z>=0 from standard simple quotients and a finite composition series, and proves exactness by taking the appropriate generalized eigencomponent of a preimage. Thus the alleged absent uniform-bound prerequisites are actually proved, rather than assumed from the shorter supplier Statement.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0212036"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-rational-cherednik-dunkl-localization-and-flat-connection",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The associated-graded algebra in F2 and step 1.1 was incorrectly written (P smash W) tensor C[h], which makes W commute with the y-symbols. The crossed-product relation w y w^{-1}=w(y) survives the y filtration, so the correct algebra is (P tensor C[h]) smash W with diagonal action. The repaired graded map is coefficientwise localization in the direct sum over W, hence injective; leading symbols then prove injectivity of the Dunkl map. This is a logic defect in the written graded-algebra identification.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1001.0432"
    ],
    "familiar": false,
    "severity": "fatal",
    "defect_type": "logic",
    "post_sha256": "1abe08bd721a48fa5fd07a1d32b89720d511e6f196c804783fc6057a953c73df"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-cherednik-nilpotent-induced-connections-have-moderate-growth",
    "outcome": "false_positive",
    "status": "not-a-defect",
    "reason": "The cited standard-residue lemma proves the polynomial identity [y,f]=partial_y(f)-sum_s c_s alpha_s(y)(f-sf)/alpha_s s in its step 1.1, before imposing any zero inducing action. In the present induced module, y(f tensor v)=[y,f](1 tensor v)+f tensor yv. Adding the localization correction sum_s c_s alpha_s(y)/alpha_s (1-s) cancels the sf tensor sv terms and gives exactly the displayed step 1.1 formula, with f tensor yv retained. This is a direct calculation already stated here, not an unsupported application of the standard-module-only connection conclusion.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0212036"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-secondary-finding",
    "id": "lem-rational-cherednik-dunkl-localization-and-flat-connection",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The Step-4 digest correctly identified a misleading Etingof-Ma source locator: sections 5.1-5.2 concern geometric constructions and completion. The assigned item now points to localization Proposition 3.12 in 3.4 and KZ in 6.2, with the corresponding PDF pages.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1001.0432"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-existing-resolution",
    "id": "thm-laurent-coefficient-formula-and-uniqueness",
    "status": "already-repaired-outside-this-dispatch",
    "reason": "The digest alert was valid for the old proof: integrating the truncation only isolates c_n when N>=abs(n). Current proof step 2.1 explicitly fixes n and requires N>=abs(n), so the eventual equality used in step 3.1 is sound. No published item was edited or adjudicated by this dispatch. The published item already names an owner repair receipt; preservation of that receipt and its maintenance accounting belongs to the owner.",
    "affected_use": "The batch monodromy-algebraization argument uses Laurent coefficient estimates to bound finite pole orders; the corrected eventual-truncation formula preserves that use.",
    "invalidated_claim": "The old phrase every finite sum was incorrect when the truncation excludes the index n; the limiting coefficient formula itself remains valid.",
    "minimality": "Only the truncation range qualification is necessary. It is present in current proof step 2.1, and the published Statement is unchanged.",
    "route": "Owner published-consumer maintenance; current item already points to research/non-ml-math-remaining-81-2026-10-18-owner-step4-published-alerts-six-root-integration/published-recording/receipts/thm-laurent-coefficient-formula-and-uniqueness.json.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-connected-poincare-cover-and-positive-energy",
    "model": "gpt-6-luna",
    "context_sha256": "86fe5ed133140a59254aaf1c28d42cca973271fb22dbdd7dd19a390992dcf1dc",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The arbitrary-carrier construction is already explicitly supplied in the Definition by spectral-lemma steps 2.1–7.1 and the nondegenerate C0 theorem, whose Statement has no separability restriction. Those steps work for each vector on arbitrary H, since N=R^D is sigma-finite and continuous vector orbits are separable. The missing direct deps edge is a nonfatal dependency declaration defect; added that edge and its owning manifest mirror without changing the Definition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-mackey-induction-classification-for-regular-euclidean-duals",
    "model": "gpt-6-luna",
    "context_sha256": "173f3616dda7674643ad1f3941498e23a28c96142d5603b979b1180784d52647",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Step 4.1 invokes a countable basis on O without establishing its subspace topology is second countable. This is a nonfatal local gap: step 2.1 already supplies an equivariant Borel isomorphism to the second-countable homogeneous quotient X. Repaired the support argument on X using F9, covariance, countable additivity and transitivity, then applied imprimitivity to both separable summands. The section cocycle, spectral concentration, direct-sum contradiction and orbit/little-group equivalence remain valid; Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.imsc.res.in/~sunder/imp.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-null-little-group-unitary-duals-for-all-dimensions",
    "model": "gpt-6-luna",
    "context_sha256": "85b554e22baeae487f0552028b9548b39a8a743bb419cdc48452e476baa4d7ec",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The measure is genuinely Radon: Mackey proof step 2.1 explicitly chooses it on the homogeneous quotient from its F5. In this application the quotient is homeomorphic to the compact sphere, so the pushed measure is finite and full-support; disjoint nonempty caps give nonzero orthogonal L2 sections. The local F2 omitted that essential qualification. Repaired F2 to cite the exact proof construction and retain strongly continuous unitary qualifiers; classification, rotation stabilizers, D=3 phases and signs, D=2 trivial stabilizers, and nontrivial translations remain valid. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-positive-energy-wigner-mackey-classification-for-connected-covers",
    "model": "gpt-6-luna",
    "context_sha256": "73879bebfd8dc2485cfcdb3cf5e6310c6ffe72fb14d611ba5c29695b24f9c082",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F7 guarantees continuity only after its inducing representation is strongly continuous. The omitted verification is elementary, not a failure of the classification: invariance of chi_p under K_p gives multiplicativity, and the displayed norm bound reduces strong continuity of chi_p(a)theta(h) to continuity of chi_p and strong continuity of theta. Added that argument before applying F7; the forward cone-invariance implication, disjoint-orbit PVM converse, zero orbit and conjugate little-group equivalence remain sound. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-d2-zero-orbit-has-nontrivial-lorentz-character",
    "model": "gpt-6-luna",
    "context_sha256": "8b1cab7495a3f356205033fdef44a33365feec56696937f939d8be691f6b17dc",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F2 omitted the classification supplier's strong-continuity hypothesis, so it overstates the cited result. Added strongly continuous in F2. The actual theta_s(r)=exp(isr) is continuous, unitary and irreducible on C; induction at p=0 is from the whole group, translations are trivial, its PVM is concentrated at zero, and evaluation at r=pi/s gives -1. The example itself and its dependencies remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-d3-irrational-massive-spin-fails-finite-cover-descent",
    "model": "gpt-6-luna",
    "context_sha256": "3fa38d4c34f34c3d09239b2d9be2f76ecc83aca5a0feca2e6b8fc23b7e6d8c34",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "False positive: the descent supplier explicitly declares axiom_use: AC is inherited from the Mackey induction classification and Schur's lemma; its A1 and proof step 2.1 also identify AC in induction-action and Schur suppliers. Hence the example accurately inherits AC through both F2 and F3 even though the descent Statement does not repeat it. The continuous scalar character gives theta(z^N)=exp(2pi i N sqrt2); descent requires N sqrt2 integer, contradicted by the parity proof of irrationality for every N>=1. No edit warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-d3-null-signs-and-central-phases",
    "model": "gpt-6-luna",
    "context_sha256": "ba478ddc2f7dbc01090439bd343b6cff6668a52c921b5041cddf646e45ec6464",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The rejection's AC rationale is not correct: both F2 and F3 explicitly inherit AC in axiom_use and their Facts/Proof, so A1 remains unchanged. Nevertheless the assigned item has a confirmed nonfatal defect independently identified by the digest: F2 says every representation is one displayed character, whereas C^2 with the trivial action is a counterexample. Restricted F2 to irreducible strongly continuous unitary representations. The proof already uses continuous one-dimensional characters, separates signs by values i and -i, and computes the independent phase exp(2pi i alpha) with descent exactly N alpha integer. Thus the actual item defect is fully repaired without weakening the Example.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-outside-assignment-finding",
    "id": "ex-d4-helicity-and-continuous-spin-central-parities",
    "status": "owner-review-required",
    "severity": "nonfatal",
    "path": "items/ex-d4-helicity-and-continuous-spin-central-parities.md",
    "affected_use": "Proof 2.2: In the double-cover branches z acts as epsilon I by F6.",
    "invalidated_claim": "The cited F6 computes the Poincare induced action from the little-group action; it does not establish the intermediate action of z in the little-group induction introduced at step 1.2. The parity conclusion is correct but needs that intermediate calculation.",
    "minimality": "For E=R^2 semidirect Spin(2), z is central and belongs to the inducing subgroup. In its covariant model F(z^{-1}x)=F(xz^{-1})=sigma_epsilon(z)F(x)=epsilon F(x); the quotient action is identity, so the density factor is 1. Insert this calculation before invoking F6. No Statement/Definition change is needed. This unassigned frontier item was not edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-current-disposition",
    "id": "thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h",
    "status": "already-resolved",
    "path": "items/thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h.md",
    "affected_use": "Digest alert concerned final Proof 3.1 QED/tag order and Sources heading separation.",
    "invalidated_claim": "No current mathematical or layout defect was found at this locus; current Proof 3.1 ends with justification tags then QED, and Sources is a standalone heading on line 69.",
    "minimality": "No edit; preserve the original digest and existing published repair evidence. This observation supplies no published adjudication or independent audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ising-unitary-normal-data-and-ribbon-coherence",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "proof-step 1.1",
    "finding": "Noncanonical ordered sums do not give a skeletal carrier; repaired by canonical multiplicity triples and explicit matrix tensor coordinates.",
    "post_sha256": "962920a5f68f31c3717804054d34b35fed25f97375828ea608952429ed1cb5d6",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0011037",
      "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-anyonic-local-channel-projectors-are-orthogonal",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "Statement and Facts F1/F3",
    "finding": "Arbitrary-charge projectors were undefined by the repeated-charge supplier; repaired by an explicit arbitrary-charge construction and proof.",
    "post_sha256": "4a6a682e936409c64f0c64357c97c354a46fe4743380fd3eec7a7365e1157be7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "Neither repair changes any published item; both direct consumers of the changed theorem are draft frozen-frontier items and remain sound. No published-consumer defect was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-integral-eilenberg-maclane-offset-five-homology-vanishes",
    "severity": "fatal",
    "status": "fixed",
    "reason": "Relative Hurewicz originally lacked its CW-pair hypothesis. The repair explicitly lifts a marked disk to the path total; absolute Hurewicz and the singular pair boundary isomorphism identify its generator, and UCT evaluation proves the needed relative lift. The Statement is unchanged.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "00b476897f2db190c696504a8591477640efeb5d7212eb646cf3eaa5035b65e9",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-maslov-correction-composes-for-lagrangian-relations",
    "severity": "fatal",
    "status": "fixed",
    "reason": "The unqualified identity claim fails for horizontal, vertical and diagonal lines in the symplectic plane, whose Wall signature is +1. Require identity of the specified object (V,λ); its adjacent Lagrangians agree. The general relation cocycle is unchanged.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "1cba5fe6ba338ac476d7e60143fdd0fc180ed2b217a30be7a1e62e69e6be12aa",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-symmetric-rep-z2-hopf-matrix-is-singular",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F1 misattributed representation data to a definition. Added the involution eigenspace decomposition, simple objects, tensor rule and ordinary pivotal trace locally. Double flips give four Hopf entries equal to one, hence determinant zero.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_nonfatal",
    "post_sha256": "218071c27f63e5539481fdf58e0f8f30df2f03070bbf732c7284bcfae321094c"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-weighted-lagrangian-ribbon-bordism",
    "severity": "fatal",
    "status": "fixed",
    "reason": "Added full AC explicitly, as required by the surface-intersection and boundary-kernel duality suppliers. Checked actual relation composition by Mayer–Vietoris; identity cylinders preserve their specified Lagrangian and have zero correction.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "d99c8a941ddebf05d7f7ec9982eb6915c7a7fba1466e2ffa70ad1a1a0a3a95e2",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-pointed-z2-semion-metric-group",
    "severity": "fatal",
    "status": "fixed",
    "reason": "The scalar cocycle did not supply the required pivotal input. Constructed the dual maps, u₁=i and j₁=−1, proved monoidality by the Drinfeld tensor identity, and computed both simple dimensions as one. This licenses the modular Hopf matrix.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "c0f3798db672522a26eff02e2bb3512b4562a89ac2bbcb399f366a27757d09e3",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-decorated-graphs-lift-through-relative-surgery-calculus",
    "severity": "fatal",
    "status": "fixed",
    "reason": "Added countable choice for geometry/evaluation and modular spherical ribbon data with chosen duals and Ω=Σdᵢi for the evaluation assertion. The geometric lifting remains conditional on the stated marked undecorated calculus and retains full coupon framings.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "0f8d17428f33622f17e47bf2820f08b976e36c9b7b37024e5af8b37c0b58bd6d",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-interior-one-handle-trade-and-framed-circle-surgery-pair",
    "severity": "fatal",
    "status": "fixed",
    "reason": "A twisted closed-core normal bundle has no product framing. Added the necessary orientable-normal-bundle condition, automatic for compatible oriented attachments, and closed the normal frame explicitly. The two-hemisphere trade and arbitrary-framing four-dimensional bridge remain intact.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "c62b41b71a93cc3bcb53b4cac38d89469001e7fad6272cf18da183daa4a1a435",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-continuous-one-handle-surgery-replacement-gives-relative-kirby-moves",
    "severity": "fatal",
    "status": "fixed",
    "reason": "Added a disjoint-support comparison covering slides among other handles. A single trade retains unrelated handles, so the output is relative to them and is a framed-link movie when none remain. Required an oriented movie to license the closed-core product frame; local O2/O3 maps are retained.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "2b60c388a477c4350835f88a9f4bf931ca0b7e41fd09419ed75d18f759475130",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-parametric-index-grouping-preserves-a-relative-descending-path",
    "severity": "fatal",
    "status": "fixed",
    "reason": "The proof incorrectly assumed normalized Euclidean fields at every regular critical point. Retained the supplied hyperbolic models and proved exit-cutoff constancy from uniform broken-trajectory compactness. Smooth orbit cutoffs and convex parameter patching now preserve the original field and Statement.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "e6700aeaeabf107524e31577e1048039cf10a5feb25fa441204fe1788fc2dd30",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-one-handle-slides-become-relative-kirby-slides-after-trading",
    "severity": "fatal",
    "status": "fixed",
    "reason": "The claimed base arcs need not exist across components. Required the feet and base strip to lie in one connected base component and the four-dimensional stage to be oriented. The cut-open disk calculation and five-dimensional slide retain the stated dual-meridian O2 map.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "1455b0e21e4645965bc9bd5b1b7726ed1cbe904de5f8d7bd1f17f576830c5820",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cor-rt-torus-and-state-dimension-formula",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Corrected F1: the modular-data definition supplies s,D,θ, while the weighted RT theorem supplies κ=p₊/D. The dimension formula, torus cap correction and orientation-sensitive Walker cube calculation are unchanged.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_nonfatal",
    "post_sha256": "c8aa71780bf6c790fc8be332ea16ee2c6eed9766accb23b04b57b3f4af329555"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-ell-three-framing-anomaly-and-kirby-blowup",
    "severity": "fatal",
    "status": "fixed",
    "reason": "Added the full-AC hypothesis required by weighted RT and corrected “normalized” to “unnormalized” for p±=1±i. Both complete blow-up ratios are one; omitting κ^(−σ) leaves κ or κ⁻¹, each nontrivial.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "a6d560b6df11b2502c4bf55f3d51fd9b4898ab80088bdbcc1e17c36a058dc67b",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-su2-ell-three-modular-data",
    "severity": "fatal",
    "status": "fixed",
    "reason": "The sine lemma assumes fusion coefficients; cited the actual tilting-quotient fusion theorem directly, giving 1⊗1=0 at ℓ=3. Also repaired the missing full-AC hypothesis for RT torus dimension. The displayed sine matrix, twists and dimension two check directly.",
    "action": "record-fixed-adjudicated-finding",
    "outcome": "confirmed_fatal",
    "post_sha256": "ac180b3beb39aaee59e28f5b2d56940de577768c08320e1a82e61f3bf9c1bfbf",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-modular-ribbon-category-and-hopf-link-data",
    "reason": "Modularity means invertible s; normalization is explicitly conditional on D²≠0. The later s²=D²C proof uses only unnormalized data, so its explanatory forward reference creates no circular premise.",
    "status": "no-item-repair"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-closed-oriented-smooth-one-and-two-manifolds-bound",
    "reason": "The cited surface supplier actually proves disk/band contraction in steps 8.1–10.1, annulus/collar constructions in 13.1, and boundary extension in 7.1. These support the owned smooth polygon reduction and oriented handlebody fillings.",
    "status": "no-item-repair"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-fixed-vertical-height-relative-morse-handle-normalization",
    "reason": "The cited interchange proof explicitly constructs orbit-constant β in step 3.1 and G(s,t) with positive first derivative in steps 4.1–5.1. The owned extra cutoff α preserves the vertical height. The rejection overlooks these supplied constructions.",
    "status": "no-item-repair"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base",
    "reason": "The Whitney supplier explicitly constructs j in step 1.1 and R in steps 2.1–6.1. The owned polynomial family supplies independent jets, and dimension counts give embedding isotopies for d≥4; the framing and protected-collar arguments remain valid.",
    "status": "no-item-repair"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-wall-signature-and-rt-cap-reference-correction",
    "reason": "The cap supplier proves the paired disk-product model in steps 1.1/5.1 and family-meridian compressions in 6.2. These support the owned middle-product cut. The local Wall form and reversed corner orientation give +μ; the reference-change cocycle remains valid.",
    "status": "no-item-repair"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations",
    "reason": "Its supplier proves an arbitrarily small curve perturbation family and C¹ openness of compact embeddings. Starting at the given attaching embedding, a sufficiently small parameter path is an isotopy retaining its framing. Its oriented trace also satisfies the corrected trade hypothesis.",
    "status": "no-item-repair"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-one-handle-surgery-replacement-is-independent-of-the-base-arc",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "open-frontier-owner-repair",
    "affected_use": "1.1 **Input and framing convention.** Let h be one four-dimensional one-handle with feet in a connected compact oriented three-dimensional base N. Let B and B′ be two embedded replacement arcs joining its feet, with framed product tubes and the same parametrized germs at their endpoints. They avoid every other one-handle foot and the protected boundary collar. A finite system of framed two-handle attaching curves may traverse h any number of times, with either orientation. Apply the explicit cancellation/routing construction with either arc. Its links are $R_B(L)\\cup U\\qquad\\hbox{and}\\qquad R_{B'}(L)\\cup U.$ Here U may be chosen as the same small zero-framed circle in both diagrams: take its cross-section on the common endpoint germ. Its disk meets each routed strip once for each signed traversal of h. Its framing is the product disk framing. This convention follows by transporting the meridian along the product cancellation tube; it fixes the actual exterior marking. Assume first that B and B′ have disjoint interiors outside their common endpoint germs. No restriction is placed on the homotopy class of their union. The two framed arc strips, with oppositely oriented common germs, join to a framed embedded ribbon annulus about a closed curve K that follows B′ and returns along a parallel of B. More precisely separate the strips by distinct normal coordinates, cut both just inside their common germs, and join the four short ends by the two planar rectangles in the endpoint balls. The core of the resulting annulus is K. Its annular normal is the integer framing used below. This choice records any difference in twisting of the two replacement arc framings; no independently chosen integer is substituted. [given, F1, F2, F3, F4, F5, construct]",
    "reason": "The Statement specifies only an oriented three-dimensional base, not an oriented four-dimensional attachment. A twisted one-handle can make the closed core normal bundle nonorientable, so F2 cannot supply the framed surgery pair. Require an oriented stage / orientation-compatible attachment, or explicitly require a closed-core product framing. This is outside the assigned item scope.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-current-observation",
    "id": "lem-circle-and-path-loop-models-for-eilenberg-maclane-induction",
    "status": "historical-alert-already-addressed-in-current-carrier",
    "reason": "The Step-4 digest describes the former external-only F4. The current published F4 and step 2.1 instead cite the local based-loop CW-type lemma, and frontmatter names the existing root-integration repair receipt. This focused current-source comparison neither edits the supplier nor adds a new whole-item audit.",
    "evidence": "items/lem-circle-and-path-loop-models-for-eilenberg-maclane-induction.md: F4, step 2.1 and existing verification.repair",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-finite-semisimple-module-category-over-fusion-category",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "The final sentence incorrectly conditions the ordinary module 2-category on a monoidal product unavailable for general fusion C.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic",
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-separability-contracts-normalized-categorical-hochschild-complex",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The title omitted the positive-degree qualification even though the sound Statement and proof explicitly retain degree-zero invariants; the generic algebra/bimodule dependency was undeclared.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-finite-semisimple-two-category",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "The cited def-monad only defines endofunctor monads.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1812.11933"
    ],
    "familiar": true,
    "defect_type": "dependency_citation",
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-separable-bimodule-relative-tensor-is-associative",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "F1 only constructs balanced products for fusion categories over algebraically closed fields, so applying it to an arbitrary finite semisimple monoidal category was unsupported.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation",
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-modc-separable-algebra-object-duals",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The alleged reversed-domain error is false, but proof 1.2–1.4 and 1.5–1.6 contained sentence fragments. Explicit adjacent-crossing domains and complete proof paragraphs repair the nonfatal presentation defects.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1812.11933"
    ],
    "familiar": true,
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-separable-bimodule-relative-tensor-over-c2",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "F1 incorrectly attributes the regular-bimodule unit theorem to a definition that only defines the regular object and balancing.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-2vect-cyclic-four-cocycle-cochain-gauge",
    "outcome": "false_positive",
    "status": "false_positive",
    "finding": "The operators act on cochains, not on tuples: (d_i f)(g_1,...,g_(n+1)) is f of the tuple after dropping an endpoint or multiplying entries i,i+1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-modc-weighted-rt-background-interface",
    "outcome": "false_positive",
    "status": "false_positive",
    "finding": "The current supplier thm-weighted-rt-tqft-and-factorization explicitly states in A1: full AC is inherited from topology and boundary duality suppliers, and countable choice from framed tangle evaluation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "resolution": "The decision and current-hash review for this ID record the full mathematical evidence and completed repair or false-positive disposition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-binary-kraft-criterion-for-finite-lengths",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "proof-step",
    "location": "2.1",
    "finding": "F2 defines nonempty output codewords but does not imply positivity of the supplied request lengths; positivity is given explicitly.",
    "correction": "Attribute request positivity to the hypothesis, then apply F2 to the allocated positive-length words. The owning contract derivation is synchronized.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-oriented-open-closed-surface-category",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The original Definition allowed free-arc labels unrelated to incident endpoint colors, so two legal I_rr rectangles could glue an r arc to a b arc. Requiring equality at each corner makes joined labels agree. Also supplied arbitrary compatible-collar comparison using interpolated transverse fields and a boundary-fixing cutoff flow.",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-elementary-surface-sewing-relations",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "Step 1.1 chooses one basepoint on B0 and orders all arcs at that common root. Cutting the rooted fan duplicates that point into sectors; B0 stays one contiguous segment and the excursions s_j B_j s_j^{-1} occupy successive sectors. The alleged missing interleaved positive-length B0 segments occur only for distinct root attachments, which this proof does not choose. The disk extension and table sewings retain all black parameterizations and free labels."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-relative-surface-collars-and-elementary-decomposition",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "In rows 3–4 the product/zipper interval seam has both ends on the outer annular boundary; cutting it recovers a disk and annulus, not a disk. Replaced this invalid certificate with a root-to-Z auxiliary arc inside the zipper, disjoint from that seam, and matched the split outer boundary words. Also described rows 1–2 as disk attachments rather than a misleading core cut and repaired the merged table delimiter. The function construction, normal signs, and six composite types retain all hypotheses and colors.",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-relative-open-closed-surface-normal-form",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Incoming I_ab is read b to a along induced boundary orientation. Therefore listing factors in that boundary order can require A_ba in place of the actual input A_ab. The revised Definition retains the induced cycle as marked data but traverses it in reverse for multiplication, reading each factor in object orientation. The three-slot check now uses A_ab tensor A_bc tensor A_ca after permutation. Also made inverse bending explicit for the original source and target. Cyclic rotations, windows, empty arities and finite tensor typing remain valid.",
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The rejection reads F4 in isolation. Step 1.2 explicitly invokes F5, the boundary-relative normal-form supplier. Its proof steps 10.1–12.1 give formal closed-spider fusion, self-gluing and termination, using only closed Frobenius relations; steps 14.1–15.1 identify the unique normal word. This is precisely the relation-preserving reduction needed for concatenated decompositions. No assertion that the elementary-relations lemma alone presents the category is made. Empty boundaries, disconnected tensor products and transformation naturality follow from those same reductions."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-knowledgeable-frobenius-data-classify-open-closed-sewing",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The cited normal-form supplier does more than classify surface invariants: proof steps 2.1–6.1 eliminate open coproducts by typed first-event equalities; 7.1–9.1 eliminate zipper leaves; 10.1–12.1 normalize the closed graph; 14.1–15.1 explicitly make every transformation a formal consequence of the elementary and derived moves. Those are the F2/F3 equations satisfied by the data. Hence reconstruction is independent of decomposition and preserves concatenation. The corrected candidate-word traversal agrees with the actual indexed product order. The elementary-relations supplier correctly makes no completeness claim of its own."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-boundary-relative-two-dimensional-surface-normal-form",
    "status": "owner-route",
    "reason": "Unassigned frontier proof 7.1/9.1 should call the cycle multiplication order reverse to induced surface-boundary order, consistently with the corrected candidate Definition. This is a precise convention repair; the displayed typed normalizer equations remain valid.",
    "affected_use": "Proof 7.1: \"associativity flattens its leaf products in their actual cyclic boundary order\"; proof 9.1: \"a product disk concatenates successive interval slots along their common free-edge label\" and \"Restore their prescribed least-slot order by the explicit symmetry P of [F5]\".",
    "minimality": "Only the two proof descriptions and current citation quotes need reconciliation; the Statement does not change, so no further consumer hop is triggered."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-frobenius-sewing-derived-moves",
    "status": "owner-route",
    "reason": "The Step-4 presentation concern is confirmed: the final Statement paragraph cites nonexistent step 1.5 for faithful bending, whereas that argument is proof step 4.1. The actual formal bending proof exists and establishes the advertised identities.",
    "affected_use": "Statement: \"This formal assertion is proved by faithful bending in step 1.5\".",
    "minimality": "Owner should replace only 1.5 with 4.1; this item is unassigned and has not been edited or given an adjudication decision. The literal Statement change then has the ordinary direct-consumer inventory duty."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-no-affected-published-consumers",
    "suppliers": [
      "def-oriented-open-closed-surface-category",
      "def-relative-open-closed-surface-normal-form"
    ],
    "reason": "Direct dependency, wikilink, and surface-category/normal-word content scans found only the six listed draft item consumers and their draft home page. No published or outside-frontier item needs repair from these two interface changes; no published audit or repair status is asserted."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-modc-bounded-rank-structure-varieties-have-finitely-many-orbits",
  "lem-modc-internal-end-reconstruction-and-eilenberg-watts",
  "lem-modc-module-functor-categories-are-finite-semisimple",
  "lem-modc-module-functors-have-adjoints-and-separable-monads-split",
  "lem-pa36-relative-p1-singular-kernel",
  "lem-pa36-singular-parabolic-kernel",
  "thm-real-bott-periodicity-from-rank-eight-clifford-thom",
  "thm-ko-coefficient-table-and-eightfold-periodicity",
  "thm-abs-orientation-identifies-cokernels-with-ko",
  "lem-positive-clifford-mass-difference-clutching-comparison",
  "lem-root-of-unity-integral-weyl-specialization",
  "thm-root-of-unity-tilting-modules-are-tensor-stable",
  "lem-root-of-unity-weyl-flags-summands-and-orthogonality",
  "lem-root-of-unity-finite-highest-weight-truncations",
  "lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs",
  "lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor",
  "lem-standard-borel-memoryless-channel-mutual-information-tensorization",
  "lem-temperley-lieb-root-noncritical-radicals-and-simple-heads",
  "lem-temperley-lieb-signed-forest-candidates-and-their-composition",
  "lem-yangian-fundamental-evaluation-intertwiner",
  "lem-yangian-rtt-spectral-rescaling",
  "prop-first-order-star-commutator-is-a-poisson-bracket",
  "def-motivic-hall-algebra-of-a-finite-quiver",
  "rem-finite-quiver-hall-counts-and-dt-bps-interpretation",
  "thm-filtered-l-infinity-morphisms-preserve-maurer-cartan-elements",
  "thm-unital-associative-deformations-are-coderivation-maurer-cartan-classes",
  "rem-general-maurer-cartan-deformation-correspondence-needs-gauge-data",
  "thm-componentwise-shannon-mcmillan-breiman",
  "thm-ams-ergodic-information-aep",
  "thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras",
  "thm-complex-spinc-thom-orientation",
  "thm-feedback-does-not-increase-cost-constrained-dmc-capacity",
  "thm-four-cocycle-2vect-g-is-fusion-two-category",
  "thm-geometric-clifford-module-dirac-index-formula",
  "thm-higher-order-hochschild-obstruction-class",
  "thm-it-cover-leung-feedback-mac-inner-bound",
  "thm-it-finite-classical-wiretap-auxiliary-capacity",
  "thm-it-gaussian-vector-squared-error-rate-distortion",
  "thm-it-quantum-channel-capacity-regularized-private-information",
  "thm-knowledgeable-frobenius-data-classify-open-closed-sewing",
  "thm-modc-relative-deligne-product-is-algebra-tensor-product",
  "thm-modc-of-braided-fusion-category-is-fusion-two-category",
  "thm-mutual-information-and-conditional-mutual-information-equality-conditions",
  "thm-mutual-information-and-conditional-mutual-information-quantization",
  "thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings",
  "thm-qc-tqc-ising-braids-clifford-only",
  "thm-rational-cherednik-kz-standard-modules-factor-through-hecke",
  "thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap",
  "thm-root-of-unity-affine-weyl-linkage",
  "thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified",
  "thm-root-of-unity-strong-affine-linkage-for-weyl-and-tilting-modules",
  "thm-spin-ko-thom-orientation-in-all-ranks",
  "thm-sugawara-modes-satisfy-virasoro",
  "thm-temperley-lieb-spencer-decomposition-numbers-over-arbitrary-fields",
  "thm-verlinde-tilting-quotient-in-simply-laced-large-odd-order-regime",
  "cex-it-expected-random-code-error-does-not-give-maximal-error",
  "ex-it-dmc-one-shot-error-bound",
  "ex-it-meta-converse-binary-channel",
  "thm-lz77-phrase-length-entropy-rate",
  "ex-it-gaussian-distortion-waterline",
  "thm-it-schumacher-quantum-source-coding",
  "lem-it-qudit-erasure-channel-complement-and-degradability",
  "lem-it-finite-unitary-averaging-decoupling-bound",
  "lem-it-flat-spectral-type-information-approximation",
  "lem-qc-tqc-contractible-disk-lifts-to-plane",
  "cex-pa36-positive-twist-global-sections-fail",
  "ex-pa36-integral-line-bundle-translation",
  "ex-d4-helicity-and-continuous-spin-central-parities",
  "cex-temperley-lieb-zero-loop-generator-is-zero",
  "lem-temperley-lieb-jones-wenzl-recursion-properties",
  "lem-heisenberg-group-lagrangian-splitting-and-dual-orbit",
  "thm-countable-mode-car-has-universal-inductive-limit-norm",
  "cex-self-adjoint-part-need-not-be-associative-subalgebra",
  "lem-green-coproduct-products-converge",
  "lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra",
  "lem-state-field-reconstruction-from-local-generators",
  "rem-preprojective-coha-and-nakajima-action-source-boundaries",
  "def-it-two-user-discrete-memoryless-mac-code",
  "def-finite-alphabet-conditional-entropy-given-observation",
  "cor-rt-torus-and-state-dimension-formula",
  "ex-rt-genus-two-factorization-dimension",
  "ex-su2-ell-four-modular-data",
  "ex-su2-ell-three-modular-data",
  "def-modc-weighted-rt-background-interface",
  "ex-group-algebra-is-symmetric-but-not-closed-sector"
]


