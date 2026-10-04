# Quantum statistical models: explicit proofs and scope

Research 2026-10-04. Mathematics M0–M2 has no physical premises. The physical model conclusions E1–E7 adopt P0 separately. Hilbert spaces are complex, ℏ>0 in J s, kB>0 in J/K, β=1/(kBT)>0 in J⁻¹, chemical potential μ and mode energies ε in J, mass m>0 kg, lengthL m and frequencyω s⁻¹. States are positive trace-one density operators; expectation of an unbounded diagonal observable is defined by its absolutely convergent eigenvalue-weighted sum, with second moments where claimed. Neither symmetric/antisymmetric occupation statistics nor Gibbs preparation is derived from classical mechanics or a nonrelativistic spin-statistics theorem.

<a id="M0"></a>

## M0 — diagonal domains and exact occupation trace

For a specified finite/countable orthonormal basis |a⟩ and real ea, define D(H)={c∈ℓ²:Σe_a²|c_a|²<∞}, (Hc)a=ea ca. Finite support is dense and graph-core truncation converges by summable tails. Testing the adjoint identity against each basis vector forces (H*c)a=ea ca and the same squared-sum domain, proving self-adjointness. This is the actually inspected NRQM M12 diagonal lemma, also proved here; no generic continuous spectrum basis is assumed.

For finite/countable mode indexI and allowed occupations nj∈N0 (boson) or{0,1} (fermion), let Ω be the configurations of finite total occupation, and ℋ=ℓ²(Ω). Ω is countable: it is a countable union of finite mode-support choices and integer occupations. H,N are real multiplication operators on their own squared coefficient domains, with H(n)=Σεj nj,N(n)=Σnj. The grand generator Kμ has its own multiplication domain for Σ(εj−μ)nj; an unexamined equality D(Kμ)=D(H)∩D(N) is not asserted. Boson εj−μ>0 and qj=exp[−β(εj−μ)]<1; require sup qj≤q*<1 andΣqj<∞. Fermions allow arbitrary finite realμ but requireΣqj<∞ and only finitely many εj−μ<0, as in the gas model below.

Summing positive trace terms over configurations supported on the firstM modes gives finite products ΞB,M=∏j≤M(1−qj)⁻¹, ΞF,M=∏j≤M(1+qj). These supports increase and coverΩ; their increasing sums equal the full countable trace. For bosons−log(1−q)≤q/(1−q*) by integrating (1−u)⁻¹, and for fermionslog(1+q)≤q, so products converge to finite positive Ξ. Thus exp(−βKμ) is a positive diagonal trace-class operator and ρ=exp(−βKμ)/Ξ is normalized. Diagonal finite partial sums converge in trace norm because the remaining positive diagonal trace tends0. For diagonal operators trace class means the sum of absolute eigenvalues is finite; no general noncommutative trace construction is inferred from this special case.

Finite mode marginals factor after summing other occupations. Boson P(nj=r)=(1−qj)qj^r, mean qj/(1−qj), variance qj/(1−qj)²; fermion P(nj=1)=qj/(1+qj), variance qj/(1+qj)². Geometric-polynomial tails justify derivative sums uniformly on q≤q*<1. Independence concerns this diagonal grand preparation, not arbitrary quantum states. Σ⟨nj⟩<∞ under these bounds, so the probability of totalN=∞ is zero: for any finite cutoff, Markov bounds tail occupied-number probability by its summable mean tail. This agrees with the finite-total-occupation Hilbert space. For finite mode lists and fixedN, the canonical trace is the coefficient of z^N in ∏(1−z e^−βεj)⁻¹ or∏(1+z e^−βεj); the fixed-number constraint removes mode independence. Positive coefficient limits apply to countable lists when bounded by any finite grand trace at admissiblez. All statistics are model assumptions in physical use.

