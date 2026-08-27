# Step 8 adjudication — group b

Batches: 3, 9. Rejections adjudicated: 54. Outcomes: 20 confirmed fatal, 34 confirmed nonfatal, 0 false positive.

All 54 exact rejection tuples were appended to `research/frontier-20-judge-adjudications.jsonl` with the pre-edit guard hash. Each confirmed fatal has a matching row in `research/defect-ledger.jsonl`. No incoming or outgoing cross-group alert was present.

## Complete dispositions

- `cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy` on `the-hartogs-phenomena-examples` — **confirmed_nonfatal** — context `e5af00788c0c9fd8d7eed48371b30ce381bebeafa45b47c3271da51392870197`, pre-edit item `273b4e48bca80d8ec396bbdd0597be3ee8d07ef0f59e2eba52e7c63a3b84c618`.
  Evidence: Step 2.1 needs the identity theorem but cites none. Under this page’s extension definition, an extension need agree with $1/z_1$ only on some open overlap; concluding $z_1F\equiv1$ up to a hyperplane point requires connectedness and identity.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `cex-sine-over-x-is-only-conditionally-convergent` on `the-residue-theorem-examples` — **confirmed_nonfatal** — context `37cd806211e40499b1c45e92c2917a1af279556980337e6f30e9cc0577fd6470`, pre-edit item `2832b1762367f4f898c782c55b1c9dcbede6ec53f602f439e083b01e055ac581`.
  Evidence: [L2] is stronger than its citation. The cited theorem requires a nonnegative monotone divergent weight and a bounded-gap consecutive sequence of intervals; it does not say that arbitrary mass on infinitely many disjoint tails alone forces absolute divergence.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum` on `subharmonic-functions-and-the-dirichlet-problem-examples` — **confirmed_nonfatal** — context `8b9a9023e5ed342d16aabea2756008032877cc7ab2ccfc7ebc0f5d41adeac65b`, pre-edit item `6d85bf97833e82897a6c974d9cf67a41eecd1493b3ba4c2208c764eeccf347ed`.
  Evidence: Step 3.1 only shows that some boundary point is irregular. It gives no reason that every outer-circle point is regular, so it cannot conclude that the puncture is irregular; this needs the exterior-disc regularity result, which is neither cited nor proved.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `cor-basel-sum-by-residues` on `the-residue-theorem` — **confirmed_nonfatal** — context `66a04a143c10c671ebf29a36ab5af4a890174b857fe17c47ee8b94174b0bbfe9`, pre-edit item `ece56e275c7fffba985eb72863780c0711bec82b36908573866d3dd1940c5d23`.
  Evidence: Step 1.2 derives the Laurent coefficient from Taylor expansions of sin and cos, but its only citation [L1] states their zero sets and simplicity. No cited fact licenses those expansions or the coefficient −π²/3.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `cor-hartogs-figure-obstruction-to-domain-of-holomorphy` on `the-hartogs-phenomena` — **confirmed_nonfatal** — context `ce24ff6c9076f448cfcccbea1d96f364e788523b1d538acfe4a952e0cb102dd1`, pre-edit item `c43e2c5b885207b3fa90f49c1f8aa2519b349ae8c1e658923bec2fcd625e521e`.
  Evidence: Step 1.1 overstates [L2]: under the cited extension definition, [L2] guarantees agreement only on some nonempty open overlap, not $F_f=f$ on all of $H(r,s)$. Extending that agreement across connected $H(r,s)$ needs the identity theorem, which is not cited.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `cor-modulus-powers-of-holomorphic-functions-are-subharmonic` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `4b711667c36be71fbf2b81f37793c420cd6ccf52bacad4a9286402f74c820441`, pre-edit item `06ac21eb336f57e32498bc693d0ca7219d28c333cde6a2c6c2148ff1284aec35`.
  Evidence: Step 1.1 relies on Jensen’s inequality for the extended-real boundary function $u=\log|f|$, but cites only [L1] and “algebra.” No stated dependency licenses Jensen or its extended-real application at boundary zeros.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `cor-no-isolated-holomorphic-singularities-in-several-complex-variables` on `the-hartogs-phenomena` — **confirmed_nonfatal** — context `88190d5be9fc7bee8b0031a09db81ddc76f9dce239b1df1012d6f87f2a72cbae`, pre-edit item `201e908a6b13037fd533b8a792d89941aa4b5156f76751c7ce73166a5cb6a8dd`.
  Evidence: Step 1.1 misapplies [L1] to $\Omega\setminus\{a\}$: that theorem requires a puncture point belonging to its ambient domain, but $a\notin\Omega\setminus\{a\}$. It should be applied to the original domain $\Omega$ and point $a$.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `def-holomorphic-extension-and-domain-of-holomorphy` on `the-hartogs-phenomena` — **confirmed_fatal** — context `0e3b6337c0df3ad86142c70bddeecdb61935790d5fa7cdf044fa0e9085a28865`, pre-edit item `e8a7da6f935ab4a39a526e2b8cc583d8cb3550c880f7c80fe4129600f1d0c8d2`.
  Evidence: The final remark is false: Ω∩Ω̃ need not be connected, so agreement on one open component need not imply agreement on another. The identity theorem cannot make the choice of overlap irrelevant for functions defined on different domains.
  Repair: Replaced the false overlap-independence remark with the correct componentwise identity-theorem limitation.
- `def-perron-envelope-for-the-plane-dirichlet-problem` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_fatal** — context `1e43ef657186f1083a6d4379303a9ccf4b6c946661649423cbe087ed826c1a58`, pre-edit item `530060a5f60979d798168d82c78aaa0be0f2ee5b181b8748324633920816d7c8`.
  Evidence: The definition applies $U_\varphi^*$ although the cited regularization is defined only for functions into $[-\infty,\infty)$. It neither establishes nor lists a `justified_by` result showing the Perron family is nonempty and $U_\varphi$ is finite above.
  Repair: Defined the regularized envelope by a direct extended-real limsup, then recorded that the following bounds make it finite.
- `def-poisson-modification-of-a-subharmonic-function` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `293b2312e5b8633c9c1b55eb143887f98aaef9cc828a09bbca77771c73f274e4`, pre-edit item `3cd581f40c1e2e6062442a583fb5b63c9427d06c29b9e34c6d6cdcf8ca214d01`.
  Evidence: The asserted existence of boundary approximations is not licensed by the cited lemma: it gives Borel measurability and boundedness of circle data, not upper semicontinuity of the restriction or decreasing finite continuous approximants. No construction or approximation theorem is supplied.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `def-standard-residue-contours` on `the-residue-theorem` — **confirmed_fatal** — context `480fad58935edb1bb7bb0544f92042d34fa187421bd7015105748ddc53996d12`, pre-edit item `6d0b19326ae660e3177f5cd07d2be19705f7283d3f29cb978959fafc18ecc282`.
  Evidence: The keyhole directions are reversed: a positively oriented boundary of the slit annulus runs along the lower lip from R to ε and the upper lip from ε to R. This definition states the opposite, contradicting the later keyhole proof.
  Repair: Corrected the positive lower-semicircle traversal and both keyhole lip directions.
- `ex-a-square-corner-has-an-explicit-barrier` on `subharmonic-functions-and-the-dirichlet-problem-examples` — **confirmed_nonfatal** — context `88f3a2106b116872db0b832749877fa6d3b2466b73f3c5c66dca5eb001989546`, pre-edit item `73657a27bc7b6acd48b117693d554f25a66a7a98cfefb8f5b2e264799ee68e8f`.
  Evidence: [L1] is stronger than its cited theorem: the theorem states exterior-cone points are regular, not that an explicit power-map barrier exists. Moreover step 2.1 never establishes that this $b$ is subharmonic, as required by [L2].
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x` on `the-residue-theorem-examples` — **confirmed_fatal** — context `92fe11a9b0133846815d2d989d1360b7039f7ced01b60d82accc23997840516d`, pre-edit item `ff94b9b2a829151b874f69c55b991e4ad6cb7efbeab18485f2ec442d9d5739c0`.
  Evidence: Step 2.1 has a sign error: its displayed RHS is $2\pi i e^{i\pi\alpha}$ while $1-e^{2\pi i\alpha}=-2ie^{i\pi\alpha}\sin(\pi\alpha)$, so division gives $-\pi/\sin(\pi\alpha)$, not the stated positive value.
  Repair: Aligned the cited keyhole identity and residue substitution with the corrected sign.
