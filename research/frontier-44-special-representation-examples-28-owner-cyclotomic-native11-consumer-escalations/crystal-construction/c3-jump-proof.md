# C3: two-color structure, arbitrary-support jump, and strict embeddings

Local construction only, retaining arbitrary fields and homogeneous nondegenerate Q. Use the proved C1 body and cyclotomic criterion, original10 PBW/Mackey/shuffle and character injectivity, the actual quantum Serre relation supplier, and existing original10 `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives`. Its exact contract is Coind_(beta,gamma)(A,B)=Ind_(gamma,beta)(B,A){+(beta|gamma)}. Equivalently Ind_(beta,gamma)(A,B)=Coind_(gamma,beta)(B,A){-(beta|gamma)}; these are the SAME shift convention, not competing formulas. The positive Coind formula is used below. Its shift has no effect on simple shift orbits. Below write e_i,f_i for simple-socle/head operators and c_i=epsilon_i^L, and use a=-a_ij>=0 when i!=j.

## Two elementary tools

For an exact induction functor Ind(A,-), a composition-series argument produces a surjection Ind(A,U)->T from some simple composition factor U of H whenever Ind(A,H)->T is surjective and T simple. Indeed choose the first term in a composition series whose induced image is nonzero; that image is T and the previous term maps to zero. When only one simple factor has the required tail support, it must be this U. This argument obtains an actual map from the simple subquotient; it does not assert that every original map factors through an arbitrarily chosen head.

If epsilon_i(A)=0 and Ind(A,U)->T is nonzero with U,T simple, then epsilon_i(T)=epsilon_i(U). Shuffle gives the upper bound; adjunction injects A tensor U into restriction of T, whose terminal epsilon_i(U) corner is nonzero, giving the lower bound. Consequently every simple factor with the wrong epsilon is excluded in the preceding composition-series argument.

## The jump lemma

Adjunction for Ind(M,L(j))->f_j M and shuffle give

    c_i(M)<=c_i(f_j M)<=c_i(M)+delta_ij.

For i!=j this is equality, and first-end symmetry gives epsilon_i(f_j^L M)=epsilon_i(M). Suppose c_i(f_i M)=c_i(M)+1. Reversed induction Ind(L(i),M) has the same ungraded character as Ind(M,L(i)); character injectivity gives the same ungraded composition factors. Its unique maximal-first-tail factor is f_i^L M, once, so f_i M=f_i^L M. Conversely this equality immediately forces the increase of c_i.

C1, finite psi-duality and the coincidence of one-step head/socle shift orbits give D e_i M=e_i DM and D f_i M=f_i DM on shift orbits. Therefore coInd(M,L_n) has simple socle f_i^n M; the existing positive-shift Coind formula gives soc Ind(M,L_n)=(f_i^L)^n M and soc Ind(L_n,M)=f_i^n M on shift orbits (the actual socle shifts are the coinduction socle shifts minus (root(M),n alpha_i)). If f_i M=f_i^L M, the same simple is both head and socle of Ind(M,L_1), and occurs once in its whole composition series by C1. Such a finite-length module is simple: if its length were greater than1, its simple socle lies in its radical and gives a second occurrence of the head. Ind(M,L_1) is thus simple and equals Ind(L_1,M). Iterated induction and nil-Hecke induction identify Ind(M,L_n)=Ind(L_n,M), up to shift; their unique heads and socles agree and occur once, so they too are simple. In particular c_i(f_i^n M)=c_i(M)+n for all n. Thus once c_i increases, it increases at every later step.

Set J_i(M)=max{n:c_i(f_i^n M)=c_i(M)}. It is finite: for sufficiently large n the root height in color i forces the eventual two-color/boundary calculation below; alternatively the first-strand cyclotomic quotient is finite dimensional, so an infinite constant-c_i string would survive the fixed quotient with lambda_i=c_i(M) and other lambda_l>=c_l(M), contradicting finite total heights in its i-direction. This alternative requires the actual rank-one boundedness supplier, rather than only finite dimension at each separate root weight. The eventual formulas below prove finiteness without that shortcut. When finite, the preceding zero-jump lemma proves J_i(f_i M)=max(0,J_i(M)-1), and first-end symmetry will give the analogous equation once the symmetric formula for J is established.

