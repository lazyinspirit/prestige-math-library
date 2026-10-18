# Step 3a adjudication — batch 72

Run: `non-ml-math-remaining-81-2026-10-18`. Group: `batch-72`.

Scope has no touched items, page obligations, reader findings or refuter findings; the decisions array is empty. Six HIGH/CRITICAL risk reviews remain required. Initial risk-report completed with 0 errors (15 items). No item or page changes so far.

## Completed item reviews (dependency order)

### def-daha-a1-root-datum-and-parameter-conventions — level 0

Checked the complete Definition over Q(q,t): rho pairs to 1 with alpha-vee, alpha=2rho; s0,s1,pi are involutions, pi s0 pi=s1, and pi sends u0=q^2 z^2 to u1=z^-2. Alternating dihedral words have distinct even q-shift/reflection exponents; appending pi gives the odd exponents, proving the stated unique extended-group form. The positive/negative finite B sums telescope after multiplication by 1-u_i, including m=0 and m=1. Parameters are units and algebraically independent; no specialization, analytic endpoints, quotient choice or AC is used. Independently read Kirillov Definition 4.1 (actual PDF p.22) and Etingof-Ma sections 7.11-7.13 (PDF pp.57-59); the sources use alternate elliptic generators, and the local explicit conventions are consistent. Reader/refuter both report no finding. No defect.

Sources: https://arxiv.org/pdf/math/9501219 (Definition 4.1, actual PDF p.22); Etingof–Ma, https://ocw.mit.edu/courses/18-735-double-affine-hecke-algebras-in-representation-theory-combinatorics-geometry-and-mathematical-physics-fall-2009/c0a79381e5494c4fd0baa1eef2356e89_MIT18_735F09_lec.pdf (§§7.11–7.13, PDF pp.57–59). Source text independently read from full downloaded PDFs using PyMuPDF; pdftotext was unavailable. No dependency IDs. Risk review complete; next: polynomial representation and its relation-check justification.

### def-daha-a1-polynomial-representation — level 3

Checked the complete candidate Definition and all three direct suppliers (root conventions, DAHA presentation, Bernstein quotient lemma), and read its justified_by relation-check proof. Each quotient equals B_i,m on monomials, hence preserves Laurent polynomials by linearity for positive, negative and zero powers. The unique algebra action is justified by all relator checks and the published free-algebra quotient universal property (full current supplier proof read); no PBW or faithfulness assumption enters. Z and pi actions are K-linear, invertible as specified. The justified_by backlink does not assume the action in its relation check. Kirillov Theorem 4.3 (actual PDF p.23) has exactly this difference-reflection normalization; Etingof-Ma sections 7.11-7.13 provide presentation context. No specialization or AC. Reader/refuter have no finding. No defect.

Risk review complete; no repair or obligation decision owed.

### lem-daha-a1-polynomial-operators-satisfy-presentation — level 4

Read every proof step and all five cited suppliers, including the full published relation-descent proof. Step 1.1 gives inverse multipliers, Pi^2=1, Pi M_z Pi=q^-1 M_z^-1, and Pi sends sigma0,u0 to sigma1,u1. For step 1.2, sigma(u)=u^-1 yields sigma(a)=(t^-1 u-t)/(u-1), sigma(b)=c u/(u-1); direct multiplication gives a sigma(b)+ba=ca and a sigma(a)+b^2=1+cb, hence T^2=cT+1. Step 1.3 cancels substitution terms and leaves b(f-sigma f)=c(f-sigma f)/(1-u), exactly all integer Bernstein relations, including m=0 and negative m. The finite quotient lemma guarantees Laurent preservation although computations take place in K(z). Step 2.1 applies precisely the quotient universal property, without assuming injectivity. Source Theorem 4.3 explicitly leaves the A1 relation check to direct calculation; the local proof supplies it. No braid relation, specialization, or AC claim. Reader/refuter have no finding. No defect.

Risk review complete; no repair or obligation decision owed.

### thm-daha-a1-polynomial-representation-faithful — level 4