On finite occupation-basis spans, boson a_j|n⟩=√nj|n−ej⟩ and a_j*|n⟩=√(nj+1)|n+ej⟩ give [a_i,a_j*]=δij and the other commutators0 by coefficient multiplication. Closed weighted-shift domains requireΣnj|cn|²<∞ for a_j andΣ(nj+1)|cn|²<∞ for a_j*, from the coefficient norm and adjoint test. For ordered fermion modes use sign(−1)^(Σi<j ni) in removal/addition; different-mode swaps change sign once, while same-mode removal/addition exhausts the two occupations, giving {a_i,a_j*}=δij, {a_i,a_j}=0 on the span and, since each shift norm≤1, on allℋ. Number n_j=a_j*a_j is a projection for fermions. These algebraic constructions provide a concrete occupation representation; no local relativistic field/spin-statistics proof is claimed.

<a id="M1"></a>

## M1 — lattice Gaussian tails and nonsingular Riemann limits

Let d≥1 integer, α>0,β>0 real scaled parameters and h→0+. Lattice Gaussian sumsΣk∈Zdexp(−β α h²|k|²) are finite for eachh: one-dimensional positive tails are bounded by a geometric tail for |k|≥1, and finite products factor. For μ<0 define FB(p)=[exp(β(α|p|²−μ))−1]⁻¹; for arbitrary finiteμ define FF(p)=[exp(β(α|p|²−μ))+1]⁻¹. They are continuous bounded on every compact domain, with Gaussian tails and all fixed polynomial-weight moments integrable. On compact sets, Riemann sums h^dΣF(hk) converge to∫F by uniform continuity: replacing the value at the cube center by values in its cube has error bounded by cube volume times the common modulus of continuity.

Tail control is uniform forh≤1. In a cube about hk, |hk|²≥|p|²/2−d h²/4, so a lattice Gaussian term times cube volume is bounded by C∫cubeexp(−c|p|²/2)dp. Cubes beyond radiusR lie outsideR−√d/2; Gaussian tail integrals vanish asR→∞ by the product Gaussian bound. The same argument handles polynomial weights by absorbing them in a slower Gaussian. Thus full-space sums converge, uniformly on compactβ,μ subsets avoiding the Bose μ=0 boundary. This is a complete restricted continuum limit, not merely a density-of-states substitution.

At Boseμ=0, FB(p)≤1/(βα|p|²), and it has Gaussian tails outside a fixed ball. For d>2 the missing-origin lattice sum near|p|≤δ is bounded byCδ^(d−2): max-norm shell |k|∞=n has at mostC_d n^(d−1) points and |hk|≥hn, so h^dΣ0<|hk|≤δ|hk|⁻²≤C h^(d−2)Σn≤δ/h n^(d−3)≤C'δ^(d−2). The continuum integral has the same small-ball bound by spherical sectors or by integrating dyadic shells of volume≤C r^d. Split into near0/compact annulus/tail and use nonsingular Riemann convergence to prove the excited μ=0 sum limit for d>2. No origin value is assigned by this argument.

The critical integral can be evaluated in all dimensions by the positive geometric expansion FB(p)=Σl≥1exp(−lβα|p|²), p≠0. Positive integral/sum limits commute by increasing finite partial sums and their exhaustions; the inspected CSM M0/published Gaussian chain gives each integral(π/(lβα))^(d/2). Hence

(2π)⁻d∫FB(p)dp=(4πβα)⁻d/2Σl≥1 l^−d/2.

The positive series converges iff d>2, by comparison with∫1∞x^−d/2dx. Consequently the critical density diverges for d=1,2; the singular integral is not made finite by ignoring one point.

<a id="M2"></a>

## M2 — finite Pauli and Heisenberg-dimer spectral calculations