For any Lambda containing M, write p_i^Lambda(M) for its actual surviving f_i length. Once finiteness is established, the first-color criterion and cross-color invariance give exactly

    p_i^Lambda(M)=J_i(M)+lambda_i-c_i(M).                 (1)

Hence differences of p_i for two surviving simples are independent of the containing dominant weight. There is no assumption here that p_i already equals epsilon_i+weight.

## Complete two-color classification

For c<=a the direct generic-Q calculation in construction.md constructs the simple L(i^(c-n) j i^n), 0<=n<=c, with character [c-n]!_i[n]!_i i^(c-n)j i^n and epsilon_i=n, c_i=c-n. These exhaust simples: every simple has a nonzero word corner of this form, that corner has a simple submodule for the tensor product of its three block algebras, and induction from that tensor maps onto the simple. The constructed simple quotient has the only defining-word tensor multiplicity and the unique-head recursion selects it. For uniqueness with a specified n>0 strip one last i and induct on c using C1. For n=0 use first-end stripping; the last and first zero conditions cannot both hold at a positive i-count. Thus there is exactly one simple per n.

Write L(n)=L(i^(a-n) j i^n), 0<=n<=a. To prove Ind(L(n),L_1) simple, C1 gives its head T and epsilon_i(T)=n+1. Shuffle permits only two positions of j in its character: i^(a-n)j i^(n+1) and i^(a-n+1)j i^n. The first position is nonzero by the maximal-tail formula. Here the simple-socle symbols e_i do NOT satisfy quantum Serre relations. Define the EXACT divided restriction functor mathsf E_i^(r)(X)=HOM_(NH_r)(P_(i,r),Delta_i^r X), retaining the remaining R action; it is exact because the divided projective is projective. Its class gives an A-linear operator on G_0, and repeated one-strand restriction has [r]_i! times that class with the native shifts. Native10 projective Serre and induction–restriction adjunction imply sum_(s=0)^(a+1)(-1)^s mathsf E_i^(a+1-s) mathsf E_j^(1) mathsf E_i^(s)=0 on G_0: pair with any projective P of the remaining root weight; the result is the Hom pairing of Ind(P, sum_s(-1)^s P_(i,a+1-s)P_(j,1)P_(i,s)) with X, which vanishes by the native relation; the unscaled perfect cover–simple pairing forces the operator relation. Its sign agrees with native (-1)^(a+1-s) after multiplication by one common sign. Apply THIS LINEAR relation to [T]. Equivalently at the critical full root weight, apply the Hom functional h(-,T) to the projective Serre class. Only the actual word corners i^(a+1-s) j i^s for s=n and s=n+1 can be nonzero, by the preceding two-position shuffle support. The s=n+1 corner is nonzero by epsilon_i(T)=n+1 and the maximal-tail theorem. Applying the divided block idempotents does not erase a nonzero such corner: each nil-Hecke divided idempotent is full, so its tensor product is full in the block algebra and detects every nonzero module. Thus the s=n+1 contribution is a nonzero positive Laurent polynomial (a scalar class in G_0(k)); the alternating relation forces the s=n contribution also nonzero. That actual word support forces c_i(T)=a-n+1=c_i(L(n))+1. No nonlinear crystal Serre identity is used. The jump lemma therefore makes Ind(L(n),L_1) simple. It follows for every m that Ind(L(n),L_m)=Ind(L_m,L(n)) is simple. This proof uses a locally proved Serre relation, not a minimality/Gabber–Kac theorem or a parameter-independence claim.

For c>=a, every simple of ci+j is exactly

    Ind(L(n-(c-a)),L_(c-a)),  c-a<=n<=c, epsilon_i=n.     (2)

