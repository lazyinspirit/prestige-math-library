B27={}
def entry(id,context,**cases):B27[id]={'context':context,**cases}
entry('lem-l-smoothness-descent-inequality','Statement proves the quadratic upper bound for a C1 function with gradient Lipschitz constant L>=0.',
 empty=('checked','The domain is all of R^n and contains the supplied x,y; at n=0 it is the singleton zero vector space, with d=y-x=0 handled immediately in proof step 1.1.'),
 zero=('checked','Proof step 1.1 handles d=0 by equality; step 2.1 handles L||d|| squared=0 directly before dividing into that quantity.'),
 one=('checked','Proof step 1.2 permits a partition with N=1 and proves its finite sum identity before passing to large N; scalar state dimension is included in the inner-product bounds.'),
 degenerate=('checked','L=0 is admitted, and proof step 2.1 uses the zero-product branch rather than its Archimedean quotient. No positive displacement is assumed for step 1.1.'),
 endpoints=('checked','Proof step 1.1 defines phi on the closed segment parameter [0,1]; step 1.2 includes both endpoint increments in its telescoping sum.'),
 **{'nonempty-choice':('checked','Proof step 1.2 uses only finitely many mean-value points for each fixed N and explicitly says so. Step 2.1 chooses a single sufficiently large N, not a simultaneous arbitrary family of points.')})
entry('lem-proper-closed-convex-function-affine-minorant','Statement proves a global affine minorant for a proper closed convex extended-real function.',
 empty=('checked','Properness supplies nonempty effective domain D. Proof step 1.1 distinguishes its zero-dimensional affine hull, which is a singleton, from a positive-dimensional hull with a finite simplex.'),
 zero=('checked','Proof step 1.1 gives the constant minorant when the affine-hull dimension is0. In the remaining case step 3.1 excludes c=0 before step 4.1 divides by c.'),
 one=('checked','Proof step 1.2 starts the exterior-point sequence at j=1, so 1/j is defined; for a one-dimensional affine hull the construction in step 1.1 uses exactly two affinely independent domain points.'),
 degenerate=('checked','Proof step 2.1 normalizes q_j-p_j only after q_j is outside the closed epigraph. Step 3.1 proves the final vertical component strictly negative, excluding a zero divisor in step 4.1.'),
 endpoints=('checked','Proof step 3.1 tests both relative directions x_0+epsilon h and x_0-epsilon h inside the finite simplex neighborhood, while the upward epigraph ray includes its endpoint s=0.'),
 **{'nonempty-choice':('checked','Proof step 1.1 chooses finitely many affine spanning points from the nonempty domain. Step 1.2 uses UNIQUE nearest points; the convergent subsequence in step 2.1 is supplied by the named finite-dimensional compactness result, rather than an unrecorded family selection.')})
entry('lem-smooth-composite-sum-preserves-proper-closed-convexity','Statement preserves properness, convexity and epigraph closedness when adding a finite continuous convex f to proper closed convex g.',
 empty=('checked','Proof step 1.1 takes a point of the assumed nonempty dom g; f is finite there, so dom(f+g) is nonempty rather than silently allowing an improper empty-domain sum.'),
 zero=('checked','The epigraph pullback Phi(x,s)=(x,s-f(x)) in proof step 2.1 is valid also when f or an individual finite value is zero; it introduces no division or nonzero-value hypothesis.'),
 one=('checked','The argument uses finite coordinate maps and pointwise convexity and is valid in dimension1; proof step 1.2 does not require two independent directions.'),
 degenerate=('checked','Proof steps 1.2 and 2.1 explicitly retain the +infinity-valued cases of g rather than subtracting two infinite objective values.'),
 endpoints=('checked','Proof step 1.2 allows convex weights0<=theta<=1. At the endpoint weights the convexity inequality is the unchanged value, while interior extended-real cases are handled separately.'),
 **{'nonempty-choice':('checked','Proof step 1.1 chooses a single finite-valued witness of g. The subsequent epigraph inverse image is explicit and needs no selection from a family of minimizers.')})