- `ex-poisson-modification-of-a-radial-quadratic-on-a-disc` on `subharmonic-functions-and-the-dirichlet-problem-examples` — **confirmed_nonfatal** — context `df62acedb8a3cd69134d773d1e7907df11f6ec2dbfed54408e1e10d7018d6aeb`, pre-edit item `17286abd39fd3d9cf477fe9e128c584a942fbbd864269493098fe980f3a0c413`.
  Evidence: Step 2.1 misuses [L2]. [L1] says the modification is harmonic inside and equals $u$ outside, but does not give its inside piece a continuous extension or boundary values $r^2$ on $|z|=r$. Therefore uniqueness of continuous Dirichlet extensions cannot identify it with $h$.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `ex-residue-evaluates-sine-over-x-principal-value` on `the-residue-theorem-examples` — **confirmed_fatal** — context `c13f5b742e7318faa6b98789c6465e06766e00c77a82b7432787ee48f8c20059`, pre-edit item `4250900c61fc19a168485cca4707331a28dfd58093dde0f9b3ac8fcf8b9cba2b`.
  Evidence: Step 1.1 cannot apply the cited Fourier theorem to R(z)=1/z: that theorem requires zR(z)→0 at infinity, whereas zR(z)=1. Thus [L1] omits an essential hypothesis and does not license the principal-value computation.
  Repair: Replaced the inapplicable Fourier-theorem citation with a direct indented-contour proof and explicit outer-arc estimate.