Induct on c. A simple with epsilon_i=0 would have only the word i^c j, since there is only one j and any other position of j leaves a terminal i. For c>=a+1 multiply the native projective Serre relation on the LEFT by P_(i,c-a-1) and pair with this simple. Every s>0 term has a terminal i^s block and its actual word corner is zero. The s=0 term has the nonzero defining i^c j corner; the tensor product of the divided nil-Hecke idempotents on its consecutive i-blocks is full and therefore detects it. This gives one nonzero positive Laurent polynomial equal to zero, a contradiction. Equivalently these are exact divided restriction/G_0 operators; no simple-socle crystal operator is substituted into a Serre sum. So strip one i by C1, use the inductive formula and the just-proved commuting/simple induction of L(n), and restore it. This proves existence, uniqueness, and all larger-degree characters. In particular the classifications and composition-series selection show that the head of Ind(L(i^b j i^d),L_m) is L(i^b j i^(d+m)) while b+d+m<a; at and beyond the boundary it is Ind(L(a-b),L_(m-a+b+d)).

A useful consequence: if T is a simple quotient of Ind(L(n_1),...,L(n_r),L_m), then

    epsilon_i(T)=m+sum n_t,  c_i(T)=m+sum(a-n_t).         (3)

For the first equality, shuffle bounds the tail above by that value. Split each L(n_t) as the head of Ind(L(i^(a-n_t)j),L_(n_t)), commute its appended i-block past the subsequent L(n_s) using their just-proved simple commuting induction, and obtain a surjection with all m+sum n_t i-strands at the end. Adjunction gives the matching lower bound. Repeat at the first end for the second equality. If Ind(B,L(n))->T is nonzero then epsilon_i(T)=epsilon_i(B)+n by the same stripping/commuting argument.

If B is a nontrivial simple of ci+dj with epsilon_i(B)=0, strip a last j, then strip the newly exposed maximal i-tail b. This gives Ind(B',L_b,L(j))->B with epsilon_i(B')=0. The classification (2) and simple-subquotient selection force b<=a and select L(i^b j). Repeating decreases height, giving

    Ind(L(i^b_1 j),...,L(i^b_r j))->B,  0<=b_t<=a.       (4)

All factors are actual constructed two-color simples.

## Eventual first-tail calculation for two-color modules

Let M be simple of ci+dj, m=epsilon_i(M), and let N=e_i^m M. Choose (4) for N. Induction then gives a surjection

    Ind(L(i^b_1 j),...,L(i^b_r j),L_(m+h))->f_i^h M.

Move the appended i-strands through the factors from right to left. The classification says that a factor L(i^b j) absorbs a-b i-strands to become L(a-b); beyond that point additional i-strands commute past it. Simple-subquotient selection uses epsilon_i of the target to exclude every lower-tail factor. Thus, for m+h>=sum(a-b_t), there is a surjection

    Ind(L(a-b_1),...,L(a-b_r),L_g)->f_i^h M,
    g=m+h-sum(a-b_t).

Equation (3) yields

    c_i(f_i^h M)=h+m-ar+2 sum b_t.                       (5)