On C² use σx=[[0,1],[1,0]],σy=[[0,−i],[i,0]],σz=diag(1,−1); all are bounded self-adjoint on allC². Direct products give σiσj=δijI+iεijkσk and Trσiσj=2δij. A Hermitian trace-one matrix is(I+a·σ)/2 with reala; since(a·σ)²=|a|²I its eigenvalues are(1±|a|)/2, so positivity iff|a|≤1. This explicitly defines the Bloch vector rather than assuming spin-space geometry.

On C²⊗C² define C=Σiσi⊗σi. In basis↑↑,↑↓,↓↑,↓↓ it has outer diagonal entries1 and middle block[[-1,2],[2,-1]]. Thus the singlet(↑↓−↓↑)/√2 has eigenvalue−3; triplet↑↑,↓↓,(↑↓+↓↑)/√2 has eigenvalue1. For every product densityρA⊗ρB, TrρC=a·b≥−1 by|a|,|b|≤1; finite convex combinations also≥−1. Conversely ρ*=1/6Σn∈{±ex,±ey,±ez}ρ_n⊗ρ_−n=1/4[I−C/3] is explicitly separable, by expanding the six products andΣn_i n_j=2δij.

ForJ>0,β≥0, Gibbsρ∝exp(−βJC) has c=TrρC=3(1−e^4βJ)/(e^4βJ+3), andρ=1/4[I+(c/3)C], by the displayed eigenspaces. Ifc<−1 it is entangled by the product bound. If−1≤c≤0 it equals(−c)ρ*+(1+c)I/4, a separable convex combination, so entanglement occurs iffβJ>(log3)/4. This is an exact finite-matrix theorem and presumes no empirical spin measurement.

<a id="P0"></a>

## P0 — quantum model adoption and equilibrium preparations

Adopt NRQM Hilbert-space states/Born probabilities, specified H and interactions, and Bose/Fermi occupation sectors as appropriate independent assumptions. The thermal preparation is the normalized trace-Gibbs state where M0 or the finite trace theorem supplies normalization. Grand exchange additionally adopts conserved-number accounting withμ; fixedN uses its number subspace. F=−β⁻¹logZ or grand potential−β⁻¹logΞ, U=TrρH and S=−kBTrρlogρ are derived constructions, with any identification as macroscopic work/entropy a thermodynamic bridge. Primitive data include m,ℏ,ω,J,h, spacetime/boundary geometry and selected interactions. Bose statistics, Fermi exclusion, noninteraction and bath preparation are not conclusions from counting or finite-data agreement. No infinite state is called a normalized thermal trace without its actual representation/trace hypothesis.

<a id="E1"></a>

## E1 — oscillator and independent quantum spin ensembles

Use inspected NRQM M12's actual Hermite core/ONB/domain proof: H onL²(R,dx) is unitarily equivalent to multiplication ε(n+1/2), ε=ℏω>0, onℓ²(N0), domainΣ(n+1/2)²|cn|²<∞. Thus Z=exp(−βε/2)/(1−exp(−βε)), occupation mean nbar=(exp(βε)−1)⁻¹, U=ε(1/2+nbar), VarH=ε²nbar(1+nbar), CV=kB(βε)²exp(βε)/(exp(βε)−1)². Entropy is kB[(nbar+1)log(nbar+1)−nbarlognbar], by summing diagonal probabilities and geometric first moment. The zero-point energy does not contribute entropy. Positive gap gives U→ε/2,S→0,CV→0 asT↓0. Taylor expx through second order with bounded third derivative on a compact0≤x≤x0 gives x/(exp x−1)=1−x/2+O(x²), so U=β⁻¹+O(βε²) asβε↓0: two continuous classical quadratic terms, not one universally half-kBT term.

For a finite quantum spin with H=−hσz, h∈R J, all operators have full finite domain. Z=2cosh(βh),⟨σz⟩=tanh(βh),U=−h tanh(βh),VarH=h²sech²(βh), andCV=kB(βh)²sech²(βh), directly from two eigenvalues and finite derivative. N independent spins have product state/Z=Z1^N by the tensor eigenbasis. For h≠0 entropy tends0 asT↓0; for h=0 ρ=I/2 for everyT and entropykBlog2. Ground degeneracy and a specified model therefore matter to every third-law claim. Coupling h=magneticmoment·B needs a separately adopted moment inJ/T and fieldB inT; no species g-factor is derived.

