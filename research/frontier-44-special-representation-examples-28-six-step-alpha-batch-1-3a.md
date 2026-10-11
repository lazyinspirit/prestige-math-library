# Batch 1 Step 3a adjudication

Run: `frontier-44-special-representation-examples-28-six-step`. Group: `batch-1`. Scope: batch 1 only; engine owns routing, sealing and gates. This report checkpoints each item after current-content and prerequisite review. Published carriers remain read-only. No independent audit, judge or stamp is awarded.

### def-finite-sum

Reviewed complete Definition against thm-recursion (autonomous function on N x R), thm-induction-principle, field/ordered/completeness definitions, natural successor and canonical embedding interfaces. First-coordinate induction and uniqueness justify both recursions; empty values 0 and 1, one-term values a_0, shifted endpoint m=n+1, and extension of finite lists are sound and choice-free. Reader:1:6/refuter:1:1 correctly identify an inaccurate contract attribution of 0^n; replaced it with the actual recursion and zero-product justification. Mathematical carrier unchanged. Repair confidence 1 for this contract correction.

### def-integer-power

Read complete recursion, nonzero-base inverse clause, integer sign decomposition and caveats; checked autonomous recursion, integer embedding/image and order, inverse uniqueness, no-zero-divisors and zero multiplication. Natural/negative domains are disjoint and zero exponent is natural only. The claimed overlap at m=0 is false explanatory prose in a published Definition (refuter:1:2); retain it read-only and route owner correction. The actual power operation and zero convention are sound. Reader:1:7/refuter:1:3 identify only an inaccurate unit-base contract quotation; corrected by the explicit recursion induction and inverse of 1. Negative-exponent well-definedness is discharged by lem-power-laws claim 2, reviewed at the next level before consumers.

### lem-bernoulli-inequality

Read all nine proof steps and exact recursion, induction, addition/scaling, square-positivity and natural-embedding interfaces. Successor multiplication uses 1+x>=0; discarded nx^2 is nonnegative. Independently checked n=0,1, x=0 and x=-1. The second induction treats x=-1 separately and gives strictness for n>=2, x!=0; both equality directions are sound. Unit-base equality follows immediately by recursion induction. No defect or consumer interface change.

### lem-finite-sum-laws

All ten steps checked against finite recursion, induction and field/order suppliers. Main IH is quantified over sequences and scalars; splitting uses an independent tail-length induction. Additivity/scaling/product separation/telescoping successors preserve the index domain. Empty product 1 is positive; nonnegative sums bound each term and a zero sum forces every term zero by splitting. Cases m=n, n=0 and zero factors checked. No defect.

### lem-power-laws

Read twelve steps and all cited interfaces. Natural addition/product/nonvanishing finish before iterated-power induction, preventing a stage mismatch. Independent nonvanishing induction justifies negative powers; inverse uniqueness gives product and double-inverse formulas. Integer successor, negative second exponent and negative outer exponent cases checked, including zero exponents and arbitrary zero bases only for natural powers. Sound mathematical laws; L1 repeats the published Definition overlap prose defect, routed with that supplier, but no actual power-law inference uses an undefined clause.

### lem-power-monotone

Complete nine-step current proof reviewed against induction, integer recursion, positive one, sign rules, nonnegative multiplication, natural gaps and discreteness. At step 3.1 b^n>0 now cites IH 1.2; the owner receipt binds the corrected proof. Base n=0, zero base, n>=1 strictness and both trichotomy converses checked; exponent comparison uses an explicit finite-gap induction. Claims 3/4 handle a=1 and 0<a<1. Historical reader:1:5 was a nonfatal citation defect and is now repaired; no Statement change or mathematical prerequisite gap.

### lem-triangle-inequality-finite

Read all five steps, finite-sum recursion and the exact two-term triangle/absolute-value/add-order interfaces. Empty sum gives |0|=0; successor bounds the last addition then adds |a_n| to IH. Nonstrict translation is explicitly derived from strict translation plus equality. Every exponent-free real term is well typed. No defect.

### lem-power-difference-factorisation

Read nine steps against completed power/sum laws and nonnegative order multiplication. Telescoping c_(k+1)-c_k=(a-b)a^k b^(n-1-k) and negating gives the correct sign. k<n ensures both exponents natural; n=1 works with M^0=1 even at M=0. Under 0<=a<=b<=M each summand is between 0 and M^(n-1); scaling by b-a>=0 gives the bound. No defect.

### thm-cauchy-schwarz-finite