This is eventual linear growth of slope1, proving J_i(M)<infinity for two-color M. The absorption algorithm in the insufficient-i case stops at the unique factor s satisfying sum_(t>s)(a-b_t)<=m+h<sum_(t>=s)(a-b_t), with that factor L(i^b_s j i^g') and all factors to its right saturated; the same classification proves that case as well.

Let T=f_j M, i!=j, gamma=epsilon_i(T). The map Ind(N,L_m,L(j))->T and simple-subquotient selection choose the unique simple U_gamma of mi+j with that tail. The classification gives gamma=m-(a-n), 0<=n<=a, and f_i^a U_gamma=Ind(L(n),L_m). For sufficiently large h, absorb the appended i-strands through U_gamma, then through all factors (4). Equation (3) now gives

    c_i(f_i^h T)=h+m-n-ar+2 sum b_t=c_i(f_i^h M)-n.      (6)

All selections are justified by the exact induction, the tail bound when the preceding factor has epsilon_i=0, and the strict lower-tail property of C1. Choose omega_i equal to (5) at some sufficiently large h and other omega_l large enough for M and T; cross-color invariance ensures those other first-tail bounds are unchanged along their f_i strings. Equations (5)–(6), the slope1 continuation, and the cyclotomic criterion give p_i^Omega(M)=h and p_i^Omega(T)=h+n. Equation (1) shows their difference is independent of the containing weight. Thus in any common containing quotient,

    epsilon_i(T)=m-(a-n),  p_i(T)=p_i(M)+n.              (7)

For j=i, C1 and the definition of p_i instead give epsilon_i(f_i M)=m+1 and p_i(f_i M)=p_i(M)-1.

## Annihilation and survival lemmas

Let A survive Lambda and let k=p_i^Lambda(A), assumed finite. If t>k, C1 says Ind(A,L_t) has only one simple quotient f_i^t A, which dies under projection. Therefore its projected module is zero: otherwise that finite-dimensional projection would have a surviving simple quotient, contradicting uniqueness. Appending any further factor U keeps the projection zero. To see this directly, choose tensor generators for A,L_t and U; the first two induced factors lie in their cyclotomic ideal multiple, and that same ideal embeds as a first-strand ideal in the full induction, so their tensors still lie in the full ideal multiple. If B is simple with c_i(B)>k, write B as the head of Ind(L_(c_i(B)),C) using the first-tail lemma. Exact induction and right exact projection now give

    pr_Lambda Ind(A,B)=0.                               (8)

Suppose instead epsilon_i(A)=epsilon_j(A)=0, B is simple of ci+dj, and c_i(B)<=k. Put b=c_i(B), C=(e_i^L)^b B. Ind(A,L_b,C)->Q is surjective for every simple quotient Q of Ind(A,B). In its first two factors the unique head f_i^b A survives. Any other factor U of Ind(A,L_b) has epsilon_i(U)<b. The original defining A|i^b|C corner of Q is nonzero by adjunction. No Ind(U,C) has this defining corner. Every word of A ends in a color outside {i,j}; in any shuffle producing U from Ind(A,L_b), all original A i/j letters occur before A's final outside-color letter, since their order is preserved. In the target defining A|i^b|C word, the prefix through that final outside-color letter contains exactly the original A i/j counts. Thus no j from C can occur in that prefix: it would increase the j count, and no original A j can move past that final letter to compensate. Nor can an added i from C or from the L_b block occur there, by the identical i-count argument. The following i^b block cannot get an i from C, because C has first-i tail0, so every nonempty word of C starts in j; its preceding j can enter neither the prefix just counted nor the pure i^b block. Hence all b consecutive i after the final outside-color letter must come from U, giving a terminal i-tail of length at least b in U, contrary to epsilon_i(U)<b. If C is the vacuum the same conclusion is immediate. This is the actual count/ordering exclusion, rather than an inference from the smaller-epsilon inequality alone. Thus the simple-subquotient selection lemma produces Ind(f_i^b A,C)->Q. Shuffle bounds c_i(Q)<=c_i(f_i^b A)+c_i(C)<=lambda_i. The same argument for j proves survival in the j-coordinate provided c_j(B)<=p_j^Lambda(A). All other coordinates are bounded by c_l(A), since B has only colors i,j. In particular choosing lambda_j sufficiently large ensures that extra inequality: c_j(f_j^d A)<=c_j(A)+d by shuffle, so lambda_j>=c_j(A)+d ensures p_j^Lambda(A)>=d>=c_j(B), without using a normal-length formula.

This survival lemma uses the actual defining-corner exclusion, not merely the inequality epsilon_i(U)<b in isolation; the latter would not control an arbitrary additional factor. It is precisely why A is required to be reduced at both i and j.

## Finiteness of jump for every simple: a separate height induction

This avoids a tacit integrability assumption in the source. The vacuum has f_i^n 1=L_n and c_i(L_n)=n, so J_i(1)=0. Assume finiteness for all strictly smaller heights than M. If r=epsilon_i(M)>0, put N=e_i^r M; then M=f_i^r N. Once first-tail growth has begun it continues at every step, by the jump lemma. Thus J_i(M)=max(0,J_i(N)-r), which is finite by induction.

If epsilon_i(M)=0 and M is nonvacuum, choose a terminal color j with epsilon_j(M)>0; necessarily j!=i. Alternately strip maximal j- and i-tails until both vanish. Height strictly decreases at the first stripping, so the resulting A has smaller height than M. Exact induction reconstructs M as a simple quotient of Ind(A,B), where B is a simple two-color module with epsilon_i(B)=0 and epsilon_i(A)=epsilon_j(A)=0. To choose B, apply the simple-subquotient selection lemma to the induced product of all stripped blocks; the terminal-tail bounds pick an actual simple factor. C1's strict-leading factor selection gives surjections Ind(A,f_i^h B)->f_i^h M for every h. Choose a dominant Lambda containing both A and M. By inductive J_i(A)<infinity, equation (1) gives finite k=p_i^Lambda(A). Equation (5) proves c_i(f_i^h B)>k for all sufficiently large h. Equation (8) forces pr_Lambda f_i^h M=0. If J_i(M) were infinite, cross-color invariance and constant c_i would instead make every f_i^h M survive that same Lambda by the cyclotomic criterion. This contradiction proves finiteness. Now (1) is established for every simple without assuming normality or per-color categorical integrability.

## Transfer of (7) to arbitrary root support

Let M,T=f_j M survive Lambda and i!=j. Strip m=epsilon_i(M) to N, then alternately strip i/j tails from N until obtaining A reduced at both colors. Reconstruct N as a simple quotient of Ind(A,B_0), with B_0 a two-color simple reduced at i. Its j-tail equals that of N by the upper/lower tail bounds. Strict-leading selection converts

    Ind(A,B_0,L_m)->M

into Ind(A,B)->M with B=f_i^m B_0 and epsilon_i(B)=m. Similarly the j-leading selection gives Ind(A,f_j B)->T and epsilon_i(f_j B)=epsilon_i(T). For every h the same argument gives Ind(A,f_i^h B)->f_i^h M and Ind(A,f_i^h f_j B)->f_i^h T.

Choose Omega containing all four A,M,B,f_j B, with omega_j sufficiently large to make the survival lemma's j-condition automatic for every candidate two-color factor above. Its j count is fixed while i-count varies, and cross-color invariance fixes its c_j. Other omega_l can be fixed because two-color factors have no other colors. Put h=p_i^Omega(M), h'=p_i^Omega(T), and k=p_i^Omega(A). These numbers are finite by the preceding height induction. Applying the contrapositive of (8) at the surviving endpoints gives c_i(f_i^h B)<=k and c_i(f_i^h' f_j B)<=k. Applying the contrapositive of the survival lemma at the next, nonsurviving endpoints gives c_i(f_i^(h+1) B)>k and c_i(f_i^(h'+1) f_j B)>k. Since each increase is at most1, both surviving endpoint coordinates equal k. Since an increase has begun, their jumps are zero.