- `ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle` on `the-residue-theorem-examples` — **confirmed_fatal** — context `514351ac03859a8a5cba6814696e26ed7a2348887d4605ce1c320112eb968085`, pre-edit item `0643a7304196d65d8e79d6c507d925d4b132c964831e4c93fdc7802fe818983c`.
  Evidence: Step 2.1 assigns the top side the wrong orientation: the positively traversed top runs from $T+ib$ to $-T+ib$, so its contribution is $-e^{-b^2}\int_{-T}^T e^{-x^2}dx$, not the displayed positive integral.
  Repair: Inserted the missing minus sign from the top side’s right-to-left orientation.
- `ex-trigonometric-integral-one-over-a-plus-cos-theta` on `the-residue-theorem-examples` — **confirmed_nonfatal** — context `3e7a3525a4b762b3d7bcd8ce74e0aa605729421c254df1f6fb49fb6da8a0f1ba`, pre-edit item `c6338f90e982e9e7e257dcb9d8b3c8e6d09e20ad09e201e8809b6b6f62d3d552`.
  Evidence: Step 2.1 claims $z_+z_-=1$ alone implies exactly one root is inside the unit circle. This is false (two unit-circle roots can have product 1); the argument must use $|a|>1$ to exclude unit-circle roots.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence` on `the-residue-theorem` — **confirmed_nonfatal** — context `3641210859910233e87b5a752363fd43c9101b86997f82ce4dd5dac2b71f5c87`, pre-edit item `c3bbb11884187b58cd3c50f346cc18ff4fb96fc364a41be6bd23d9fe77910cd9`.
  Evidence: [L1] omits a hypothesis of its cited theorem: that theorem requires both the two-degree gap and that q have no real zero. Calling the degree gap alone the condition for “unconditional improper convergence” misstates the result.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `fs-residue-theorem-applies-to-any-cycle-in-the-domain` on `the-residue-theorem` — **confirmed_fatal** — context `edee00ca06fcfacae764818e9eaf12a4bd74d5252d1949b1e414537fb4b2f07b`, pre-edit item `1756f534ec71009c9e7cffe0f0a2e71a7d7c51525e5e72d5232c6cb1cdb788f7`.
  Evidence: Step 2.1 wrongly says the false claim’s right-hand side is “not licensed.” Here f=1/z is holomorphic on Ω=C\{0}, so its pole set S is empty and that sum is defined as 0; this must be stated to refute the claimed equality.
  Repair: Computed the ambient pole set as empty, so the false formula has RHS 0 while the contour integral is 2πi.
- `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic` on `subharmonic-functions-and-the-dirichlet-problem-examples` — **confirmed_fatal** — context `59ecbae97f1cc37598babc12f83b286efc627abb7eadeb282f03124eee4cf4b0`, pre-edit item `7058ae729d67b95d6aaeabfc4ca3b2bffb980833b337b782cb8b0d8be5d951db`.
  Evidence: Step 2.1 miscomputes the supremum. For $-1<\operatorname{Re}z<0$ in the unit disc, $u_1(z)=\operatorname{Re}z>-1$ and $u_n(z)\le u_1(z)$, so the supremum is $\operatorname{Re}z$, not $-1$.
  Repair: Corrected the supremum on the left half-disc from −1 to Re z.
- `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `753e211f2dfc2c0144e02abe64f1d6d6d672900d7f01b41ce3a6f839f3b81515`, pre-edit item `528aabc145d69691040450834ae1b57a7f5e1263a5fbbb8d5ca86fa5889df394`.
  Evidence: Step 2.2 asserts that $q=\operatorname{Re}(1/L)$ is a weak local peak function without verifying hypothesis 3 of [L4]: $\sup_Kq<0$ for every required compact $K$. Negativity and $q\to0$ establish only the first two conditions.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `lem-bounded-punctured-slice-has-holomorphic-parameter-extension` on `the-hartogs-phenomena` — **confirmed_fatal** — context `0b466ab0f146daf493ee2ede7fb7f2f6002f378cb0c4d5d875bef5db4c8c502c`, pre-edit item `e71d40db52da1bce0dba9f93c81de5b4a1b6beb45d86692192e4e6f93846f9e9`.
  Evidence: The statement never fixes or quantifies $m$. Moreover step 1.2 requires a coordinate of $z'\in\mathbb C^{m-1}$ and step 3.1 applies [L4] there, so the argument requires an explicit assumption $m\ge2$.
  Repair: Added the missing quantifier m≥2.