<a id="E2"></a>

## E2 — genuinely interacting finite quantum dimer

Adopt two spins with H=JC−h(σz⊗I+I⊗σz), J,h J, all-domain finite operator. M2 diagonalization gives singlet energy−3J and triplet energiesJ−2h,J,J+2h, so Z=exp(3βJ)+exp(−βJ)[1+2cosh(2βh)]. This is an interaction model even though this particular block diagonalizes exactly. At h=0 its correlation/entanglement are exactly M2: forJ>0 thermal entanglement iffβJ>log3/4. ForJ<0 the triplet is the ground eigenspace, Gibbs entropy→kBlog3; forJ>0 the singlet is unique and entropy→0. Finiteβ Z is a positive finite exponential sum, hence analytic; the entanglement threshold is not a thermodynamic nonanalytic phase transition. For nonzeroh the displayed four levels can cross as parameters vary; zero-temperature eigenvalue crossings must not be advertised as a finite-temperature singularity.

<a id="E3"></a>

## E3 — commuting quantum Ising embedding and finite-volume versus phase limits

OnℋN=(C²)^⊗N define H=−JΣσz,i σz,i+1−hΣσz,i with theN indexed periodic bonds (N=2 two-bond convention), J,h J. Productσz eigenvectors form an explicit2^N ONB. All H terms commute and the eigenenergy is exactly the CSM finite-chain energy, so its Gibbs density is diagonal with precisely those probabilities. Thus the actually read thermo M18 transfer/eigenvalue/gap proof and CSM E4 finite-ring correlation proof apply by this explicit identification; no generic noncommuting quantum lattice theorem follows. Local σz correlations equal(t^r+t^(N−r))/(1+t^N) at h=0,J≥0,t=tanh(βJ). Offdiagonal single-spin observables have expectation0 in this diagonal state. FiniteN analytic thermodynamics and the restricted positive-T1D no-singularity limit remain exact. Infinite noncommuting KMS/DLR/phase claims belong to the separate specialist's actual theorem chains; finite diagonal matrices are not themselves infinite-volume states.

An exact phase/ensemble countermodel embeds the inspected CSM E7 three-sector model inℋN=C⊕C⊕(C²)^⊗(2N), H=0⊕Nε⊕2NεI, ε>0 J. The trace gives ZN=1+exp(−βNε)+4^Nexp(−2βNε), and the middle-sector projector has Gibbs probability≤1/(2·2^N+1), from AM–GM on outer weights. Its spectral shell atNε is a pure one-dimensional subspace with probability1 for that projector. MoreoverN⁻¹logZN→max(0,log4−2βε) with error≤log3/N, first-order cusp atβc=log2/ε. This is a completely specified nonadditive Hamiltonian family; it does not prove a phase theorem for generic short-range quantum matter or universal ensemble inequivalence.

<a id="E4"></a>

## E4 — finite periodic ideal gas, trace and occupation assumptions

Define the one-particle model onℓ²(Zd) with ONB|k⟩, εk=α|2πk/L|², α=ℏ²/(2m) J m², domainΣ εk²|ck|²<∞. This is a spectral periodic-box model with k labels integers and physical wavevector2πk/L in m⁻¹; equivalence to the differential periodic Laplacian requires the separate Fourier/periodic-domain theorem and is not assumed necessary here. Optional g integer internal components use index(k,s),1≤s≤g. VolumeV=L^d in m^d, β>0. M1 givesΣexp(−βεk)<∞. For bosonsμ<0 guarantees q*<1, and fermions any finiteμ has only finitely many negative εk−μ; M0 supplies trace-class grand states and exact means