Read all eight steps and square-root, square-monotonicity, finite sum, absolute value and inverse/order interfaces. A=0 forces the entire a-list zero and produces proportionality pair (1,0), including empty lists. A>0 permits t=-B/A and multiplication by A. Zero sum of squares proves the converse equality pair (-t,1); proportionality in both mu branches implies equality. Root form uses nonnegative roots only at the end. No defect.

### cex-bernoulli-needs-x-at-least-minus-one

Current five-step refutation checked: x=-4,n=3 yields -27<-11, strict order from positive 16; n=0,1, x=-3,n=3 and x=-1,n>=2 evaluated independently. Reader removed an unsupported exhaustive equality classification; current boundary statements expressly do not classify all x<-1. Pre/post snapshot shows item and contract changed, manifest fixed; current proof retains the exact witness. Source locator is Lebl v6.3 Exercise 1.2.13 printed p35, an exercise for 1+x>0 without an induction proof. Accepted complete reader repair; confidence 1.

### thm-nth-roots-exist

All ten steps independently checked with complete least-upper-bound, epsilon supremum, strict power monotonicity and finite Lipschitz supplier proofs. Zero radicand is separated, n>=1 essential; S contains 0 and is bounded by 1+a. B=a+2 makes n B^(n-1)>0 even at n=1. Both min/2 perturbations are positive and stay in [0,B]; low case contradicts upper boundedness, high case uses epsilon attainment and strict monotonicity. Uniqueness, positivity and n=1 follow without limits or AC. No defect.

### ex-cauchy-schwarz-lagrange-identity-two-terms

All seven verification steps and exact sum/power/sign/square/root/Cauchy-Schwarz interfaces read. Expansion gives AB-C^2=(a0 b1-a1 b0)^2; nonzero square positivity gives both equality directions, including zero vectors. Symmetric proportionality is transferred through the proved Cauchy-Schwarz equality clause, avoiding a one-sided zero-vector convention. Numeric evaluation 125-121=4 checked. No defect; this unchanged example is the legitimate supplier for the later Minkowski example.

### def-rational-power

Complete Definition and Remarks read with positive-denominator/sign interfaces and already reviewed root/integer laws. For a>0 the root is positive, so every integer outer power exists. r>0 at a=0 forces positive numerator and gives 0 independently of representation; r<0 remains undefined and integer 0^0=1 untouched. Positive/negative exponent positivity is separately justified. Representation independence is explicitly discharged by lem-rational-power-well-defined, read next before use. Finite computations need no AC. No new defect in the defined operation.

### fs-negative-has-square-root

All four refutation steps and odd-root Remarks read. -1<0 contradicts nonnegative squares; no completeness is needed for nonexistence. The positive-root result never asserts absence of odd negative roots. Odd n=2k+1 gives (-1)^n=-1, sign reflection proves monotonicity on the negative half-line, and cross-sign case proves full injectivity; explicit negative-root witness gives surjectivity. Even n=2k, including k=0, has nonnegative powers. No defect.

### thm-am-gm

Read eleven-step proof and exact recursion, natural-order/addition, finite-sum/product, power, root and order suppliers. Zero entry case yields equality only for the all-zero list; positive reduction licenses later division. Natural doubling recursion stays well typed and N_j>j provides a finite dominating length. Doubling and strict factor argument preserve both equality directions. Descent appends B>0 and uses P(m+1) equality equivalence; induction on the natural gap reaches each n>=1. n=1 automatic equality; root form follows strict power monotonicity. MIT Recitation 1 pp1-2 corroborates doubling/padding but local proof supplies the descent and complete equality argument. No defect.

### lem-rational-power-well-defined

All six steps read with rational equivalence, positive-denominator order, integer embedding and power/root suppliers. mq=pn and natural nq>=1 permit injectivity after raising positive u and v to nq; negative numerators are legitimate integer powers of positive roots. At a=0,r>0 each positive-denominator numerator is a positive natural and every value is zero. No cross-multiplication or sign case omitted. No defect; discharges def-rational-power.

### cex-am-gm-needs-nonnegative-terms

Five steps checked: (-1)(-4)=4 has nonnegative root 2 while A=-5/2<0, now justified by 2A=-5 and strict scaling. All-negative pairs have positive root and negative mean; (-1,1) gives undefined negative-product root. For arbitrary real a,b the square identity still yields ab<=A^2, but passing to root form requires A>=0 and root existence. Zero and equal-entry boundaries checked. Reader repaired the wrong scaling attribution and source locator; Hunter pp26-27 and Lebl Exercise1.2.7 p34 checked directly. Accepted complete repair; confidence 1.