Checked all three proof steps and all five suppliers. The spanning supplier moves lattice letters left with lexicographically decreasing Hecke count / inversion count, then moves pi right and uses the quadratic relation; it asserts only spanning. For faithfulness each a_i=(t u_i-t^-1)/(u_i-1) is nonzero in K(z), and all its substitution transforms remain nonzero. An alternating length-r word has exactly one all-reflection term; every proper subexpression has Coxeter length at most r-1, also after the length-zero pi factor. Distinct alternating words with epsilon=0,1 give distinct extended-group substitutions. The substitution-independence supplier tests 1,z,...,z^(N-1) and has invertible Vandermonde determinant over K(z); the empty support case is vacuous. Grouping lattice coefficients for a maximal-length substitution leaves gamma_g times a Laurent polynomial, so its vanishing forces every coefficient zero, including the r=0 base case. Finite descent proves injectivity without assuming PBW independence. Independently read Kirillov Theorems 5.6-5.7 and Corollary 5.8, actual PDF pp.27-28 and their preceding leading-term setup pp.25-26; the local A1 proof supplies the independence needed rather than importing the source affine assertion. Formal q,t only; no specialization or AC. Reader/refuter have no finding. No defect.

Risk review complete; no repair or obligation decision owed. Next: the Y-sum restriction and spectral construction.

### lem-daha-a1-y-sum-restricts-to-macdonald-operator — level 6

Read all three steps and all five direct suppliers, including the complete orbit-sum preservation proof. For symmetric f, T1 f=t f and Pi f=f(qz), so Yf=t f(qz). Independently expanding (T1-c)Pi gives coefficient B=(t^-1 z^2-t)/(z^2-1) on f(q^-1 z) and c/(z^2-1) on f(qz); adding Y gives A=(t z^2-t^-1)/(z^2-1). The orbit-sum supplier removes poles at both z=1 and z=-1 (characteristic zero), proves inversion symmetry, and gives degree/leading coefficient, with n=0 checked directly. The finite reflection acts on the abstract translation exponent, not by ordinary conjugation by T1. Inversion-invariant Laurent polynomials have paired coefficients and the recurrence S_(n+1)=(Y+Y^-1)S_n-S_(n-1), S0=2,S1=Y+Y^-1, gives polynomial restrictions; only the sum must preserve V, not Y separately. Constants and the zero polynomial are included. Kirillov actual PDF p.24 independently gives the identical A1 calculation with X=z^2; Macdonald sections 4-6 (PDF pp.8-14) supply context under its specialized integer-k hypotheses, which are not imported. Source locator for the A1 calculation is off by one page and is reported separately. Reader/refuter have no finding. No mathematical prerequisite gap or AC.

Risk review complete; no mathematical repair or routed decision owed. Next: spectral construction.

### thm-daha-a1-macdonald-eigenfunctions — level 7

Read all three steps and all three direct suppliers. For n!=m>=0 the exact factorization is (q^n-q^m)(t-t^-1 q^(-(n+m))); non-root-of-unity q and t^2!=q^-N for N>=1 make both factors nonzero, including m=0. Over the declared characteristic-zero K=Q(q,t) these exclusions hold formally. The n=0 constant eigenvector uses A+B=t+t^-1. In each finite degree, inversion symmetry gives the orbit-sum basis; the displayed correction coefficient r_n,j/(lambda_n-lambda_j) has the correct sign and kills the residual. Triangular leading terms establish the induction basis, uniqueness and finite expansions for every Laurent polynomial, without infinite-series inversion or an infinite-dimensional convergence assertion. Every symmetric translation restriction is a polynomial r(D), hence gives eigenvalue r(lambda_n). No orthogonality/norm formula is asserted, no AC is used. Independently read Kirillov Theorem 6.2 and its setup/proof (actual PDF pp.30-31) and Theorem 6.6 with proof (p.33); its integer-k restriction is not used in the local finite algebraic construction. Macdonald Theorem 1.5 (PDF pp.3-4) and section 6 (pp.13-14) provide normalization/eigenfunction context, with specialized hypotheses retained. Etingof-Ma section 7.13 supplies DAHA context only: the advertised Macdonald discussion on pp.18-19 is absent there (these pages concern rational Cherednik modules), an editorial source-locator alert for the owner. Reader/refuter have no finding. No mathematical defect or unmet prerequisite.