- `lem-finiteness-support-residue-sum` on `the-residue-theorem` — **confirmed_nonfatal** — context `9c7fed770a9df314349b323591e2736ae660b5b971b421e90d97140406c0b6cb`, pre-edit item `41b81598c15fad456fe98c85f36e1c099d16f3550f47fd5b3914428ff9a3b44b`.
  Evidence: Step 3.1 calls S∩overline U closed and discrete in the compact set overline U from [L2], but [L2] gives this only relative to Ω. The proof never establishes overline U⊂Ω (using null-homology and local constancy), so that inference is unjustified.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `lem-gluing-lemma-for-plane-subharmonic-functions` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_fatal** — context `8d1b36ab10613ef415e6b4d5fcc4168e3011eaffa6f69b4b0ed026d7894494e5`, pre-edit item `4b90ac518f75225d2865f2bb1c114450513a5b8e3c6d125e72f0820ed8aa6e4c`.
  Evidence: In step 2.1, at a seam point in $\partial D\cap B$ that is interior to $B$, the hypothesis gives only $\limsup v\le u$, not $\liminf(h-v)\ge0$. The latter also needs $h\ge u$ there, which is never established from boundary data on $\partial B$.
  Repair: Corrected the pasting construction to max{u,v} inside D, generalized it to open D, and supplied a valid harmonic-comparison proof.
- `lem-holomorphic-dependence-of-slice-laurent-coefficients` on `the-hartogs-phenomena` — **confirmed_nonfatal** — context `e0d18ab1f18218e14914cac09f4136ad7572981844a78913852def717fd3a3a3`, pre-edit item `7c7682fff1f6100ccde0a0c403b5f0c263df1bbc4aaec7650f1cb6375c9d6722`.
  Evidence: [L3] overstates its citation: the cited theorem gives the coefficient formula only for an already convergent Laurent series, not existence of such a series for every holomorphic annulus function. Step 1.2 therefore lacks support for the asserted Laurent expansion.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `lem-indented-arc-residue-limit` on `the-residue-theorem` — **confirmed_fatal** — context `b75d0c733f50cf7ec9b1b2514d24066e0524df110f86cbf48b16b2a5a888f66d`, pre-edit item `3a80560d2a067dac7e364eefd0914d97cf19d1cbbda35c280a89b5cb3f80de3b`.
  Evidence: The statement allows any isolated singularity, but [L1] falsely writes it as residue/(z-a) plus a holomorphic function. For f(z)=1/(z-a)^2 and a nonclosed arc, the arc integral diverges as ε→0 while Res(f,a)=0.
  Repair: Restricted the hypothesis to a simple pole and corrected the arc-length estimate to use |β−α|.
- `lem-jordans-lemma-rational-functions` on `the-residue-theorem` — **confirmed_nonfatal** — context `467c18d724590ab76c8216de3b558546ebe90dd26148cc3785c7d53ea50f792d`, pre-edit item `fb13910accf1497e4e8470a4505f033bdf422e576544fc021de1e3cee5d10e16`.
  Evidence: [L1] overstates its source: the cited corollary applies to functions on an open interval, but [L1] says any interval and step 1.2 applies it on the closed interval [0,π/2]. The required endpoint extension is neither cited nor proved.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `lem-large-semicircle-vanishing` on `the-residue-theorem` — **confirmed_nonfatal** — context `fa928a77ac3c3f4793a3c124af9c6c48c0c7b77f6aca3385f450e83f094b529a`, pre-edit item `163362389c2938464d11be46ded05765cce65dbf672548afd082a9db0eed3e0a`.
  Evidence: Step 2.1 invokes the ML estimate without any cited fact or established inequality. Neither the given data nor step 1.1 supplies the contour-integral bound used to pass from a pointwise bound and arc length to the integral bound.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `lem-local-boundedness-of-separately-holomorphic-functions` on `the-hartogs-phenomena` — **confirmed_fatal** — context `efb6bfe5caa7b82dcedd9293bc34d8c70bdaf57679e70312cd0c4f7d164798c4`, pre-edit item `4767fd5edf80ac980ebe5fd27a922ed1328b288477c81f3935fa8c12e50e6979`.
  Evidence: Step 7.1 reverses an inequality: since $w_j\le0$ and $D(q,t/2)\subset D(z,t)$, the integral over the smaller disc is generally $\ge$, not $\le$, the integral over the larger disc. The asserted pointwise bound and tail estimate therefore do not follow.
  Repair: Replaced the reversed moving-disc inequality with a fixed-circle Poisson-majorant/Fatou argument.
