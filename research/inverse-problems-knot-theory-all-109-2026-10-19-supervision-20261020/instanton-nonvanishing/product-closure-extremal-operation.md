# Product-closure extremal operation and the exact geometric debts

This constructive donor follows the actual full fourteen-page Muñoz preprint `dg-ga/9710029v1`, read in this turn, and the source retrieval note in the sibling `top-concordance/` directory. It completes the finite recurrence, multiplicity, grading and rational-descent operations below. It is not a local proof of the gauge-theoretic ring presentation or its Donaldson insertion values. No canonical source changes or independent review are recorded. The inherited escalation has one review/repair cycle used; this is continued authoring, not a new counter.

## The precise target and conventions

For a connected closed oriented surface $\Sigma_g$, $g\ge1$, set $Y=S^1\times\Sigma_g$ and fix determinant $w$ with $c_1(w)=PD[S^1\times\{p\}]$. The desired rational determinant-one group is the simultaneous ordinary eigenspace

$$\ker(\mu(\Sigma_g)-(2g-2))\cap\ker(\mu(\mathrm{pt})-2).$$

Muñoz's quotient theory is the invariant sector of a degree-four involution in the full determinant-one group; it is not the full group. Its algebraic operators are $\alpha=2\mu(\Sigma_g)$, $\beta=-4\mu(\mathrm{pt})$. Consequently the target pair in these variables is $(4(g-1),-8)$. In genus one the quotient in the source has $(\alpha,\beta)=(0,+8)$, so its point eigenvalue is $-2$. The desired $+2$ occurs in the other sector. A proof that silently uses the quotient torus generator as the desired generator has the wrong sign.

## Exact finite algebra, including the multiplicity

Work over $\mathbb C$ and define three polynomial sequences by $P_0=1,Q_0=T_0=0$ and

$$P_{r+1}=\alpha P_r+r^2Q_r,\qquad Q_{r+1}=(\beta+(-1)^{r+1}8)P_r+\frac{2r}{r+1}T_r,\qquad T_{r+1}=\gamma P_r.$$

Let $A_r=\mathbb C[\alpha,\beta,\gamma]/(P_r,Q_r,T_r)$. In particular $A_0=0$ and $A_1=\mathbb C[\alpha,\beta,\gamma]/(\alpha,\beta-8,\gamma)$. The following statements are consequences of the displayed finite polynomials alone.

Write $J_r=(P_r,Q_r,T_r)$. For $r\ge1$ the recurrence proves $\gamma J_r\subset J_{r+1}$ directly. Indeed $\gamma P_r=T_{r+1}$; multiplying $P_{r+1}=\alpha P_r+r^2Q_r$ by $\gamma$ then puts $\gamma Q_r$ in $J_{r+1}$; multiplying the relation for $Q_{r+1}$ by $\gamma$ similarly puts $\gamma T_r$ in $J_{r+1}$, since $2r/(r+1)\ne0$. As $\gamma\in J_1$, induction gives $\gamma^r\in J_r$. Thus $\gamma$ is nilpotent on every $A_r$. In a finite-dimensional module built from these algebras, every simultaneous surface/point generalized eigenspace is supported at $\gamma=0$. There is no additional block at a nonzero $\gamma$ that could evade the calculation below.

Put $p_r^\pm(a)=P_r(a,\pm8,0)$. For $m\ge0$, with empty products one, the complete formulas are

$$p_{2m}^{-}(a)=\prod_{j=1}^{m}(a^2-16(2j-1)^2),\qquad p_{2m+1}^{-}(a)=a\prod_{j=1}^{m}(a^2-16(2j-1)^2),$$

$$p_{2m}^{+}(a)=a^2\prod_{j=1}^{m-1}(a^2+64j^2)\quad(m\ge1),\qquad p_{2m+1}^{+}(a)=a\prod_{j=1}^{m}(a^2+64j^2).$$

To prove them, set $\gamma=0$ in the recurrence. For $r\ge1$ this gives $T_r=0$ and $Q_r=(\beta+(-1)^r8)P_{r-1}$, whence

$$P_{r+1}=\alpha P_r+r^2(\beta+(-1)^r8)P_{r-1}.$$

For $\beta=-8$, the coefficient is zero for even $r$ and $-16r^2$ for odd $r$. Thus $p_{2m+1}^{-}=a p_{2m}^{-}$ and $p_{2m+2}^{-}=(a^2-16(2m+1)^2)p_{2m}^{-}$, starting with $p_0^-=1,p_1^-=a$. For $\beta=+8$, the coefficient is zero for odd $r$ and $16r^2$ for even $r$. Thus $p_{2m+2}^{+}=a p_{2m+1}^{+}$ and $p_{2m+1}^{+}=(a^2+64m^2)p_{2m-1}^{+}$, starting with $p_1^+=a,p_2^+=a^2$. These prove every formula, not just the roots at small genus.