# The following exact/inexact one-step inequalities are all uniform in the comparison point z;
# each entry records its own actual infinity/zero and positive-L arguments.
entry('lem-proximal-three-point-inequality','Statement compares the uniquely defined proximal point with every z using its subgradient resolvent and a squared-distance identity.',
 empty=('checked','Properness of g and t=1/L>0 supply the proximal point. Proof step 2.1 explicitly includes comparison points outside dom g, where the right side is +infinity.'),
 zero=('checked','The squared-distance algebra in proof step 1.1 remains valid at x plus=y or x plus=z; it divides only by the declared positive L through the proximal parameter.'),
 one=('checked','Proof step 1.1 is an inner-product identity valid for a scalar coordinate as well as vectors; no multi-coordinate sum or independence is required.'),
 degenerate=('checked','Proof step 2.1 handles g(z)=+infinity without subtracting infinite values. The unique finite proximal objective is supplied before the comparison.'),
 endpoints=('checked','The comparison permits z=x plus and z=y in proof step 1.1, giving the corresponding zero squared-distance terms without an excluded equality case.'),
 **{'nonempty-choice':('not_applicable','The proximal minimizer is unique by the stated supplier, and z is an arbitrary given comparison point. No independent selection of minimizers is made.')})
entry('lem-proximal-gradient-one-step-estimate','Statement combines smooth descent, convexity and the proximal three-point inequality for the actual exact update.',
 empty=('checked','The named proximal supplier gives a finite point x plus. Proof step 1.1 treats comparison points outside dom g automatically and never assumes that an improper empty domain has a prox.'),
 zero=('checked','At displacement d=x plus-y=0, the inner-product and squared-norm terms in proof step 2.1 vanish; no division by d or by the objective gap appears.'),
 one=('checked','Proof step 2.1 expands one Euclidean squared-distance identity, which includes the scalar/single-coordinate case directly.'),
 degenerate=('checked','Proof step 1.1 separates g(z)=+infinity from the ordinary finite-value subtraction. L is strictly positive and all displayed update quantities are finite.'),
 endpoints=('checked','The universal comparison point z may be x plus or y; proof steps 1.1–2.1 preserve these equality choices and require no strict separation between the points.'),
 **{'nonempty-choice':('not_applicable','The update T_L(y) is a unique given proximal value; the proof makes no selection of a global minimizer or a nonunique update family.')})
entry('lem-inexact-proximal-gradient-one-step-estimate','Statement adds a certified epsilon-subgradient allowance eta>=0 to the exact proximal-gradient one-step comparison.',
 empty=('checked','The certificate requires x plus in the effective domain, and proof step 1.1 explicitly separates g(z)=+infinity from finite comparison values.'),
 zero=('checked','Statement permits eta=0, recovering the exact one-step estimate. The algebra in proof step 2.1 also includes d=x plus-y=0 with no normalization of that displacement.'),
 one=('checked','The Euclidean inner-product expansion in proof step 2.1 is valid for a single scalar coordinate and does not need a higher-dimensional argument.'),
 degenerate=('checked','Proof step 1.1 uses the finite certified output and handles infinite comparison values automatically, so no undefined infinity-minus-infinity term is rearranged.'),
 endpoints=('checked','The epsilon-subgradient comparison is for every z, including z=x plus and z=y; proof step 2.1 retains equality of those points as zero squared-distance terms.'),
 **{'nonempty-choice':('not_applicable','A finite point and its eta-certificate are assumptions of the lemma. The proof neither finds a certificate nor chooses from arbitrary inexact outputs.')})