### ex-five-finite-proofs-of-am-gm-and-equality

Read every one of fourteen steps and eleven fact blocks against the exact completed local suppliers. Routes 2/3 normalize by positive A/G and select entries straddling 1 using strict sum/product comparison. Pair moves preserve positivity and the indicated sum/product, remove a 1, and finish ordinary induction without optimization. Step1.4 now handles zero lower factors separately; positive remaining products license strict scaling. Route4 uses independently proved integer Bernoulli, h>-1 and m+1>=2, with h=0 plus cancellation giving the full equality clause. Route5 uses corrected (m+m)A=mX+mY; both positive half-products attain bounds at equality, and geometric-mean padding gives nG<=sum by finite subtraction. n=1 and all zero cases handled once; constant-product and arbitrary-pair swaps proved in L1. MIT pp1-2 provides only doubling/mean-padding background; extra routes remain locally authored. Accepted substantial reader repair, confidence 1; no Statement/Definition or dependency interface change.

### ex-odd-roots-of-negative-reals

All four steps and six facts read with exact root, power, sign and negative-product interfaces. (-1)^2=1 is now attributed to lem-of-mult-neg at unit arguments, not to positive-factor closure. Odd n=2k+1 gives sign reflection; three order cases prove strict monotonicity on all R; explicit sign-dependent root gives surjectivity. Checked k=0/n=1, a=0, -8 and -32. Noninteger rational-power caveat now preserves already defined integer powers. Lebl Example4.4.5 p178 and Exercise4.4.4 p179 (n>=3) checked directly; n=1 is local. Accepted complete repair; confidence 1.

### fs-rational-power-of-negative-base

Read all five refutation steps, four assumptions and three Remarks against root existence, rational equivalence/order and complete integer/positive-rational laws. The negative-base proposal requires every rational representative; 1/3=2/6 yields a unique cube root -2 but no sixth root. This refutes the universal construction while preserving legitimate integer powers and the optional odd-denominator partial operation. Current owner repair replaces the false positivity-only all-roots caveat with the exact a>=0 condition, separating all rational exponents (a>0) from positive zero-base powers. Zero and odd n=1 checked. Historical reader:1:4 confirmed fatal but current defect is repaired by the installed published owner receipt; this review edits no published bytes.

### lem-rational-power-laws

All ten steps read with full representation-independence, integer laws, rational arithmetic/order, inverse positivity and zero-product interfaces. Common denominator and positive roots give addition/product/inverse laws. Iterated rational power uses x=a^(1/nq), x^q=a^(1/n), z=x^m positive even for negative m; q-th root uniqueness licenses outer exponent p. Supplementary product and sum cases explicitly require positive exponents and separate zero factors; no negative/zero mixed exponent inference occurs. No defect.

### lem-rational-power-monotone

Six steps checked with positive-rational representatives, root uniqueness, integer monotonicity and rational laws. t=s-r>0 reduces exponent comparison to a^t versus 1; a>1, a=1 and 0<a<1 cases use strict rather than merely nonstrict powers. In the base, root-order comparison then positive numerator power gives strictness. Negative original r is harmless since a^r>0; unit base and both claimed directions checked. No defect.

### thm-weighted-am-gm-rational

All nine proof steps and six facts reviewed. Finite common denominator is established by induction; nonnegative numerators are transported to naturals. Natural partial sums M_j have field images equal to real numerator sums, and embedding injectivity gives M_n=N. Repeated blocks, including empty zero-weight blocks, yield exact sum/product; N>=1 and x_j>0 license AM-GM and all rational power laws. No theorem equality clause is claimed. n=1 and weights 0/1 checked. Belk Theorem5 pp5-6 has normalized nonnegative weights and positive bases but uses exponential convexity; local proof is the finite repeated-list proof. Published Statement prose falsely says real powers have no library meaning at all and require exp/log: def-real-power defines them later, and the supremum route can prove laws algebraically. Refuter:1:7 is confirmed; owner prose correction remains pending, published carrier untouched.

### cex-rational-power-laws-need-positive-base

All five steps read with exact rational/ integer definitions, root uniqueness and absolute-value/power interfaces. Both witness sides are defined: ((-3)^2)^(1/2)=3 but (-3)^(2*1/2)=-3 is integer power. Reader corrected L1 to deny only noninteger negative-base rational powers, preserving the legitimate witness. General identity sqrt(a^2)=|a| holds at a=0 via positive-exponent zero clause. Lebl Cor4.4.3 pp177-178 convention checked. Accepted complete repair; confidence 1.

