# Step 7 owner mathematical adjudication: probability

Scope: the four batch-3 rejudge rejections listed below. Adjudicator: owner-delegated Astra (medium), 2026-09-13. This is a reasoned review of the rejected arguments and their relevant dependency interfaces, not an independent audit of the whole dependency closure. No new prerequisite items were created. No engine transition or shared terminal receipt was written here.

## cex-feller-negligibility-cannot-be-removed-from-the-converse

Disposition: accepted-after-review; item unchanged.

Rejected carrier SHA-256 and current carrier SHA-256: `290245562c46157365029b69ec946f8b4b43128c82d36dac4febcc4a2dba6ade`.

The judge assumes indices start at zero and hence alleges an empty zeroth row. That premise contradicts the declared dependency `def-row-wise-independent-centered-triangular-array`: its Definition begins "For each integer $n\ge1$" and explicitly excludes empty rows. In the item's construction take $k_n=n$. For every admissible row, $X_{n,1}=Z$ exists, the remaining coordinates are deterministic zero, and the row sum and total variance are exactly $Z$ and one. The product criterion for independence is verified directly in step 1.1. Step 2.1 integrates a strictly positive lower bound on a length-one interval strictly beyond the Lindeberg threshold, giving a strictly positive tail second moment independent of $n$. Thus this is a correct counterexample to removing Feller negligibility. There is no zeroth-row obligation to repair.

Its normal-moment supplier is repaired below; the repair makes explicit the same normal moments already used here, so it does not alter the mathematical supplier contract. Dependency certifications must nevertheless be refreshed on current hashes.

## ex-clt-for-sums-of-uniform-random-variables

Disposition: repaired.

Rejected carrier SHA-256: `be3e41932da08a78c13f9d0c3663e597fe3972966fc598e0c975c2ec7da74122`.
Current carrier SHA-256: `b51a511f7ef4a91028ccf01411ce779e34e3bb4c2db1ef976896a0be17bf3753`.

The judge correctly identifies imprecise wording in F2: `thm-integration-against-a-density` is stated only for nonnegative measurable integrands. F2 now states exactly that interface. The proof already handles the signed coordinate correctly: apply density integration separately to globally nonnegative $x^+$ and $x^-$, then use the declared signed-integral definition F10. Their density products have integrals $1/2$ and zero. The nonnegative square has integral $1/3$, so variance is $1/12$. The compact-interval FTC and Riemann/Lebesgue bridge justify these values, and the stated scalar CLT then gives the displayed normalization. No proof claim, theorem hypothesis, or dependency was weakened or removed.

## lem-characteristic-function-of-a-normal-law

Disposition: repaired.

Rejected carrier SHA-256: `57a5a9a67dc130cfe61cc929cc78464bc739a874f54c8645a8cf012d9353497a`.
Current carrier SHA-256: `4436e41c1566242037a1574f6a84eb6a6583458d48e86d1b1ea84a857f7fb9b6`.

The judge correctly distinguishes the exponential addition theorem's stated interface from the power-series definition. F18 now states only addition and real extension. New fact F20 cites the existing published `def-real-exponential-function-and-e` directly, and this existing item is added to the dependency list and manifest. Its Definition gives the everywhere convergent real series. For $R\ge1$, retaining its nonnegative quadratic term proves $e^{R^2/2}\ge R^4/8$. Addition then gives the reciprocal identity, hence $g(R)\le8/(\sqrt{2\pi}R^4)$, which proves both boundary limits. This estimate now precedes its first use in the absolute-moment computation.

The remaining argument is valid: finite-interval FTC plus monotone convergence gives the first absolute moment; oddness and dominated convergence give mean zero; integration by parts and the established $Rg(R)\to0$ give second moment one. Characteristic-function differentiation is permitted by the finite first moment. Componentwise integration by parts and domination by $|x|g$ and $g$ give $\varphi'=-t\varphi$. The integrating factor and zero-derivative theorem give the standard-normal transform. The affine supplier then gives the general transform and moments, including zero variance. The item retains its AC hypothesis and identifies its uses. No new mathematical prerequisite was authored.

## thm-multivariate-iid-central-limit-theorem

Disposition: repaired.

Rejected carrier SHA-256: `c5c278e3ede125623d81e0ce8d83fe5e9e2f0e4ab878e45719b230279f5bad61`.
Current carrier SHA-256: `6a02fb18d4f26e31a7964e81760d63f21c90127027ea780d9f21e300c2d58d0b`.

The judge correctly objects to attributing covariance positivity to F2's Gaussian construction interface. Step 1.1 now establishes the necessary properties locally before invoking F2. Centered coordinate products are integrable by $2|ab|\le a^2+b^2$; commutativity gives symmetry. Finite linearity gives $u^T\Sigma u=\mathbb E[u\cdot(X_k-m)]^2\ge0$ for every $u$, exactly positive semidefiniteness. Only then is the Gaussian target constructed. The rest of the proof correctly applies scalar CLT and continuous scaling when the projected variance is positive, uses zero-integral implies zero almost everywhere when it is zero, and applies Cramer–Wold to the fixed target. It neither divides by a zero variance nor requires a common null set for uncountably many projections.

## Local verification

The three repaired entries in `research/phase-2-next-17-batch-3.proof-contracts.json` were regenerated from their current item texts with the repository generator. The normal-law entry's manifest dependencies were synchronized with the item. Focused strict proof-contract validation reports 4/4 checked, zero errors and zero warnings. Explicit-path precheck reports all four items passing. These structural checks support, but do not replace, the mathematical reasoning above. Shared plan reconciliation, recertification, terminal receipts, and the rejecting gate remain the owner's responsibility.