- `lem-local-hartogs-extension-across-polydisc-shells` on `the-hartogs-phenomena` — **confirmed_nonfatal** — context `2edc9ddce3f03ea2d2e9ebc718e99f2e9e552960a1a17375c2542cbf6f41dee3`, pre-edit item `4269dfd5859d886227194792f1cb3ed4a44992b92fad4ebf85f7e45ce41dd4a8`.
  Evidence: Step 6.1 wrongly says every other extension $G$ agrees with $f$ on the particular set $|z_m|<s$. The page’s definition requires agreement only on some open overlap. One must first use connectedness of the shell and [L3] to propagate $G=f$ there.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `lem-local-subharmonic-peak-function-globalizes` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `5aee65bf71594e6786627cf9415a4ab96454b902cbf747668a31b961af100a99`, pre-edit item `4d628ae8fbfc5ce9734fe7fd81bc4ca043be7bc946230c5080efcd7647b5dfed`.
  Evidence: Step 2.1 cannot apply [L2]: that gluing lemma requires an open disc $D\Subset\Omega$, whereas $W$ is only a neighbourhood of the boundary point $\zeta$ and $\Omega\cap W$ is not such a disc. No general gluing result is cited.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_fatal** — context `7825994bcd469d84290f608680ce68b16a12b6b1b40e118d7eb10e94d882a0ab`, pre-edit item `8789760f94774114fb99fc8c6883d33da10b042ec9480ca5e2303f8d3c9d43da`.
  Evidence: Part 1 is not well defined for the allowed $α_j=0$: subharmonic functions may take $-∞$, so a term $0\,u_j(z)$ can be $0\cdot(-\infty)$, which is undefined absent a stated convention. The proof uses the same undefined operation.
  Repair: Defined zero coefficients by omission and used local integrability to exclude an identically −∞ positive sum.
- `lem-propagation-and-gluing-of-hartogs-extensions` on `the-hartogs-phenomena` — **confirmed_fatal** — context `72a5bbe7cbf126a396ee010e34f381a7cabc2be60bdbe2f6ec25573320acad9d`, pre-edit item `e5167e90a6960d3d4a40c0410050fedaf34dc900336bbbe1c039316b398c1424`.
  Evidence: Step 1.1 misuses [L1]: an extension of $f|_{U_1\cap G}$ need agree with it only on some nonempty open subset, not on all $U_1\cap G$. That intersection is not assumed connected, so the claimed gluing is unjustified.
  Repair: Strengthened the local-extension hypothesis to agreement on the whole overlap and required the U_j to be intersecting domains.
- `lem-weak-local-subharmonic-peak-function-implies-regularity` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_fatal** — context `63e13039a9cf39f84da565b9e58f91bf00020eeb0c61fa70648e6300a351a2c1`, pre-edit item `7b6d290f9ced1d453b985095f541aba7bcffbe2571d7fc7640d90a09598f31e7`.
  Evidence: Hypothesis 3 is ill formed: $q$ is defined only on $\Omega\cap U$, but it asserts $\sup_K q$ for compact $K\subset\overline{\Omega\cap U}\setminus\{\zeta\}$, which may contain boundary points outside $q$’s domain. Step 1.1 repeats this undefined use.
  Repair: Defined the boundary limsup q^∂ and stated the compact negativity condition in terms of that defined function.