### ex-rational-power-computations-of-rational-bases

All five steps read. Verified (2/3)^2=4/9, (2/3)^3=8/27 and (3/2)^3=27/8; unique nonnegative roots justify displays before outer integer powers. 2/6=1/3 uses exact cross-products and representative independence. Negative outer -2 takes reciprocal of positive 9/4 and inverse uniqueness yields 4/9. All bases positive and denominators natural >=1; no negative-base or zero-domain use. Lebl rational convention pp177-178 checked. No defect.

### ex-two-term-am-gm-and-equality

Three steps and all five facts read. Nonnegative a,b license AM-GM and square/root equivalence; both directions and equality at zero checked. Reader now explicitly proves x^-1>0 using rational-power positivity at -1 before applying AM-GM to x,x^-1. Equality x=x^-1 iff x^2=1 and x>0 iff root is 1 closes by strict square comparison. Hunter Prop2.8 pp26-27 and Lebl Ex1.2.7 p34 checked directly. Accepted complete repair; confidence 1.

### rem-real-exponents-deferred

Complete current prose reviewed with rational laws/monotonicity, density, Archimedean, completeness and maximum/supremum interfaces. For a>1 the family is nonempty, bounded by a^R, positive and rational-consistent; a=1 is constant, below-one bases use reciprocal family, so domains are correct. Independent finite supremum-product/density/Bernoulli endpoint argument confirms the historical necessity-of-limits claim false. Current owner repair expressly allows an elementary proof and identifies deferral as reading order; def-real-power Definition confirms the later exp/log construction. Historical reader:1:3 confirmed fatal and currently repaired through its installed owner receipt. No published bytes edited and no full real-power theorem added.

### thm-young-inequality

All five steps read with rational arithmetic, order/embedding and exact positive-base weighted AM-GM interface. p,q>1 make 1/p,1/q positive rational weights summing to 1; positive a,b make a^p,b^q positive and iterated powers simplify. Zero cases handled before applying weighted theorem, using positive exponent zero clause and nonnegative RHS. q=p/(p-1) follows with nonzero denominator, including rational typing. No equality theorem is asserted. Main supplier rational theorem remains valid despite its separately routed prose defect.

### cex-weighted-am-gm-needs-normalized-nonnegative-weights

Three steps and exact weighted/rational/embedding/inverse interfaces read. Nonnegative unnormalized weights (1,1) on bases (4,4) yield 16>8; normalized weights (2,-1) on (4,1/4) yield 64>31/4, with both bases positive. Witnesses independently violate one required weight condition each; no undefined power. Reader correctly removed Hunter weighted/repeated-list attribution; actual Hunter p27 gives only unweighted background. Accepted complete source repair, confidence 1.

### ex-comparing-rational-powers

All four steps checked against exact rational exponent/base monotonicity and power laws. 2>1 and 1/3<1/2 license first comparison, fixed positive 1/2 gives the base comparison. Mixed bases/exponents require sixth powers: values 8<9 with nonnegative inputs, and trichotomy/strict power monotonicity gives the reverse implication. Chain and companion comparison correct; no limit or approximate numeric inference. No defect.

### ex-five-algebraic-proofs-of-bernoulli-and-rational-forms

All sixteen steps and ten facts reviewed. Geometric sum handles y=0 by 0^0=1 and sign reversal; exact remainder has positive constant coefficient n-1. AM-GM route uses list (y^n,1,...,1). Pascal rows now have explicit k=0 successor and autonomous row-function recursion; support/endpoints/first column, binomial successor and interior k b_mk=m b_(m-1,k-1) induction checked algebraically. Positive-x and t=-x in (0,1] expansions retain a strict nth term, including y=0. Repeated-list strictness uses H^N=product, not product^N, and zero-weight blocks cause no issue. Rational r>1, r<0 and 0<r<1 have positive rational weights; negative-exponent equality is reduced to positive 1-r. r=0,1 and x=-1 checked independently; r<0 excludes x=-1. Quadratic bound follows at z=y^2,s=r/2>=1 with equality exactly x=0 or r=2; weakening coefficient m does not inherit that equality claim. Belk Thm5 pp5-6 checked as statement context only. Accepted substantial reader repair; confidence 1.

### ex-weighted-am-gm-with-rational-weights

Six steps checked with exact positive-base, nonnegative normalized-weight supplier and rational root/law/embedding interfaces. 8^(2/3)=4, 1^(1/3)=1 and RHS=17/3 give strictness directly. Constant list 8 gives both sides 8 by exponent addition and weighted sum; no absent general equality theorem is invoked. Reader corrected Hunter p27 unweighted background and Lebl p34. Accepted complete source repair; confidence 1.