# Energy and rate results: supplied minimizer, finite index ranges and actual base cases.
entry('lem-fista-energy-estimate-sequence','Statement proves the exact FISTA potential recurrence with t_0=0 and an explicitly interpreted k=1 previous-objective term.',
 empty=('checked','A minimizer x star is assumed, so dom F is nonempty. The Statement interprets the k=1 previous-objective term as0 even if F(x_0) is infinite; it does not multiply0 by infinity.'),
 zero=('checked','The zero coefficient t_0=0 is handled by the special k=1 convention. Proof step 2.1 proves that base inequality directly without using F(x_0).'),
 one=('checked','Proof step 1.1 has t_1=1 and z_1=x star; step 2.1 separately proves the k=1 recurrence instead of relying on the k>=2 convex combination argument.'),
 degenerate=('checked','Proof step 1.1 establishes t_k>=1 before dividing by t_k. Vanishing displacements or objective gaps merely zero their nonnegative potential terms.'),
 endpoints=('checked','At k=1 the convex weight1/t_1 equals1 and z_1=x star; proof step 2.1 treats this endpoint separately, retaining the base potential u_0.'),
 **{'nonempty-choice':('not_applicable','The minimizer x star is supplied as a single comparison point and the exact FISTA recurrence determines all updates; the proof selects no family of minimizers.')})
entry('lem-inexact-fista-energy-estimate','Statement is the FISTA potential recurrence with an additional nonnegative certified term 2 t_k squared eta_k/L.',
 empty=('checked','A minimizer x star and certified iterates are assumed. Statement defines the previous objective term at k=1 as0, including when the arbitrary initial objective is infinite.'),
 zero=('checked','Setting eta_k=0 removes only its error term. Proof step 2.1 separately proves the k=1 base with t_1=1 and previous objective coefficient0.'),
 one=('checked','Proof step 1.1 uses z_1=x star and the base identity for u_0; proof step 2.1 derives the k=1 inequality directly from the inexact one-step supplier.'),
 degenerate=('checked','Proof step 1.1 establishes t_k>=1 before its convex-combination division. No division by an error eta_k, an objective gap or a displacement is used.'),
 endpoints=('checked','The weight1/t_k is allowed to equal1 at k=1. The error term remains defined there and the previous-objective term is explicitly interpreted as0.'),
 **{'nonempty-choice':('not_applicable','The certified errors and outputs are input iterates, and x star is one supplied minimizer. The proof does not claim automatic existence of inexact certificates.')})
entry('thm-proximal-gradient-o1k-objective-bound','Statement gives the exact proximal-gradient last-iterate objective bound for k>=1 from any initial vector.',
 empty=('checked','The assumed minimizer makes the optimal value finite, and the exact proximal supplier makes every x_k with k>=1 finite-valued. Proof step 1.1 therefore sums defined gaps even if F(x_0) is infinite.'),
 zero=('checked','If x_0=x star, the right side is0 and nonnegative gaps in proof steps 1.1–2.1 force every asserted gap to0. The k=0 quotient is not claimed.'),
 one=('checked','Proof step 1.1 includes the single-step k=1 telescoping inequality. Step 2.1 only invokes gap monotonicity for later j>=2, so no undefined F(x_0) is used.'),
 degenerate=('checked','L>0 is an algorithm premise; the proof divides only by the positive iteration index k. Flat objective gaps are permitted and need no strict descent.'),
 endpoints=('checked','The finite sum in proof step 1.1 begins at the first finite proximal output x_1 and ends at x_k, while step 2.1 leaves the arbitrary starting objective outside the subtraction.'),
 **{'nonempty-choice':('not_applicable','The theorem assumes one minimizer x star and analyzes the unique exact proximal recurrence; it does not select an optimum or assert solver success from arbitrary finite approximations.')})