nB,k=[exp(β(εk−μ))−1]⁻¹, nF,k=[exp(β(εk−μ))+1]⁻¹.

Mode number variance is nB(1+nB) or nF(1−nF), and moments of H,N are finite: on compactβ,μ parameter subsets takeβ≥b>0, Boseμ≤−δ, and split modes into finite low energies plus high energies bounded byC polynomial(εk)exp(−bεk/2). Independent-mode moment expansion gives finite means/variances and justifies derivatives by uniform tails. At Boseμ=0 the zero-mode geometric trace diverges, while fixedN canonical trace remains finite by bounding its coefficient with an admissibleμ<0 grand trace. Finite-volume Bose ground occupation is not a finite-volume nonanalytic phase theorem. In fermions no single mode can have occupation>1, while multiple internal modes are distinct states. No occupation rule is inferred solely from a spin label in this NR model.

<a id="E5"></a>

## E5 — actual thermodynamic density and dimension-restricted BEC

Write N0 for the ground-number observable and nbar0=⟨N0⟩ for its expectation; deterministic n0 symbols in the density equations below denote that expectation. Fix homogeneous periodic dispersion E4 withg=1, β>0 and particle densityρ>0 in m^−d; chooseμL<0 soV⁻¹Σk nB,k(μL)=ρ. At every finiteL this equation has a unique solution: continuous strictly increasing inμ, tends0 at−∞ by Gaussian tails, and diverges at0 due to the single ground mode. M1 gives fixedμ<0 continuum densityρ(μ)=(2π)⁻d∫FB(p)dp. It is strictly increasing and continuous; dominated Gaussian bounds hold on compact negativeμ sets. It tends0 at−∞ and tendsρc=(4πβα)⁻d/2ζ(d/2) when d>2, or∞ when d=1,2, by the positive series and p-test inM1. Hereζ(s)=Σl≥1l^−s for s>1, not an assumed analytic continuation.

Ifρ<ρc, or any finiteρ in d≤2, there is uniqueμ*<0 withρ(μ*)=ρ. Bracketμ* by two nearby negative values; fixedμ Riemann convergence bracketsμL there for largeL, provingμL→μ*. Then n0/V→0. Thus this homogeneous quadratic gas has no extensive ground-mode BEC in d=1,2 at positiveT and fixed finite density. This statement says nothing about harmonic traps, finite crossover, interactions/BKT or different dispersion.

For d>2 andρ≥ρc, μL→0: ifμL≤−δ along an unbounded sequence, monotonicity and fixedμ convergence implyρ≤ρ(−δ)<ρc, contradiction (also atρ=ρc). Excited density is bounded above by itsμ=0 missing-origin sum, which tendsρc byM1's singular lattice estimate. For any fixedμ'<0 eventuallyμL≥μ', giving liminf excited density≥ρ(μ'); letμ'↑0 to obtainρc. Hence n0/V→ρ−ρc, positive exactly above critical density and zero at equality. Forρ>ρc the ground relationμL=−β⁻¹log(1+1/n0) gives μL=−1/[β(ρ−ρc)V](1+o(1)), by log(1+x)/x→1. This is a proved zero-mode density result in a sequence of grand states adjusted to fixed mean density, not a canonical many-body theorem.

LetλT=√(2πℏ²β/m). For d=3,ρc=λT⁻³ζ(3/2), Tc=[2πℏ²/(mkB)][ρ/ζ(3/2)]^(2/3), and mean condensed fraction1−(T/Tc)^(3/2) belowTc. Ground geometric variance gives Var(N0/V)=(nbar0+nbar0²)/V²→(ρ−ρc)². Nonconcentration also follows directly, rather than from variance alone: withρ0=ρ−ρc>0 andq0=nbar0/(1+nbar0), P(N0/V≥x)=q0^ceil(Vx)→exp(−x/ρ0) for everyx>0, sinceVlogq0→−1/ρ0. In particular P(N0/V≥2ρ0)→exp(−2)>0, excluding convergence in probability toρ0. Thus condensed ground density does not concentrate in this grand ensemble, contradicting a blanket negligible-fluctuation inference. FixedN canonical ensembles may behave differently; equivalence is not supplied by matching means. Condensate density is a mode occupation expectation; neither superfluidity nor an interacting empirical condensate follows from this ideal proof.