### thm-holder-finite

All six steps checked against Young, finite sums, positive/nonnegative rational laws, absolute value and inverse/order/embedding interfaces. S or T zero forces the respective list zero, including n=0; positive S,T license P,Q and normalization. Zero individual entries are covered by the nonnegative product law without applying positive-base iterated law to zero. Termwise Young sums to 1, then positive PQ scaling proves the stated stronger sum-of-absolute-products form. p=q=2 caveat correctly distinguishes |sum| from sum|.|. Reader:1:8/refuter:1:6 identify incorrect one-term contract prose, now replaced by the actual always-attained identity. Main theorem unchanged; contract repair confidence 1.

### ex-young-inequality-instances

All five steps and five facts reviewed with exact Young/AM-GM/root/square laws. Reader L2 correction now gives weighted supplier only for positive bases and no equality clause; nonnegative p=q=2 equality is independently obtained from unweighted AM-GM at a^2,b^2 then nonnegative square injectivity. Checked both zero entries, 36<97/2 and conjugate (3,3/2) instance 8=8. Hunter Thm13.94 pp296-297 checked, including its distinct full equality clause and calculus proof, neither imported as local dependency. Accepted complete repair; confidence 1.

### thm-minkowski-finite

All ten steps read against Holder, rational laws, absolute value/triangle and rational/order interfaces. p=1 is the termwise two-term triangle sum; n=0 and S=0 separated before division. p>1 yields rational q>1 and positive p-1. Terms u=0 treated separately in u^p=u*u^(p-1) and c^q=u^p, so no positive-base law misapplied. Holder gives both terms <= U/V*S^(1/q), and S>0 licenses division and exponent cancellation. Rational-scope prose is development-relative. Main inequality sound; no defect.

### ex-holder-at-three-halves-conjugate-exponents

All three steps and exact Holder/rational/absolute/finite-sum interfaces checked. Conjugates 3 and 3/2 give outer exponents 1/3 and 2/3. Constant ones yield 2 via 2^(1/3)2^(2/3)=2; disjoint supports (2,0),(0,3) have product sum 0 but factor norms 2 and 3, RHS6. Zero bases use positive-exponent clause. No absent general equality criterion attributed. Hunter Def13.93 p296 and Thm13.95 p298 checked. No defect.

### cex-minkowski-fails-for-p-below-one

All four steps read; inner roots 0^(1/2)=0 and 1^(1/2)=1 are legitimate supplementary/nonnegative values, while outer exponent 1/(1/2)=2 is an integer square. Left side (1+1)^2=4 exceeds right side 1^2+1^2=2. Reader L4 correction now states root followed by integer power for general positive rational exponent, rather than falsely identifying every power with a root. Hunter Thm13.96 pp298-299 verified as background domain, while local theorem includes p=1 separately. Accepted complete repair; confidence 1.

### ex-minkowski-two-entry-vectors-equality-and-strict

All six steps read with exact Minkowski, Lagrange, square-root/product, absolute and square-monotonicity interfaces. L1 now correctly gives outer exponent1/p=1/2 at p=2. Both nonnegative side squares differ by 2(sqrt(AB)-C), giving equality iff C>=0 and C^2=AB, hence determinant0 by independently reviewed Lagrange identity. No division: zero vectors covered; antiparallel nonzero vectors rejected by C<0. Checked equality (3,4)+(6,8) gives15 and strict perpendicular pair gives5sqrt2<10 with determinant-25. Hunter Cor13.92 p296/Thm13.96 pp298-299 read. Accepted complete repair; confidence1.

### Page-only review

Both assigned pages read completely. Published A-page closing paragraph still omits a>1 and claims limits logically necessary. It also repeats the weighted theorem's library-global unavailability claim in its middle inequality-chain paragraph; def-real-power is a counterexample. Main page description of roots, rational laws and finite inequalities matches current suppliers. Draft B-page inventory/summary remains compatible with the reviewed sixteen examples, with integer-power convention covering the odd n=1 notation. No page edits. Four owed findings are independently confirmed fatal and owner-pending; report does not claim source closure. No cross-batch prerequisite appears in the owned input, which remains [].

### Contract reconciliation