entry('thm-fista-o1k2-objective-bound','Statement derives the exact FISTA objective bound by telescoping its proved energy potential and bounding t_k from below.',
 empty=('checked','The supplied minimizer gives a finite comparison value. Proof step 1.1 starts from the specified base norm u_0, not an empty or undefined sum of initial objective gaps.'),
 zero=('checked','At x_0=x star proof step 1.1 has zero initial potential and forces zero later gap; no quotient by that norm is taken.'),
 one=('checked','Proof step 2.1 starts t_1=1, so t_1>0 and the displayed k=1 bound is defined. The theorem makes no objective-rate quotient at k=0.'),
 degenerate=('checked','The exact proximal/FISTA hypotheses require L>0, and proof step 2.1 gives t_k>=1 before the reciprocal squared momentum term is used.'),
 endpoints=('checked','Proof step 1.1 telescopes from1 through k using the specially defined k=1 base potential, preserving the first output and final nonnegative squared term.'),
 **{'nonempty-choice':('not_applicable','A minimizer x star is part of Statement. The finite momentum recurrence fixes t_k and the exact prox gives each update, so no arbitrary family selection is introduced.')})
entry('thm-inexact-proximal-gradient-summable-error-bound','Statement separates the finite best-iterate average bound from convergence under summable certified errors.',
 empty=('checked','Statement requires N>=1, so the best-iterate minimum is over a nonempty finite set. Its global objective comparison has the supplied minimizer x star.'),
 zero=('checked','All eta_k may be0, reducing proof step 1.1 to the exact telescoping budget. Zero objective gaps remain nonnegative terms in step 2.1 and need no division by the gap.'),
 one=('checked','At N=1 proof step 1.1 bounds the sole first-iterate gap by the one-step potential plus eta_1; the average/minimum division is by1.'),
 degenerate=('checked','Proof step 2.1 uses nonnegative gaps and a finite error-series sum; it does not assume monotone inexact objectives or assert a last-iterate O(1/k) rate.'),
 endpoints=('checked','The finite budget sum and minimum include indices1 and N. The proof starts at the arbitrary initial distance, never requiring a finite initial objective value.'),
 **{'nonempty-choice':('not_applicable','The certified eta_k and iterates are supplied. The finite minimum in proof step 1.1 exists on N>=1 real gaps; there is no selection from an arbitrary family of solver runs.')})
entry('thm-inexact-fista-weighted-error-bound','Statement bounds the certified inexact FISTA gap using the finite weighted sum j squared eta_j and separately assumes weighted summability for the asymptotic rate.',
 empty=('checked','Statement takes k>=1, so its weighted finite index range1..k is nonempty; the minimizer x star and certificate sequence are supplied premises.'),
 zero=('checked','If every eta_j=0, proof step 1.1 drops the error sum and gives the exact potential bound. No eta_j is divided into, so an individual zero certificate allowance is also admitted.'),
 one=('checked','Proof step 2.1 starts the upper/lower momentum bounds at t_1=1; at k=1 the sole error weight is1 and the denominator(k+1) squared is4.'),
 degenerate=('checked','Proof step 2.1 establishes positive t_k>=(k+1)/2 before using its reciprocal. Nonnegative errors permit t_j squared eta_j<=j squared eta_j without a strict positive-error assumption.'),
 endpoints=('checked','Proof step 1.1 sums the energy recurrence through exactly k, preserving the base convention and all error indices1 through k before applying the weight comparison.'),
 **{'nonempty-choice':('not_applicable','The theorem analyzes an already certified inexact sequence and one assumed minimizer. Weighted summability is an input condition, not an automatically constructed error schedule.')})
entry('thm-strong-convex-proximal-gradient-and-restarted-fista-rates','Statement gives a proximal-gradient contraction factor and a half-gap bound at completed fixed-period FISTA restart points.',
 empty=('checked','A minimizer and finite F(x_0) are assumed; the restart period is the positive integer ceil(sqrt(8L/mu)) with L,mu>0, so no empty full restart block is used.'),
 zero=('checked','Statement includes j=0 in the restart-point bound, giving the unchanged initial gap. If that gap is0, both claimed contraction bounds remain0; no normalization by it is made.'),
 one=('checked','Proof step 3.1 proves one proximal-gradient contraction before induction. Step 4.1 proves one completed restart-block half-gap estimate before iterating over j.'),
 degenerate=('not_applicable','Statement requires mu>0,L>0 and a finite initial objective. The mu=0 limit, a zero restart period and undefined infinite initial gaps are outside this strong-convexity rate claim.'),
 endpoints=('checked','Proof steps 1.1–1.2 take theta down to0 only after dividing for theta>0. Step 4.1 bounds completed block endpoints; no rate for an unfinished block is substituted.'),
 **{'nonempty-choice':('not_applicable','The minimizer is assumed and the restart period is fixed explicitly. Each restart starts from its computed previous endpoint, not an arbitrary branch or optimum selection.')})