- `thm-barrier-characterization-of-regular-boundary-points` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `8962142cb1e5b09fbfa9f1a6e169a3ad52428e1b6bad7d7b26c89d3085c60343`, pre-edit item `996a19ab6d509262a7fcf9fd2490ecc4da8275869ab04935ec70e2ec78517afc`.
  Evidence: In the regular-to-barrier direction (step 1.2), the proof asserts $v+q$ is subharmonic from $v$ and $q$ being subharmonic, but cites only [L4]. No cited fact licenses closure under addition; the page’s positive-combination lemma is not cited.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-c-two-characterization-of-plane-subharmonicity` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `a84ce101355533258b0ccb80073ceb25131f0be3b2be4b8e54bd0e526edc678d`, pre-edit item `d07de1cc5f4ea5550af63c8fd7c11c16b21efaac8ed3a2932535421b7be785d4`.
  Evidence: Step 1.1 uses the circle submean inequality, but its only cited library fact [L1] states harmonic comparison equivalence, not that defining inequality. No cited fact licenses this move, so the first implication has a missing dependency.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-cotangent-residue-summation-rational-functions` on `the-residue-theorem` — **confirmed_nonfatal** — context `ab58ad9102c06885dafbe0ea9dda1710f8dd1a405dfd29f09ab484f314febf29`, pre-edit item `def8052c12fc78cf558efc2fca34491cfb2c939163caf2828742e9fd2a0c0484`.
  Evidence: Step 2.1 wrongly says the residue sum inside each rectangle is 0. Step 1.2 proves only that the boundary integral tends to 0 as N→∞; the residue theorem gives a residue sum tending to 0, not an identically zero finite-N sum.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-exterior-disc-and-exterior-cone-points-are-regular` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_fatal** — context `5f6fd540f887db61cc233ae98e924e609a8cc593be09f5aeb0087bf077d09b33`, pre-edit item `a8470588dbb5e4537a19962c96cd6386f9890689f2dc32694b0de5d9de8c6519`.
  Evidence: Step 1.2 defines $b(z)=-\operatorname{Re}(z^\lambda)$ only on the local sector $S$, but a barrier must be a global subharmonic function on $\Omega$. No extension or globalization is constructed, so [L1] cannot establish regularity.
  Repair: Used an injective Möbius harmonic barrier for exterior discs and globalized a strict local power barrier for sectors.
- `thm-harmonic-majorant-characterization-of-plane-subharmonicity` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `9be18a2225618df41ceff1550db9f8990599190fa94397ee488edf5686ccd5cd`, pre-edit item `e98b82a0c814720c653376995816efdea4e0cbe019e160c9b05d335326f4fb65`.
  Evidence: Step 1.2 never handles $g\equiv-\infty$ on the fixed circle. In that case its formula gives $\phi_n\equiv-\infty$, contrary to “Each $\phi_n$ is finite”; the cited facts do not exclude the case. The proof must treat the automatic submean case or first rule it out.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-hartogs-figure-extension` on `the-hartogs-phenomena` — **confirmed_nonfatal** — context `03885f7c89f1d9346b6f3c43f38f5af7d916aae5073d50dbbbf902de7b695f3e`, pre-edit item `d62d4a3aaa7fea219e17cc12c762d8a512516fc7a917d09df4598a07c2ba5d2d`.
  Evidence: Step 1.1 mis-cites [L2]: [L2] only defines $F_\rho$ and does not imply parameter-integral holomorphy. The holomorphy of the $w$- and $z$-slices needs the contour-parameter theorem, but no stated fact cites it.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-keyhole-residue-formula-mellin-rational-integrals` on `the-residue-theorem` — **confirmed_fatal** — context `c099e6c4a50970baa386b2e8e9de0e1ea1bc3034d44679fe3061f3f6d9ed3650`, pre-edit item `3a8f54d9bb8d40d8191d3f9437c670ca654ca0fae61cd8450ee423a3531c8848`.
  Evidence: Step 2.1 reverses the residue-theorem sign. Steps 1.1–1.2 give (1-e^{2πiα})I=+2πi∑Res(f,a), not −2πi∑Res(f,a). For R(z)=1/(1+z), its formula yields −π/sin(πα).
  Repair: Corrected the residue-theorem side from −2πi to +2πi.
- `thm-log-modulus-of-a-holomorphic-function-is-subharmonic` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `dbb430c5875b8d13952d8b35bce369e39bba44520a6eaedd50280fff6b4698b4`, pre-edit item `2ff289a63ff32388f2a38ab3eb6bcc185ba1d196cb7da422f1090c12912e71bb`.
  Evidence: Step 3.1 concludes that $m\log|z-a|+\log|g|$ is subharmonic without citing or proving closure under positive scalar multiples and sums. Its cited step 2.1 and “algebra” do not license this; the page’s closure lemma is not cited.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-maximum-principle-for-plane-subharmonic-functions` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `fa2a2302758f29f977a7b165232fa1037a083f59ea09e59951c0357fa9ad56ff`, pre-edit item `c7815c88c5a351a41701612f8a78920576aa0037b01d9bb3d07a1ec990afaafc`.
  Evidence: Step 2.1 wrongly infers that $S$ is open in $\Omega$: step 1.2 proves only $D(a,r)\subset S$ for the initially chosen maximum point $a$. To show openness, the circle argument must be repeated for every $b\in S$, which is not done.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-perron-envelope-is-harmonic` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `563e6c78c3c0866de82a992308fc05be60d3731e34347e9388adc326adb4b31d`, pre-edit item `4d4d8c07bf970d75cb5901038dfd25ea792b406f7ceafd8f1964eb10f6b2d482`.
  Evidence: Step 5.1 uses [L3] to make $H_\varphi-h$ subharmonic via addition, but [L3] states only that finite maxima preserve subharmonicity and Perron-family membership. It does not license positive linear combinations or sums.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-plane-subharmonic-functions-are-locally-integrable` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_fatal** — context `aa2c953f8a267f7ed344dcafc79d82e80341524826909c31ac9cd69c9c7a42b2`, pre-edit item `8d6960cf9ab07c51c02cd03fa2a9cda07a9f0786ba440d3f6752a41297c301a4`.
  Evidence: Step 2.1 replaces the $t$-integral of circle averages by $\int_{D(c,s)}u\,dA$ without a polar-coordinate/Tonelli result. [L2] supplies only circle measurability; for extended-real $u$, this is not algebra and is needed before integrability is known.
  Repair: Reworked the local disc geometry and used the nonnegative polar-coordinate integral to prove absolute local integrability.