Read all boundary rows and operative citation interfaces. Every literal citation quote is contained in its current source. Nine derivation differences use explicit iota versus the declared field-image convention and are mathematically equivalent; retained. The tenth difference was the repaired monotonicity step3.1 citation and is synchronized. Corrected additional audit-evidence errors: single-term finite triangle is an identity; monotonicity does not reverse the base comparison at n=0; weighted denominator base j=0 is not the M_0 construction locus; the rational-computation example has negative exponent -2/3; rational Bernoulli endpoint r=0 is separate from r>0. These are contract-only corrections, not published edits or new proof claims. The last correction amends the touched Bernoulli contract decision; the other reader item repairs remain byte-for-byte their post-reader results except risk reviews. Published integer-power overlap claim and its repetition in power-laws L1 remain owner-pending; the audit contract now records the actual disjoint domains.

## Elementary proof refuting necessity of limits

For a>1, define E_a(z) as the supremum of positive values a^r with rational r<=z. Density supplies a rational below z and a rational upper exponent, so the family is nonempty, bounded and has positive finite supremum. For two nonempty bounded positive sets U,V, their product family has supremum (sup U)(sup V): this product bounds it; if L is any upper bound of UV, then L/v bounds U for each v>0, hence (sup U)v<=L; dividing by sup U>0 and using leastness over V gives (sup U)(sup V)<=L. No limit occurs.

Put A=E_a(x), B=E_a(y), C=E_a(x+y). Every a^s a^t=a^(s+t), with rational s<=x and t<=y, belongs to C's defining family, so AB<=C. Conversely, for rational r<x+y, density gives rational s with r-y<s<x, and t=r-s<y is rational. Thus a^r=a^s a^t<=AB. The remaining possible endpoint is rational r=x+y. For natural n>=1, h=a^(1/n)-1>=0 and integer Bernoulli gives a=(1+h)^n>=1+nh, so a^(1/n)<=1+(a-1)/n. Since r-1/n<x+y, the strict case gives a^(r-1/n)<=AB, hence a^r<=AB(1+(a-1)/n). If a^r>AB, choose n>AB(a-1)/(a^r-AB) by the Archimedean theorem; this makes the upper bound strictly smaller than a^r, a contradiction. Therefore a^r<=AB at the endpoint too and C<=AB. Thus E_a(x+y)=AB without convergence or continuity. a=1 is immediate; 0<a<1 uses the reciprocal construction. Exact local suppliers: lem-of-q-dense, thm-of-archimedean, lem-bernoulli-inequality, lem-rational-power-laws, lem-rational-power-monotone, def-complete-ordered-field.

## Source evidence and scope

Fetched four complete author/institution PDFs through the browser and downloaded them for PyMuPDF extraction; reviewed the following complete relevant sections only. Lebl v6.3, printed pp34-35: Ex1.2.7 assumes two positive inputs and states equality iff equal; Ex1.2.13 assumes 1+x>0 and provides no induction proof; Ex1.2.17 treats rational powers and a>1 supremum extension. Printed pp177-179: Cor4.4.3 and complete analytic proof, Example4.4.5 and Ex4.4.4 (odd n>=3); our n=1 argument is local. URL: https://www.jirka.org/ra/realanal.pdf.

Hunter, printed pp26-27: Prop2.8 and complete square proof, nonnegative two-term AM-GM and n-term statement (its proof is referred elsewhere). Printed pp295-299: complete Theorem13.91, Cor13.92, Def13.93, and Theorems13.94-13.96 with proofs. These use real exponents; the local suppliers prove rational forms and Holder's stronger sum-of-absolute-products display. URL: https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf.

MIT Recitation01 pp1-2: complete doubling/arithmetic-mean padding proof and positive-set supremum-product argument. The source does not supply the four additional comparison routes or full local equality bookkeeping. URL: https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_rec1.pdf. Belk Theorem5 pp5-6: normalized nonnegative weights and positive bases, complete exponential-convexity proof; corroborating statement context only. URL: https://e.math.cornell.edu/people/belk/measuretheory/Inequalities.pdf. No reading of generic Wikipedia/Rudin/Tao links is claimed. Mathematical acceptance rests on complete current local proofs and exact supplier interfaces, not bibliographic authority.

The current batch manifest, coverage and notes were read. Native notes' original five-proof deferral and old Lebl p31 locator are historical evidence superseded by the owner supplement and current carriers; they are not repaired as history. No evidence bundle was present at the exact task paths. No algorithm carrier occurs. No new supplier, pair or page is needed. No AC is used. All 38 current carriers and their direct prerequisite mathematical sections were opened; the transitive foundations were not independently audited.

## Pre/post reader comparisons