entry('ex-two-pixel-total-variation-proximal-map','Example preserves the two-pixel mean and soft-thresholds its half-difference with positive t and lambda.',
 empty=('not_applicable','The data are the fixed two-coordinate input v and a finite TV function on all R squared, so no empty pixel array or improper domain is part of this Example.'),
 zero=('checked','At equal pixels d=0, Verification step 2.1 has S_(t lambda)(0)=0 and returns the constant vector(m,m); no division by d is used.'),
 one=('checked','Verification step 2.1 explicitly uses a SINGLE scalar half-difference problem with coefficient2lambda and parameter t/2 before returning the two-pixel vector.'),
 degenerate=('checked','The soft-threshold supplier used in Verification step 2.1 includes |d|=t lambda as the zero branch. The mean minimizer a=m is unique even when d=0.'),
 endpoints=('checked','The closed scalar threshold interval -t lambda<=d<=t lambda in the invoked soft-threshold formula includes both endpoint equalities, returning the common pixel mean.'),
 **{'nonempty-choice':('not_applicable','Verification step 1.1 gives the unique mean minimizer and step 2.1 the explicit unique scalar threshold minimizer; no arbitrary TV minimizer is selected.')})
entry('ex-fista-objective-increases-on-a-quadratic','Example is the fixed scalar quadratic f=x squared/4 with g=0,L=1 and x_0=1, proving its fifth accelerated objective exceeds the fourth.',
 empty=('not_applicable','The witness has one scalar coordinate, a total real quadratic and an explicit finite initial point1. It is not an empty-dimensional or empty-domain family.'),
 zero=('checked','Verification step 1.1 treats g=0 as a proper closed convex function with identity prox; zero nonsmooth term does not mean an absent or failed proximal subproblem.'),
 one=('checked','The scalar/one-coordinate identification is checked in Verification step 1.1, which explicitly computes the first two updates x_1=1/2 and x_2=1/4.'),
 degenerate=('not_applicable','The Example fixes L=1 and positive momentum radicands. It varies neither a singular step-size parameter nor a zero smoothness denominator; the nonmonotonicity is shown at these admitted fixed data.'),
 endpoints=('checked','Verification step 2.1 uses strict rational bounds for x_4 and x_5 and step 3.1 compares their absolute values, so the finite witness concerns exactly the fourth/fifth consecutive outputs.'),
 **{'nonempty-choice':('not_applicable','The initial point, quadratic and momentum recurrence are prescribed. All interval endpoints in Verification steps 1.1–2.1 are explicit rational numbers, not selected approximation witnesses.')})
entry('ex-nonorthogonal-lasso-proximal-gradient-step','Example fixes a nonorthogonal two-by-two design and computes its first exact Lasso proximal-gradient update(3/5,4/15).',
 empty=('not_applicable','The Example fixes n=d=2 and explicit X,y,theta_0; both coordinate soft-threshold calls have concrete nonempty scalar data.'),
 zero=('checked','Verification step 1.1 starts at theta_0=(0,0) and obtains a nonzero gradient(-2,-1). The zero start is fully included without dividing by its norm.'),
 one=('checked','The claimed result is exactly ONE update. Verification step 2.1 thresholds the two computed coordinates once; no claim that this first iterate is the minimizer is made.'),
 degenerate=('not_applicable','The fixed penalty tau=1/10 and chosen L=3 are positive. Verification step 1.1 proves L is valid rather than taking a zero-L or orthogonal-design limit.'),
 endpoints=('checked','Verification step 2.1 uses threshold1/15 at the specific first-update coordinates2/3 and1/3; both lie strictly above it, so their strict exterior branches are justified.'),
 **{'nonempty-choice':('not_applicable','Verification step 2.1 evaluates a unique explicit soft-threshold formula at two fixed coordinates. No optimum or active set is selected from a family.')})