<a id="E6"></a>

## E6 — Fermi continuum and exact zero-temperature3D branch

For finiteμ and β>0, E4/M1 giveρF(μ,β)=g(2π)⁻d∫FF(p)dp and energy densityu=g(2π)⁻d∫α|p|²FF(p)dp. Number density is strictly increasing inμ from0 to∞: monotonicity is pointwise strict, and forμ→∞ the ballα|p|²≤μ has FF≥1/2 and unbounded volume. Uniform Gaussian tails on compactμ prove continuity, so eachρ selects a unique continuumμ. Finite-volume means bracket as inE5; no mode saturates macroscopically because each occupation≤1.

At β→∞ with fixedμ>0,d=3, FF tends the indicatorα|p|²<μ away from its sphere. To justify its density/energy limit, split into a compact ball, a thin annulus about that sphere and a far tail. Off the annulus convergence is exponentially uniform; its bounded integrand has an integral bounded by annulus volume, tending0 with its thickness. Forβ≥β0 and sufficiently far out use exp[−β0(αp²−μ)] to dominate the tail uniformly, also after multiplication byp². Thus both limits follow without a missing global dominated-convergence hypothesis. PutkF=√(μ/α). Direct spherical integration givesρ=gkF³/(6π²),u=gαkF⁵/(10π²)=(3/5)ρμ. Inverting gives EF=α(6π²ρ/g)^(2/3). This characterizes the continuumT=0 fixed-density endpoint; convergence ofμ(ρ,β)→EF follows by bracketing the increasing finite-T densities atμ=EF±δ and using those proven limits.

Define the grand thermodynamic pressure p=(g/β)(2π)⁻³∫R3 log(1+exp[−β(α|k|²−μ)])dk, inPa, with wavevector k in m⁻¹. The relationp=2u/3 follows in this homogeneous3D grand model by radial integration by parts: log(1+exp[−β(αr²−μ)]) has derivative−2βαrFF; the r³ times log term vanishes at0 and∞, so(β⁻¹)∫r²log equals(2α/3)∫r⁴FF. Then zero-Tp=2ρEF/5. This is ideal Fermi degeneracy pressure, not a theorem for metals, neutron matter or relativistic white dwarfs without additional models. No uncontrolled Sommerfeld expansion is asserted.

<a id="E7"></a>

## E7 — useful quantum/classical limit and ensemble qualifications

For a boson or fermion mode withq=exp[−β(ε−μ)]≤r<1, |nB−q|=q²/(1−q)≤q²/(1−r), |nF−q|=q²/(1+q)≤q², so the dilute occupation approximation has an explicit summable error ifΣq²<∞. The Bose/Fermi grand log factors differ fromΣq by at mostΣq²/[2(1−r)] orΣq²/2, since integrating the geometric denominator gives the Taylor remainder. In E4 these sums are bounded by Gaussian traces times z², with z=exp(βμ). Thus a controlled low-fugacity Maxwell–Boltzmann counting limit is stated with its actual trace/density conditions; a high-temperature slogan alone is insufficient.

The finite quantum Ising embedding has diagonal classical probabilities but not a classical interpretation of all incompatible observables. The dimer's entangled Gibbs state cannot be reproduced by a convex mixture of product spins above its exact threshold. Unitary conjugation preserves Gibbs eigenvalues and entropy; an irreversible entropy-production model needs its own bath/coarse-graining assumptions. Phase/ensemble counterexamples E3/E5 concern their exact Hamiltonian families and ensembles, not all quantum matter. No primary report, measured atom count, calibration, confidence or universal evidence claim is fabricated by these models.