| Item | Pre-reader raw hash | Post-reader/current raw hash | Disposition |
|---|---|---|---|
| cex-am-gm-needs-nonnegative-terms | 65fd9af24e1a5e52226f43e6e86d7d47d83f0cb5c37823a609f9dd71020d8f0c | de9de993e7dfbcd8af4cecfc5d97c7e5417c0a184391599a0c351dd9eddd3c39 | accepted reader repair |
| cex-bernoulli-needs-x-at-least-minus-one | 71f110bee27ce9459c4fe22881fa30ece6bd6b57c65e333c24893c5197058fcd | e05c8d2daf748ba9accca1eeece0f8cfd30cce9a7962fd8824cb20286762b8d4 | accepted reader repair |
| cex-minkowski-fails-for-p-below-one | 92b8b7e243305d89b4b5f07ccd2fc0b6d3828db7f01fc2db9f772b8a6d92957e | d398b096e27f1f540f8ad3b7cb9a617740332f2696b53c73381ebc0d2f040ee2 | accepted reader repair |
| cex-rational-power-laws-need-positive-base | 9692f7f1a7caa0f81588c7a0e4d8a8bb9639509c1111a9768170fd5bebe963de | 9084444a8e3938e196a6c1b364c817ce7c24b0dee2ea955afb06e5e5fc5b460f | accepted reader repair |
| cex-weighted-am-gm-needs-normalized-nonnegative-weights | 9f2f6d508a5c75143dac6bf743e286712b1dd11e73d9e37455fe19e22d8b2989 | 6de7f73e9f39f833532ca76bc19ba973833549e9efb161ac37d3475257efdcdb | accepted reader repair |
| ex-five-algebraic-proofs-of-bernoulli-and-rational-forms | 577fae57d28021e5e16833153ee0f2839353b742a1f5d4462c27349be0ec7e2f | d37e9656bb99cad7ce01e2452032e62e42cde0d5f00f122586d24851ccbdfeae | amended contract endpoint evidence; reader item accepted |
| ex-five-finite-proofs-of-am-gm-and-equality | c6edb5df9df04a12373df2b2dd9605830a3d6925c17ef14bad2239b0672e689e | 5813a686fc043e500b7100870a7977955db3d7361bc4358eef32ace19d95a241 | accepted reader repair |
| ex-minkowski-two-entry-vectors-equality-and-strict | 4babfcc690abd1a0ecf8860d5ef565137834d6282abd90a3c1ec18fc0e827fe5 | 5e91e245290c1496a4941c69ad5bc2ff16dd4d05d63e962a3788c37168d28e7f | accepted reader repair |
| ex-odd-roots-of-negative-reals | 56cdb267f495763a7ec613a66adc285416df8d8ac8036a8dab16cea02fbfd2ab | 14fb6d3b4f9a2588bbf20134f9e0f5d3c6190e0a570a7bb936de031ccc9ff5d3 | accepted reader repair |
| ex-two-term-am-gm-and-equality | 75bd91091d83833af6f46a924099b13eb64d8c0814d3ee3449d75ded004f153b | eef70082744b4d3a39a6c28a8ab9f750269988d60ba174472e64153d9f2cd3fd | accepted reader repair |
| ex-weighted-am-gm-with-rational-weights | 76ad3899dbcfbf9e68fe52ec5730796995c05ce53345bb352deef9685b6b8c7a | c3239d8f002e433a095635234f82e2edb9662f1e2c80f57b6c80ac3465579a77 | accepted reader repair |
| ex-young-inequality-instances | 32d527184278a91c61fb4030b9d64891c1aeaed5b76ee4785b599fbb52306f5e | 5321d6f6a35d23a9a4b149add38172f607048eae07041cb1f4a26a7118447231 | accepted reader repair |

All twelve current item hashes equal their frozen post-reader raw hashes; each pre hash differs. Their manifest hashes are unchanged. One touched contract received an additional substantive endpoint evidence correction; other touched contracts differ from post-reader only by risk_review. Three current published carriers were separately repaired by the owner, with installed receipts and actual before archives read at the relevant loci. Reader observed_source=null does not bind original observed bytes; the later before archives and receipt ancestry establish the reported text and correction, not a retroactive original observation binding. No finding is labelled false-positive because its source was repaired.

### Focused contract precheck follow-up

Strict contract precheck initially found 53 mechanical anchoring/citation-use/input mapping errors, mostly stale reader-edit metadata. Regenerated citations/derivations only for the six affected entries with the repository tool, preserving every boundary and risk_review. Recorded the weighted supplier Proof1.1-5.1 construction as supporting_argument attached to its valid Statement citation, rather than an invalid duplicate Proof citation. Added missing integer-power and commutative ordered-field citation records already mathematically reviewed. No defect-ledger row is created for these mechanical diagnostics. Five touched decisions are amended_repair for this contract synchronization; item proofs remain their exact reader bytes.