For even $g\ge2$ put $(a_g,b_g)=(4(g-1),-8)$; for odd $g\ge3$ put $(a_g,b_g)=(4(g-1)i,+8)$. All the values $P_r(a_g,b_g,0)$ for $0\le r<g$ are nonzero by the formulas: their nonzero roots have strictly smaller absolute value than $4(g-1)$, and $a_g\ne0$. At $r=g$, $P_g(a_g,b_g,0)=0$. Also $Q_g(a_g,b_g,0)=0$, since $b_g+(-1)^g8=0$, and $T_g(a_g,b_g,0)=0$. Thus evaluation defines an actual nonzero character of $A_g$ at this point; it is not a putative root excluded by another relation.

Localize $A_g$ at this character. The element $P_{g-1}$ has nonzero residue, so is a unit. The relation $T_g=\gamma P_{g-1}=0$ first forces $\gamma=0$. This also makes $T_{g-1}=0$; the relation $Q_g=0$ then forces $\beta=b_g$. Finally $P_g(\alpha,b_g,0)$ has a simple root at $a_g$: its displayed product has distinct nonzero paired roots, and the chosen root is not zero. Write it as $(\alpha-a_g)u(\alpha)$ with $u(a_g)\ne0$. The local relation forces $\alpha=a_g$. The local algebra is therefore exactly $\mathbb C$, with no nilpotents. The genus-one assertion follows directly from $A_1$.

For every $r<g$, $P_r(a_g,b_g,0)\ne0$, so $(A_r)_{(a_g,b_g,0)}=0$: its ideal contains a polynomial that becomes invertible there. Hence in any module of the prescribed primitive form

$$V_g=\bigoplus_{k=0}^{g}E_k\otimes A_{g-k},\qquad E_0=\mathbb C,$$

the entire simultaneous generalized block at $(a_g,b_g,0)$ is one-dimensional. No dimension or multiplicity of the other primitive vector spaces $E_k$ is needed. This proves both ordinary and generalized multiplicity one, conditional only on the actual module having this primitive presentation.

One must also exclude an extra copy at the target pair from the other grading sector. The same formulas do this without importing a spectrum theorem. If $g$ is even, $P_g(\pm4(g-1)i,+8,0)\ne0$, and the same holds for every smaller index. If $g\ge3$ is odd, $P_g(4(g-1),-8,0)\ne0$ and again the same holds for every smaller index. Thus the sector that has the rotated, undesired extreme contributes no target block. For $g=1$, the quotient's sole point value is $\beta=+8$, not $-8$.

## What the actual insertion witness must establish

For even $g$ write $h=2g-2$ and $c=2^{3g-5}$. The source uses a specific fiber-sum four-manifold $C_g$ and a relative invariant $\phi(C_g^\circ,z)$. The required closed generating function in the surface direction is

$$D_{C_g}^{(w,\Sigma)}(e^{t\Sigma})=-c e^{ht}+c e^{-ht},$$

with point insertion multiplying both branches by $2$, and positive exterior insertions having zero pairing with the chosen witness. If these actual geometric equalities and the relative-invariant pairing hold, define $v=\phi(C_g^\circ,\Sigma+h)$. Applying $\partial_t+h$ to that generating function annihilates the negative exponential and gives $-2ch e^{ht}$. Taking $n$ derivatives at zero and inserting $m$ points yields the exact pairing

$$\langle v,\phi(\Sigma\times D^2,\Sigma^n x^m)\rangle=-2^{3g-4}h^{n+1}2^m.$$

The unit pairing is nonzero because $g\ge2$. Multiplication by $2\Sigma$ multiplies every pairing by $2h$, and multiplication by $-4x$ multiplies it by $-8$. Vanishing of pairings with positive exterior insertions kills the $\gamma$ action. If the insertion vectors span and the pairing is nondegenerate, these identities give the actual operator identities $\alpha v=2hv,\beta v=-8v,\gamma v=0$. This is a finite derivative calculation and nonzero test; it does not assume that a vector with the desired spectrum is automatically nonzero.

For the odd-genus source sector the corresponding branches are $c_+e^{iht}+c_-e^{-iht}$ with $c_+\ne0$ and point insertion $-2$. The insertion $\Sigma+ih$ gives $2ihc_+e^{iht}$, a nonzero pairing, and operator values $\alpha=2ih,\beta=+8$. Specifying these branch coefficients and the negative point insertion is necessary; the even-genus real exponential cannot be used unchanged. In genus one the source instead pairs the relative invariant of the complement of an elliptic fiber in K3 with the product cap. The required numbers are $D(1)=-1$ and $D(x)=2$, so their ratio is $-2$ and $\beta=+8$. This establishes the torus sign by an insertion ratio, not by counting two unperturbed critical points.

