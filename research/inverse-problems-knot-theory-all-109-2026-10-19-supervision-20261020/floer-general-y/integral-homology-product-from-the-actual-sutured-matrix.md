# Integral homology-product reduction from the actual sutured intersection matrix

Research donor for the Ni original, 2026-10-20. This proves the homology-product operation once the actual signed sutured complex has been constructed. It supplies neither that construction nor the product-detection theorem.

## Claim with exact inputs

Assume Countable Choice as used by the general real-strip Fredholm supplier. Let $(\Sigma,\boldsymbol\alpha,\boldsymbol\beta)$ be an actual finite transverse balanced sutured diagram for a connected oriented compact three-manifold $M$. Suppose its compressed lower and upper surfaces $R_-$ and $R_+$ are connected. There are $d$ curves in each family, and both compressed surfaces have nonempty boundary. Supply the actual finite integral disk-count complex $C$, with differential squaring to zero and counting index-one Whitney strips. No absolute Maslov grading, rational-homology-sphere hypothesis, or three-sphere comparison is assumed.

If the total integral homology of this supplied complex is $\mathbb Z$, then

$$H_*(M,R_-;\mathbb Z)=H_*(M,R_+;\mathbb Z)=0.$$

Thus $M$ is an integral homology product. The conclusion is weaker than being a product sutured manifold and does not imply fiberedness by itself.

## 1. The exact relative handle matrix

Orient and order the attaching curves. Set $I_{ij}=\alpha_i\cdot\beta_j$, using the oriented surface intersection number. Compressing $\Sigma$ along all alpha curves gives $R_-$. In the diagram's handle description the lower compression body is obtained by attaching two-handles to $\Sigma\times[-1,0]$ at the lower end. Reverse this description: it is $R_-\times[0,1]$ with $d$ one-handles. The alpha circles on its upper boundary are precisely their belt circles. There are no additional zero-handles: the compressed surface is the connected nonempty $R_-$, and no closed compressed component is present in a balanced diagram. The upper beta compressions attach $d$ two-handles. They give the diagram-defined $M$; by the same balance condition no sphere or other closed compressed component requires a three-handle.

The relative cellular handle complex for $(M,R_-)$ is therefore

$$0\longrightarrow\mathbb Z^d\xrightarrow{\ I\ }\mathbb Z^d\longrightarrow0,$$

in degrees two and one. To verify the matrix, push each attaching beta circle slightly into the boundary transverse to the one-handle belt circles. An oriented traversal through the $i$th one-handle contributes $+1$ or $-1$ according to its crossing of the oriented belt circle $\alpha_i$. Collapsing the one-handle cores to their relative one-cells reads exactly this sum as the degree of the beta attaching circle on that cell. Thus its $i,j$ incidence number is $\alpha_i\cdot\beta_j$, after choosing the corresponding core orientations. Changing one handle orientation multiplies its row or column by $-1$, which has no effect on unimodularity. This is the actual relative handle complex, not a closed-manifold $H_1(Y)$ presentation.

Applying the reversed construction from $R_+$ gives the transpose matrix up to row and column signs, with the surface orientation reversed if necessary. Consequently it is enough to prove $\det I=\pm1$.

## 2. A parity needing no three-sphere normalization

For every generator $\mathbf x$ let $\sigma_{\mathbf x}$ be the permutation matching its ordered alpha labels to its ordered beta labels, and put

$$q(\mathbf x)=\operatorname{sgn}(\sigma_{\mathbf x})\prod_{i=1}^d\operatorname{sgn}_{\Sigma}(\alpha_i',\beta_{\sigma_{\mathbf x}(i)}')(x_i).$$

This is a globally defined sign on all generators, including generators in different Spin-c classes. Expanding the determinant by permutations and expanding each algebraic intersection sum gives

$$\sum_{\mathbf x}q(\mathbf x)=\det I.$$

The sign of the actual intersection of the ordered product tori is $\epsilon(\mathbf x)=c_dq(\mathbf x)$, with $c_d=(-1)^{d(d-1)/2}$. Indeed the tangent columns are the $d$ alpha vectors followed by the $d$ beta vectors. Reorder beta vectors to the matching alpha slots, giving $\operatorname{sgn}\sigma_{\mathbf x}$, and interleave the two blocks into their oriented surface-coordinate planes, giving $c_d$. The remaining two-dimensional determinants are exactly the local surface signs above. Symmetric coordinates add no real orientation sign, because a permutation of complex coordinate factors preserves real orientation.