<a id="E8"></a>

## E8 — interacting onsite Bose and Fermi atoms

Adopt one Bose occupation spaceℓ²(N0) with H(n)=εn+Un(n−1)/2, U>0, ε,U,μ J. The grand generator is real diagonal K(n)=Un²/2+(ε−μ−U/2)n on domainΣK(n)²|cn|²<∞, dense self-adjoint by M0; the H domain is its corresponding energy-weighted domain. Completing the square or bounding the linear term gives K(n)≥Un²/4−C on each compactμ interval. Hence Ξ=Σn≥0exp(−βK(n)) is finite for every realμ,β>0, with every polynomial occupation/energy moment and derivative uniformly dominated by a Gaussian tail on compactβ≥b>0,μ intervals. This is a genuine onsite interaction, and it removes the free-mode μ<ε convergence restriction. Its mean/variance are the actual convergent sums and ∂μ⟨n⟩=βVar(n), by uniformly dominated difference quotients. No geometric occupation formula survives unlessU=0 with its separate convergence condition.

Since K(n+1)−K(n)=ε−μ+Un, its minimum is uniquelyr≥1 when ε+U(r−1)<μ<ε+Ur, orr=0 whenμ<ε. At endpointsμ=ε+Ur the two adjacentr,r+1 are degenerate minima. In the interior letδ>0 be the smaller adjacent excitation gap (forr=0 use its sole outward gap). Monotone successive energy differences give K(n)−K(r)≥δ|n−r|, so the total excited relative weight is≤2exp(−βδ)/(1−exp(−βδ)). Therefore the Gibbs probability tends to the unique number state, with a quantitative low-T bound. At a boundary the same argument outside the two minima gives equal limiting weights1/2 each; entropy→kBlog2: the Gibbs entropy identity is logΞ+β⟨K⟩, and after subtracting the minimum, the excited β(K−Kmin) weights vanish using K−Kmin≤C(1+n²), the gap estimate and the bound βexp(−βδl)≤Cδ exp(−βδl/2) for β bounded below. These zero-T occupation steps are not a finiteβ phase transition. In a sufficiently small neighborhood of (β0,μ0), expand each exponential in Δβ,Δμ; the sum of absolute Taylor terms is bounded by Σn exp[−β0K0(n)+|Δβ||K0(n)|+C|Δμ|n], a finite Gaussian tail if |Δβ|<β0/2. Absolute summation therefore gives a convergent local power series forΞ, proving real analyticity rather than inferring it from smoothness alone. Independent finite onsite lattices factor exactly; adding hopping destroys that proof and requires a new construction.

For a two-mode spinful Fermi Hubbard atom use C4 occupation basis00,10,01,11, each bit0/1, H=ε(n↑+n↓)+U n↑n↓−h(n↑−n↓), with U≥0, all parametersJ and full-domain finite matrices. At chemical potentialμ its weights arew0=1, w↑=exp[−β(ε−μ−h)],w↓=exp[−β(ε−μ+h)],w2=exp[−β(2(ε−μ)+U)], so Ξ=1+2exp[−β(ε−μ)]cosh(βh)+w2. Mean total number is(w↑+w↓+2w2)/Ξ and double occupationw2/Ξ. Direct finite multiplication gives Cov(n↑,n↓)=(w2−w↑w↓)/Ξ²=exp[−2β(ε−μ)](exp(−βU)−1)/Ξ²≤0. Thus repulsive interaction introduces a provable correlation in a grand state; the independent Fermi mode formula does not apply to arbitrary interacting systems. This exact finite Hubbard atom is not a Hubbard-lattice thermodynamic phase theorem or an empirical material prediction.