entry('ex-projected-gradient-on-nonnegative-orthant','Example fixes the two-dimensional orthant, a shifted convex quadratic and L=2, producing the stationary constrained point0 with outward normal(-2,0).',
 empty=('checked','The constraint set is explicitly R_+ squared and contains the initial point(0,0); its indicator is therefore not an empty-domain function.'),
 zero=('checked','Verification step 1.1 projects(-1,0) to(0,0) and shows repetition stays there. Step 2.1 has zero complementarity and proves the exact normal-cone/KKT certificate.'),
 one=('checked','Verification step 1.1 computes the FIRST projected update and repeats that same explicit calculation, rather than inferring convergence from a single small residual.'),
 degenerate=('checked','At x=0 both inequality constraints are active and one multiplier is0; Verification step 2.1 checks complementarity and stationarity directly, allowing that active-set degeneracy.'),
 endpoints=('checked','Projection in Verification step 1.1 includes the boundary coordinate0 in each nonnegative half-line. Step 2.1 verifies the normal inequality at that boundary for every z>=0.'),
 **{'nonempty-choice':('not_applicable','The projection and multipliers are the explicit vectors0 and(2,0); Verification step 2.1 proves the global certificate without selecting unspecified multipliers.')})
entry('thm-proximal-operator-existence-resolvent-firm-nonexpansive','Statement proves unique proximal existence, both resolvent directions and firm nonexpansiveness, with a separate zero-dimensional proof.',
 endpoints=('checked','Proof step 1.1 proves all conclusions for n=0 before compactness. In positive dimension, step 3.1 takes alpha down to0 only for alpha>0, and step 4.1 treats u_1=u_2 directly before dividing by their distance.'),
 **{'nonempty-choice':('checked','Proof step 1.2 chooses ONE x_0 in proper dom g to form a nonempty sublevel set. Step 2.1 proves a global minimizer exists there and step 2.2 proves uniqueness, so later proximal calls are determined rather than arbitrary selections.')})
entry('thm-projected-gradient-fixed-point-kkt-certificate','Statement proves the fixed-point/normal-cone equivalence and only the sufficient direction from feasible KKT multipliers to optimality.',
 empty=('checked','C is assumed nonempty. Proof step 1.1 separately handles n=0 with C={0}; zero equality or inequality counts leave the corresponding finite affine constraint family empty without removing that feasible point.'),
 one=('checked','Proof steps 1.2–1.3 apply to n=1 through the positive-dimensional projection supplier; a single equality or inequality is simply one of the admitted affine rows.'),
 degenerate=('checked','No constraint qualification or multiplier converse is assumed. Proof step 2.1 uses only the supplied feasible tuple and KKT sufficiency; redundant or zero constraint rows do not receive an unproved converse.'),
 endpoints=('checked','Proof step 1.3 compares z=x as an allowed equality case in the squared-distance expansion. Step 2.1 permits zero inequality multipliers and zero active slacks in its exact complementarity conditions.'),
 **{'nonempty-choice':('not_applicable','The projection is unique and the KKT tuple is supplied in the second implication. The theorem does not choose multipliers or claim they exist for every normal-cone vector.')})
# Only the template iff rows occur for these already source-read carriers.
entry('lem-prox-indicator-is-euclidean-projection','Statement identifies the unique proximal point of a closed-convex-set indicator with its nearest point; zero dimension is separately proved.')
entry('lem-prox-l1-is-soft-thresholding','Statement gives the explicit coordinate soft-threshold formula for a positive l1 penalty and positive proximal parameter.')
entry('alg-certified-inexact-proximal-gradient-and-fista','Definition requires a finite output in dom g with the actual eta-subgradient certificate and returns inconclusive when no certificate is supplied.')