Risk review complete; no mathematical repair or routed decision owed.

## Scope, source evidence and metadata disposition

All 15 current carriers and both page bodies were read; the six risk reviews above were completed in the generated order. Logical prerequisite context included the complete current published `lem-hh-free-associative-ring-and-relations-descent`, used only for quotient construction/descent. The affine page routes and type-A PBW link are nonlogical background and their proofs are not certified by this assignment. No published mathematical defect was identified, so no published-supplier ledger row or lock was needed. No Statement/Definition changed and no consumer repair or withdrawal was proposed.

The reader and refuter artifacts both have empty findings. Pre/post `hashes` and `page_hashes` are identical. All 15 current raw item SHA-256 values and both current page raw SHA-256 values match those snapshots. The contract now differs only by six `risk_review` enrichments and these two known bookkeeping normalizations:

- Bernstein-quotient contract, boundary `one`: steps `1.1 and 1.2` corrected to `1.1 and 2.1`.
- q=1 counterexample contract, `finite_check_rationale`: steps `1.1–1.2` corrected to `1.1 and 2.1`.

These are metadata/audit enrichment, not item repairs or newly routed carrier decisions. No confirmed mathematical defect, defect-ledger row, repair-confidence assertion, judgment or certification is supplied. The immutable dispatch owes zero decisions, hence the decisions file contains exactly `decisions: []`.

Owner alert: source-location metadata needs a separate normalization disposition. Current item/manifest source locators inherit some inaccurate page numbers; item/manifest bytes were left unchanged under this risk-only routing. Exact independently recovered locations are:

- Kirillov Definition 4.1 is actual PDF p.22, Theorem 4.3 p.23, and the explicit A1 translation calculation p.24 (printed numbers match these actual PDF pages). In particular the Bernstein-quotient locator `pp.20–21` and the orbit-sum locator `p.23` miss the named passage; broader neighboring ranges may still contain it.
- Kirillov Theorem 6.2 is on actual PDF pp.30–31; Theorem 6.6 and its proof are on p.33, beyond the eigenfunction carrier/manifest's `pp.29–32` locator.
- Etingof–Ma §§7.11–7.13 are on PDF pp.57–59; Definition 7.24 is on p.59. The eigenfunction item/manifest's advertised “Macdonald operator discussion, PDF pp.18–19” is incorrect: those pages contain rational Cherednik category O / standard modules, not this discussion. Use §§7.11–7.13 solely as DAHA presentation context; use Kirillov Theorem 6.6 and Macdonald §6 for the spectral context.
- Macdonald Theorem 1.5 starts on PDF p.3 and continues on p.4; §6 is on pp.13–14. Its integer parameter hypotheses do not replace the locally proved formal-parameter argument.

These editorial alerts do not refute any current formula or inference. No missing mathematical prerequisite or unresolved mathematical uncertainty blocks the six completed risk reviews. They are retained here for the owner rather than inventing an additional decision outside the frozen obligation list.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-72.proof-contracts.json`: exit 0, 15 items, six HIGH/CRITICAL items.
- Final same command with `--require-reviewed`: exit 0, 0 errors, all six required reviews complete.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-72.proof-contracts.json --strict`: exit 0, 0 errors, 0 warnings, 15/15 items checked.
- Snapshot comparison: all 15 raw item and both page hashes match pre/post evidence. Report/decisions JSON authored and empty-obligation shape checked.
- No item edit or formatter ran; reflow, precheck and proof-layout are not applicable to this metadata-only handoff. No engine gate battery, judging, stamping, scheduling or stage transition was initiated.

Completed routed risk work. Next action: engine collection and ordinary gate battery; owner disposition of the source-locator alerts above.