For each Whitney strip actually counted in $C$,

$$(-1)^{\mu(\phi)}=\epsilon(\mathbf x)\epsilon(\mathbf y)=q(\mathbf x)q(\mathbf y).$$

Here is precisely the general operator calculation used, without importing an $S^3$ grading statement. Orient the two pulled-back boundary bundles by their global ordered product-circle frames. The real-frame construction in `lem-geometric-strip-linearization-frame-and-fredholm-index`, steps 2.1--6.1, compares the two transported terminal boundary frames with the chosen terminal complex frame by signs $\sigma_0,\sigma_1$. It constructs $\ell=p-2k$, with $(-1)^p=\sigma_0\sigma_1$, and proves that the index of the actual strip operator is $-\ell$. Therefore its index parity is $\sigma_0\sigma_1$. At the two endpoints the complex changes of coordinates have positive real determinant; the remaining real basis comparison is exactly the ratio of the ordered-torus intersection signs. Thus $\sigma_0\sigma_1=\epsilon(\mathbf x)\epsilon(\mathbf y)$, proving the formula. One may choose the actual product-integrable endpoint charts furnished by that supplier so its exact end hypothesis applies. No generator-to-generator Whitney class is required when no such class occurs, no equality of Spin-c labels is needed across unrelated generators, and no absolute even/odd origin is chosen by total $\widehat{HF}(S^3)$.

Every counted differential strip has index one, so the differential reverses $q$. Regard $C$ as a finite parity complex, even for $q=+1$ and odd for $q=-1$. Its Euler characteristic is consequently $\det I$.

## 3. Unimodularity and integral acyclicity

Tensor $C$ with $\mathbb Q$. Tensoring by this localization is exact, so its total homology is $\mathbb Q$ by the supplied integral homology hypothesis. Its two parity homologies form a direct sum with total dimension one; one has dimension one and the other zero. Hence its Euler characteristic is $+1$ or $-1$.

For completeness the equality of Euler characteristics of this finite parity complex and its homology uses only rank-nullity. If its two differential matrices have ranks $r_+$ and $r_-$, then the homology dimensions are $\dim C^+-r_+-r_-$ and $\dim C^--r_--r_+$. Their difference is $\dim C^+-\dim C^-$. This proves

$$\det I=\chi(C\otimes\mathbb Q)=\pm1.$$

The adjugate identity now gives an integer inverse $I^{-1}=(\det I)^{-1}\operatorname{adj}(I)$. Therefore the actual relative handle complex in section 1 is acyclic over $\mathbb Z$. Its reversed counterpart from $R_+$ is acyclic as well. These complexes compute the two asserted relative homology groups, completing the claim. When $d=0$ the empty matrix has determinant one, and the same argument reads directly as the empty relative handle complex.

## Original use and exact reading

For a knot cut along its connected Seifert surface, $R_-$ and $R_+$ are copies of that surface and so satisfy the connectedness hypotheses. Once the missing signed surface-decomposition comparison identifies its actual sutured homology with the original integral top Alexander group $\mathbb Z$, this proved operation gives the full integral homology-product conclusion needed at the start of Ni's argument. It replaces the homology-reduction operation only; characteristic product regions, horizontal and annular decomposition, taut nonvanishing, and Gabai's surfaces remain separate obligations.

Actual local sources read fully in this session: `items/lem-geometric-strip-linearization-frame-and-fredholm-index.md`, `items/lem-finite-ended-cauchy-riemann-relative-index-is-compact-determinant-winding.md`, and `items/lem-s-three-local-intersection-signs-determine-normalized-maslov-parity.md`. Only the first supplier's general strip operator calculation is invoked in the proof above. The last item's three-sphere normalization is not invoked; its finite ordered-intersection expansion motivated the separate calculation in section 2. The relative handle presentation and integral determinant conclusion are supplied explicitly here. No new independent review or canonical proof-acceptance claim is made.