- `thm-poisson-modification-preserves-subharmonicity-and-majorizes` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `e53c69e5b377e486b4edac67032e7a510a3b3a5db3318b78675f2c7bf44715c7`, pre-edit item `003ccf9c127c1b30a8ddd0beb336188f8be5f52b84671b988946c55034cfd1f7`.
  Evidence: Step 3.1 misuses [L2] to infer $h\le k_m$ on all of $D$ from a boundary limsup. [L2] applies to a compactly contained closed disc with a boundary majorant; $h$ has no boundary continuity on $\partial D$, and no exhaustion or maximum-principle argument is supplied.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-removability-of-a-puncture-in-several-complex-variables` on `the-hartogs-phenomena` — **confirmed_nonfatal** — context `d47439c3fb3c1a606966bfa9dfabc03acf17a24b8959a239cbe91ea3db10862a`, pre-edit item `1ad2d341015f7fc7da3baf8f74358758f8e6aa8973ccaee05364f614dba2cd2a`.
  Evidence: Step 3.1 invokes an undefined set $P$ in “$P\setminus\{a\}$.” Even if $P$ is intended as the local polydisc, its connectedness after deleting $a$ is needed for [L4] but is neither established nor cited.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-residue-evaluation-principal-value-real-poles` on `the-residue-theorem` — **confirmed_fatal** — context `faceb451c21292e3d1e90006be0353f643770153ad168709c1ba9b388a477caa`, pre-edit item `ae7fd9303d6887470e6088da9528aeddb3a0daea410f768bad4514b818ece0a7`.
  Evidence: Step 3.1 falsely excludes a pole indented below the axis: it lies inside the upper contour. For R(z)=1/[z(z²+1)] with the lower choice at 0, PV∫R=0, but the stated formula gives −2πi.
  Repair: Fixed all real poles to upper indentations and derived the corresponding positive half-residue formula.
- `thm-residue-evaluation-rational-fourier-integrals` on `the-residue-theorem` — **confirmed_fatal** — context `7f77c8504846d0f31eddcfa1d03b3878e4382148d4a84a331acc1a9b2e812a3c`, pre-edit item `3be712fb98066892c089c3af6176e2ffe1cbef0863dc895d33f28fd408c06952`.
  Evidence: Step 1.3 treats upper and lower indentations as giving only signed half-residue corrections. A lower indentation in an upper-half-plane contour encloses that real pole, adding its full residue; [L3] gives only the arc term and does not license the claimed formula.
  Repair: Stated and proved the explicit upper- and lower-closure principal-value formulas with the correct real-pole signs.