## Handoff and actual local checks

All 27 owed obligations have one decision each: {'confirmed_nonfatal': 7, 'confirmed_fatal': 8, 'accepted_repair': 7, 'amended_repair': 5}. Thirty-eight complete risk_review records are in the owning contract; completeness means the current argument was fully examined, including explicitly unresolved source defects, not that all repairs are closed. No new Statement/Definition was edited, no item/page/manifest inventory changed, and no published file was edited by this adjudicator. No withdrawal proposed.

- `node tools/risk-report.mjs research/frontier-44-special-representation-examples-28-six-step-batch-1.proof-contracts.json` was run before reviews; final `--require-reviewed --json`: exit0, 38 routed, 0 errors.
- Batched `node tools/tsx-run.mjs tools/precheck.mts` on all twelve touched item paths: exit0, 12 checked, 0 failing. Batched `node tools/rendercheck.mjs` on the same paths with `--quiet`: exit0, 12 files parse.
- **Once after all item edits/formatters**, `node tools/proof-layout.mjs` on the twelve explicit touched paths in one command: exit0, 12 items, 76 steps, 0 defects. This dispatch made no item edits; the check verifies the accepted reader bytes. No formatter followed it.
- `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-1.proof-contracts.json --strict --json`: initially 53 mechanical errors; after focused six-entry synchronization, exit0, 38 checked, 0 errors. Two nonfatal shotgun-bracket heuristics on published power laws/monotonicity do not identify invalid inferences: their full induction steps and fact uses were independently read.
- `node tools/citation-fidelity.mjs research/frontier-44-special-representation-examples-28-six-step-batch-1.proof-contracts.json --json --fail-on-missing-quote`: exit0, 402 citations, 0 missing quotes, 2 widening candidates. Both candidates are false positives by exact interface inspection: factorisation L2 sums have natural indices k<n throughout; Lagrange L6 mentions the squared Cauchy-Schwarz claim for arbitrary real coordinates, while the square-root restatement retains nonnegative roots. Neither invents a general negative root. No routed decision or defect row added for these heuristics.
- Defect ledger append: 35 batch-1 rows, 31 fixed and 4 deferred. Scoped `/tmp` copy of the same canonical rows passes `defect-ledger validate`: 35 checked, 0 errors. Canonical run-wide validation reports 49 schema errors, all on batch7 IDs `f44-six-step-b7-*` (locations proof/Objective, role alpha, subclass proof-gap). This is an outside-owner mechanical alert, not a mathematical defect or authority to edit batch7. The generated ledger view was refreshed with the native render tool.
- Decision inventory/unique obligations and exact fixed/deferred references verified mechanically. No subject hashes were sealed or forged; the engine owns stamping and all gates. Published ledger edits used exclusive `research/.published-consumer-ledger.lock`, reread and merged while holding it, and released only the owned token. Existing owner receipt marker blocks were preserved. The classification index has no duplicated IDs; its literal metadata counts were refreshed.

### Remaining owner work

Four confirmed fatal defects remain **deferred, not fixed**: f44six-b1-integer-overlap; f44six-b1-weighted-global-prose; f44six-b1-page-base-domain; f44six-b1-page-limit-necessity. The last two each cover matching reader/refuter findings. Exact surgical corrections are specified above and in the canonical published ledger. No substantial missing mathematical result blocks them; only published-content repair ownership remains outside this dispatch. The main integer/rational operations and weighted inequality are sound, and all owned consumer uses were examined. The page's middle global-real-power assertion should be corrected together with the closing prose. These unresolved published rows cannot satisfy the engine's repaired-fatal closure rule, so this report explicitly does **not** claim Step3 gate closure or convert them to false positives. Owner must authorize/perform the published corrections through its normal durable receipt path, then the engine should route any resulting current-content obligations. Batch7 ledger schema errors require its owner's mechanical reconciliation. No judge, stamp, agent dispatch, engine transition, publication or push was initiated.

Live-run authority was checked through `.autopilot/frontier-44-special-representation-examples-28-six-step` with the dispatched status command; it reports this run running in the Step3a stages. No RESUME artifact was treated as live authority. Git history of the current manifest path was inspected; its run-local file is uncommitted and no closeout commit is claimed. No engine control or sibling recovery action was taken.