Equation (1) applied to those endpoint modules yields p_i^Omega(f_i^h B)=omega_i-k=p_i^Omega(f_i^h' f_j B). Subtracting gives

    p_i^Omega(f_j B)-p_i^Omega(B)=h'-h
      =p_i^Omega(T)-p_i^Omega(M).

The two-color formula (7) gives its value n, where epsilon_i(T)=m-(a-n), 0<=n<=a. Equation (1) and cross-color invariance make p_i(T)-p_i(M) independent of containing quotient, proving (7) for arbitrary support.

## The jump formula

For every surviving M of root weight beta, prove

    p_i^Lambda(M)=lambda_i+epsilon_i(M)-<h_i,beta>       (9)

by induction on height. At the vacuum, p_i=lambda_i because f_i^n 1=L_n has first-tail n; epsilon=0. At positive height choose a last color j and N=e_j M, so M=f_j N and N survives the same quotient. If j=i, epsilon increases1 and actual lowering length decreases1, while <h_i,beta> increases2; (9) follows. If j!=i, equation (7) gives p_i(M)-p_i(N)=n and epsilon_i(M)-epsilon_i(N)=-(a-n), while <h_i,beta>-<h_i,beta-alpha_j>=-a. Again (9) follows. The proof never uses a connected-normality recognition theorem.

Choose any dominant weight containing a generic simple M. Combine (1) and (9):

    J_i(M)=epsilon_i(M)+c_i(M)-<h_i,beta>.              (10)

The right side is invariant under first/last reversal, so all first-end versions of jump and decrease formulas follow. This completes the actual full-support jump calculation, subject only to the explicitly listed local PBW/Mackey/Serre/coinduction suppliers and C1.

## Strict elementary embeddings: all branch cases

For generic wt(M)=-beta put c=c_i(M), bar M=(e_i^L)^c M, and Psi_i(M)=bar M tensor b_i(-c). Reversal symmetry and (10) show that applying f_i^L decreases jump by1 until it becomes zero. Since c_i(bar M)=0, initially J_i(bar M)=epsilon_i(bar M)+<h_i,wt(bar M)>. While jump is positive, first-end lowering preserves epsilon_i; after jump reaches zero, zero-jump equality makes each first-end lowering equal right lowering and epsilon_i increases1. Therefore

    epsilon_i(M)=max(epsilon_i(bar M),c-<h_i,wt(bar M)>).

For e_i, if epsilon_i(bar M)>=c-<h_i,wt(bar M)>, the jump of (e_i^L)M is positive when c>0. Raising cannot decrease c: otherwise zero-jump applied to e_i M would force e_i M=e_i^L M, contradicting that positive jump. Thus it preserves c, and cross-end stripping identifies the stripped result with e_i bar M. If epsilon_i(bar M)<c-<h_i,wt(bar M)>, then J_i(e_i^L M)=0, so zero-jump gives f_i(e_i^L M)=M and e_i M=e_i^L M; its first-tail is c-1 and stripping gives bar M. At c=0 only the first branch can occur. At epsilon_i(M)=0 the max formula forces epsilon_i(bar M)=0 and phi_i(bar M)>=c, so tensor raising is zero in its first branch. These are exactly the tensor e_i branch inequalities, including equality in the first branch.

For j!=i, first-tail invariance and Mackey stripping give (e_i^L)^c f_j M=f_j bar M, hence the lowering rule directly; applying this to e_j M gives the raising rule whenever it is nonzero. For zero raising, the equality of epsilon_j(M) and epsilon_j(bar M), obtained by repeated first-end lowering invariance, makes both sides zero. Weight is preserved, the max formula preserves epsilon_i, cross-color invariance preserves all other epsilon, and phi=epsilon+weight is consequently preserved. The map is injective because M=(f_i^L)^c bar M. Thus Psi_i is strict. A nonvacuum M has a word beginning with some i, so some c_i(M)>0; every elementary coordinate is nonpositive. Generic lowering generation follows from repeated right-socle stripping, and all f_i are nonzero by C1.

The fully proved comparison lemma in construction.md can therefore identify this module crystal with any canonical negative-half crystal for which the same strict elementary embeddings and positive-extraction property are locally proved. It does not itself supply those canonical embeddings or the star-survivor highest-weight theorem; those are still needed to identify the constructed normal cyclotomic graph with the already defined canonical B(Lambda).

For the remaining i-lowering check, f_i is nonzero in the generic module crystal and in the elementary tensor target: either it acts on the everywhere-lowerable first factor or on the elementary string. Applying the already verified raising identity to f_i M gives e_i Psi_i(f_i M)=Psi_i(M). Tensor partial inverses then force Psi_i(f_i M)=f_i Psi_i(M). This proves strict lowering including its opposite equality convention, rather than merely saying its check is similar.