- `thm-residue-evaluation-rational-real-integrals` on `the-residue-theorem` — **confirmed_nonfatal** — context `9f96eb0bae5611a421ed291156b437fb84804c6617729d7a83400a126346ba83`, pre-edit item `0ace28d1cabd50ee9f471ee444c670c170c43f71c08140a8855f508ffd4fb176`.
  Evidence: [L3] is stronger than its cited p-test. The supplied theorem only evaluates convergence of ∫x^{-p}; it does not state the comparison principle needed to infer convergence of an arbitrary R(x)=O(x^{-2}). Step 1.1 depends on that uncited move.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-residue-theorem-null-homologous-cycle` on `the-residue-theorem` — **confirmed_nonfatal** — context `b3506a4e436199ddfa400c6dd4318c5b85d573b6d73f42396f56094cbb30bf0f`, pre-edit item `17d767b771e5ad61f7114f2d3a0bcb5aafbb9b2d85580a5ce275831de0f79048`.
  Evidence: Step 3.1 falsely says f is holomorphic on Ω\A. A contains only poles with nonzero index, so poles in S\A remain in Ω\A. Thus [L3] cannot be applied on that set; the proof would need a domain excluding all of S.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-riemann-extension-across-a-coordinate-hyperplane` on `the-hartogs-phenomena` — **confirmed_nonfatal** — context `0627876f044e0f88981ec0ad90b7276ab8568ae8521816a5eb6563ab0257a4ce`, pre-edit item `7af312d96e6f65c77d2ce145a375f4227ba1187863ae22c42ac5d5aa7ce73995`.
  Evidence: Step 1.1 overstates [L1]. That lemma gives a holomorphic parameter value and holomorphic extensions of each individual $w$-slice, not a jointly holomorphic $F_p$ on $U\times\{|w|<R\}$. Steps 2–4 use this unproved joint extension.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-trigonometric-integral-unit-circle-substitution` on `the-residue-theorem` — **confirmed_nonfatal** — context `31048d538f01f023a35c0aaa1c0900f161a3d9779ce6c4f7994941bad82e9e12`, pre-edit item `1a3a3a647b20d53001fb871f927a56c194dbb50cf7e6d6e84e7bf90197791465`.
  Evidence: Step 1.1 asserts $dz=iz\,d\theta$ by differentiating $z=e^{i\theta}$, but [L1] states only Euler’s identity and supplies no derivative rule for the complex exponential. The cited fact does not license this step.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.
- `thm-upper-envelope-theorem-for-plane-subharmonic-functions` on `subharmonic-functions-and-the-dirichlet-problem` — **confirmed_nonfatal** — context `0a8e8e23957044b69e70dec79fb6534a6e3d54a8014593653a978fa0787ce43d`, pre-edit item `73abd9543781f05c806fe0fc86c5d084a7a86fb52228879cb16c0dcdde343ef1`.
  Evidence: Step 4.1 misapplies [L3]: $h$ is defined and known to dominate $u$ only on $D(a,r)$, whereas [L3] concerns a majorant on all of $\Omega$. The needed locality of regularization (or an extension argument) is not established.
  No content change: the objection identifies a real but nonfatal local proof, citation, or presentation gap; the mathematical claim remains correct.

## Rejudge targets

- `def-holomorphic-extension-and-domain-of-holomorphy`
- `def-perron-envelope-for-the-plane-dirichlet-problem`
- `def-standard-residue-contours`
- `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x`
- `ex-residue-evaluates-sine-over-x-principal-value`
- `ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle`
- `fs-residue-theorem-applies-to-any-cycle-in-the-domain`
- `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic`
- `lem-bounded-punctured-slice-has-holomorphic-parameter-extension`
- `lem-gluing-lemma-for-plane-subharmonic-functions`
- `lem-indented-arc-residue-limit`
- `lem-local-boundedness-of-separately-holomorphic-functions`
- `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity`
- `lem-propagation-and-gluing-of-hartogs-extensions`
- `lem-weak-local-subharmonic-peak-function-implies-regularity`
- `thm-exterior-disc-and-exterior-cone-points-are-regular`
- `thm-keyhole-residue-formula-mellin-rational-integrals`
- `thm-plane-subharmonic-functions-are-locally-integrable`
- `thm-residue-evaluation-principal-value-real-poles`
- `thm-residue-evaluation-rational-fourier-integrals`

## Checks

- Focused precheck: all 17 changed proof-bearing items passed.
- Focused render check: all 20 changed items passed YAML, math-delimiter, wikilink-in-math, and KaTeX checks.
- Dependency check: no cycles or unresolved references; repository-wide legacy warnings remained warnings.
- Proof contracts: regenerated the changed and downstream-impact entries in batches 3 and 9; focused strict checks passed.
- Citation fidelity: 159 citations across the two owned batch contracts; no missing quotes and no widening candidates.
- Defect ledger validation for `frontier-20`: 0 errors.
- Step-8 guard: all current Step-8 changes licensed by confirmed-fatal adjudications or exact terminal resolutions.
- Step-8 scope check: all 54 group-b rejections adjudicated; no open cross-group alerts.