None of the displayed Donaldson evaluations is proved by differentiating its generating function. The differentiation proves the implication **from** those evaluations. The evaluations themselves are the missing geometric input.

## Grading rotation, quotient transfer, and rational coefficients

Here is the exact linear algebra for the gauge convention, with its assumptions exposed. Suppose the full complexified determinant-one homology is $H=\bigoplus_{j\bmod8}H_j$, with commuting surface and point operators of degrees $-2$ and $-4$, and an involution $\tau$ of degree four that commutes with both operators. Suppose further that the geometric quotient group is actually identified with $H^+=\ker(\tau-1)$, with its insertion operators identified as above. Define $D|_{H_j}=e^{\pi i j/4}$. Then $D\tau=-\tau D$, so $D:H^+\to H^-$ is an isomorphism. Since $D\mu(\Sigma)=-i\mu(\Sigma)D$ and $D\mu(\mathrm{pt})=-\mu(\mathrm{pt})D$, an eigenvector in $H^+$ with values $(\lambda,\nu)$ is carried by $D$ to one in $H^-$ with values $(i\lambda,-\nu)$, and by $D^{-1}$ to one with values $(-i\lambda,-\nu)$. Therefore the odd-genus quotient pair $(i(2g-2),-2)$ is carried by $D^{-1}$ to $(2g-2,+2)$. In even genus the target is already in $H^+$. The polynomial exclusions just proved eliminate extra vectors from the other sector. Genus one follows by rotating $(0,-2)$ to $(0,+2)$. This proves precisely the requested full-group multiplicity, once the geometric quotient and grading hypotheses are established.

The characteristic-zero transfer itself has a direct proof at chain level, when its geometric hypotheses hold. If a free orientation-compatible deck involution acts on the lifted critical points and trajectory counts, the invariant subcomplex is generated by orbit sums $a+\tau a$. Sending a quotient generator $[a]$ to this orbit sum identifies its differential with the invariant differential: each quotient trajectory has its two lifts, and the assumed determinant-orientation compatibility gives their same lifted signs. The projector $(1+\tau)/2$ splits the chain complex, so taking homology of invariants equals invariants in homology. This is why division by two is legitimate over $\mathbb Q$. Establishing a free geometric deck transformation, its action on determinant lines and its degree four is still a gauge/Fredholm problem; writing down this projector proves none of those hypotheses. In particular the earring orientation theorem at its frozen scope supplies no automatic orientation statement for this different closed quotient.

Finally let the actual finite-dimensional determinant-one group and both operators be defined over $\mathbb Q$. Its target space is the kernel of the single rational linear map

$$H_{\mathbb Q}\longrightarrow H_{\mathbb Q}\oplus H_{\mathbb Q},\qquad v\longmapsto((\mu(\Sigma)-(2g-2))v,(\mu(\mathrm{pt})-2)v).$$

Row reduction of a rational matrix has the same pivot rank over $\mathbb Q$ and $\mathbb C$. Thus complexifying preserves its kernel dimension. Complex dimension one yields rational dimension one. A rational grading-phase operator is unnecessary; only the group, the two operators and the target eigenvalues must descend.

## Exact boundary against frozen suppliers

The accepted ordinary end/Donaldson bundle, recorded in `root-original-end-donaldson-full-review.json`, concerns a charge-one cut bordism and definite lattice diagonalization. It does not construct K3/elliptic-surface Donaldson invariants, calculate point insertions, or establish a genus-two fiber-sum formula. The accepted singular bundle constructs the based-earring trajectory complex; its continuation and orientation scope is not the closed determinant-one quotient with insertion cobordisms. The general closed index formula is an index theorem, not a nonzero enumerative invariant. Reusing any of these at a larger extent would silently assume the central missing theorem.

The smallest remaining geometric operations on this source route are therefore: (1) actual closed determinant-one Floer and relative cobordism/insertion construction with pairing, product and orientation-compatible degree-four quotient deck transformation; (2) the product insertion-basis/primitive presentation and its undeformed cohomology comparison, from which the deformed recurrence may be derived; (3) the actual K3 and elliptic/fiber-sum Donaldson evaluations selecting its constants, including the genus-two gluing count used by `dg-ga/9702002` Proposition 27. This donor supplies all the finite operations after those inputs and the explicit nonzero witness test, but it supplies no substitute for those geometric counts. The actual paper imports substantial results in each of these three classes, so reading it in full does not discharge their local authoring.

Even a completed product eigenspace calculation would leave the original KHI theorem's excision/decomposition, taut hierarchy and singular-to-closure bridge outstanding. Property P and the SU2-averse varying-meridian path remain held for their precise additional operations recorded in `actual-operations-and-original-obstruction.md`. The full original Statements are preserved. No final consolidated review should be spent on this still-incomplete candidate.
