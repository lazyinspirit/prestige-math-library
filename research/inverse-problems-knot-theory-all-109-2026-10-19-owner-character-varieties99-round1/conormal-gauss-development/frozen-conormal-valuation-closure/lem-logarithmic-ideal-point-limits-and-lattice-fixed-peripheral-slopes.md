---
id: lem-logarithmic-ideal-point-limits-and-lattice-fixed-peripheral-slopes
kind: lemma
title: "Logarithmic ideal-point limits and lattice-fixed peripheral slopes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-separated-morphism-schemes
  - def-discrete-valuation-ring
  - def-normalization-affine-variety
  - thm-normalization-reduced-curve-exists-finite
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - def-kahler-differentials-algebra
  - thm-kahler-differentials-existence-presentation
  - cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - thm-lying-over
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the curve normalization and ideal-point data. The derivation bound, finite local expansions and rank-two lattice calculation add only finite operations."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bénard, Florens and Rodau, A slope invariant and the A-polynomial of knots"
      url: "https://arxiv.org/pdf/2103.14151"
      locator: "Section5, Theorem5.2 and its valuation claim, PDF16–17. The proof below retains the unit-derivative terms and supplies the actual local regularity argument."
    - title: "Cooper, Culler, Gillet, Long and Shalen, Plane curves associated to character varieties of 3-manifolds"
      url: "https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf"
      locator: "Proposition3.1, PDF9. Surface existence is not imported; the lattice-fixed boundary calculation is proved below for a supplied actual dual map."
---

## Statement

Assume full AC. Let $F/\mathbb C$ be a finitely generated field of transcendence degree one, and let $R=A_{\mathfrak m}\subset F$ be the local ring at a complex point of a curve, where $A$ is a finitely generated complex domain with fraction field $F$. Suppose $R$ is the actual DVR local ring of the given smooth point, with residue field $\mathbb C$, valuation $v$ and uniformizer $t$.

The derivation $D$ with $Dt=1$ extends uniquely from $\mathbb C(t)$ to $F$, satisfies $D(R)\subseteq R$, and for every $f\in F^*$ has
$$t\,\frac{Df}{f}\in R,\qquad \overline{t\,Df/f}=v(f)\in\mathbb C.$$
For $L,M\in F^*$ with $(v(L),v(M))\ne(0,0)$, the rational projective logarithmic ratio extends at the point with value
$$\left[\frac{\mathrm dL}{L}:\frac{\mathrm dM}{M}\right]_{x}=[v(L):v(M)].$$
The ratio of one-forms means their two coefficients in any common nonzero basis of $\Omega^1_{F/\mathbb C}$.

In particular the nonzero-valuation condition always holds when $F=\mathbb C(Y)$ for an irreducible affine curve $Y\subset(\mathbb C^*)^2$ with coordinate functions $M,L$, its normalization $U$ is the given dense affine open of a separated smooth completion $C$, and $x\in C\setminus U$ is an ideal point with the above local data. Singular affine branches retained in $U$ are not mistaken for ideal points.

For every finite field extension $F'/F$, an extending discrete valuation $w$ exists with residue field $\mathbb C$ and restriction $w|_{F^*}=e v$ for an integer $e>0$. More generally, suppose any field extension $F'/F$ is supplied with a discrete valuation $w$ restricting to $e v$ on $F^*$ for a positive integer $e$. Let a representation into $SL_2(F')$ have commuting peripheral matrices $\rho(\lambda),\rho(\mu)$ with a common eigenline of eigenvalues $L,M$. Use the valuation-ring lattice graph of [[def-adjoint-twisted-homology-and-culler-shalen-data]]. If the element $\rho(\lambda^a\mu^b)$ fixes a vertex or the midpoint of an edge, then
$$a\,v(L)+b\,v(M)=0.$$
For a primitive nonzero pair $(a,b)$ and a nonzero valuation pair it follows that the logarithmic projective limit is $[-b:a]$, the negative of the boundary slope $r=b/a$, including zero and infinity.

This applies in particular to a supplied equivariant map from the universal cover of a knot exterior to that lattice graph whenever a component of a transverse inverse image of the edge midpoints has a boundary circle representing $a[\lambda]+b[\mu]$. It does not assert that the graph is a tree, that such a map or an essential surface exists, that a character ideal point must be a peripheral ideal point, or that every possible boundary-elliptic surface choice has a prescribed slope. Those are separate geometric obligations.

## Statement references

[[def-adjoint-twisted-homology-and-culler-shalen-data|Actual ideal-point valuations, lattices and group action]]

[[thm-normalization-reduced-curve-exists-finite|Affine integral-closure normalization]]

## Facts & Assumptions

**Given:** The fields, actual DVR local ring, uniformizer, finite-type coordinate algebra and, for the final assertions, the specified peripheral representation, extending valuation and equivariant inverse-image data.

[A1] Full AC is retained. [[def-axiom-of-choice]]

[F1] A DVR consists of elements with nonnegative discrete valuation; every nonzero field element is a power of a uniformizer times a unit. The latter follows directly by dividing out its valuation. [[def-discrete-valuation-ring]]

[F2] The affine normalization is the integral closure in the function field. It is affine and finite, and a normalized curve has DVR local rings at its closed points. [[def-normalization-affine-variety]] [[thm-normalization-reduced-curve-exists-finite]]

[F3] A curve is separated; its diagonal is a closed immersion. [[def-algebraic-curve-over-field]] [[def-separated-morphism-schemes]]

[F4] Lattice vertices are homothety classes of free rank-two valuation-ring lattices. Matrix multiplication acts on vertices and edges. [[def-adjoint-twisted-homology-and-culler-shalen-data]]

[F5] The universal differential module represents derivations and is generated by differentials of field elements. [[def-kahler-differentials-algebra]] [[thm-kahler-differentials-existence-presentation]]

[F6] Finite separable integral closures of normal Noetherian domains are module-finite. Under AC a Dedekind domain remains Dedekind in such an extension; lying over supplies a prime above the maximal ideal, and localization at a nonzero Dedekind prime is a DVR. [[thm-finite-integral-closure-in-a-finite-separable-extension]] [[cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension]] [[thm-lying-over]] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]

## Proof

1.1 **The actual field derivation.** The uniformizer is not constant: nonzero complex constants have valuation zero, whereas $v(t)=1$. It is transcendental over the algebraically closed field $\mathbb C$. Transcendence degree one and finite generation imply that $F/\mathbb C(t)$ is finite: finitely many field generators are algebraic, hence give a finite algebraic tower. In characteristic zero each tower minimal polynomial $p(T)=\sum_jc_jT^j$ is separable. If its root is $\alpha$, the preceding derivation extends uniquely by $$D\alpha=-\frac{\sum_j(Dc_j)\alpha^j}{p'(\alpha)}.$$ Here $p'(\alpha)\ne0$ since a nonzero derivative of smaller degree cannot share a root with the irreducible $p$. The product rule with this value preserves the relation $p(\alpha)=0$, so it defines a derivation on the quotient field, and uniqueness follows by differentiating that same relation. Induction gives $D$ on $F$. Differentiating these finite equations in [F5] also expresses every differential as a multiple of $\mathrm dt$. The derivation takes $\mathrm dt$ to $1$, so $\Omega^1_{F/\mathbb C}=F\,\mathrm dt$ and $\mathrm df=(Df)\mathrm dt$. [F1, F5, given, construct, algebra]

1.2 **A peripheral ideal point cannot have two unit coordinates.** Let $A_0=\mathbb C[Y]$, generated by $M,M^{-1},L,L^{-1}$, and let $B$ be its integral closure in $F$, so $U=\operatorname{Spec}B$ by [F2]. If $v(M)=v(L)=0$, then $A_0\subseteq R$. For $b\in B$, a monic integral equation over $A_0$ implies $v(b)\ge0$: if it were negative, its leading power would have strictly smaller valuation than every other term and could not cancel. Thus $B\subseteq R$. This gives a morphism $\operatorname{Spec}R\to U\hookrightarrow C$. It agrees at the generic point with the canonical local-ring morphism $\operatorname{Spec}R\to C$, since both induce the identity of $F$. By [F3], the inverse image of the closed diagonal under their pair is closed and contains the dense generic point of $\operatorname{Spec}R$, so it contains its closed point too. The two closed-point images are equal. The canonical one is $x$, while the other lies in $U$, contradicting $x\notin U$. Hence the valuation pair is nonzero. This argument uses normalization and separatedness, without assuming a singular affine curve itself is an open subset of a smooth completion. [F1, F2, F3, given, construct, algebra]

1.3 **The finite representation field admits an actual extending valuation.** Every nonzero ideal of $R$ is generated by an element of least nonnegative valuation: dividing any other element by that generator stays in $R$. Thus $R$ is Noetherian. A fraction integral over $R$ cannot have negative valuation, because its monic equation would have one uniquely least-valuation term. Hence $R$ is integrally closed. Its only nonzero prime is $(t)$, since a nonzero prime contains a power of $t$ and therefore $t$ itself; thus $R$ is Dedekind. For a finite $F'/F$, characteristic zero gives separability. Let $S_0$ be the integral closure of $R$ in $F'$. By [F6] it is finite and Dedekind, and some prime $\mathfrak q$ lies above $(t)$. It is nonzero because it contains $t$. The ring $S=(S_0)_{\mathfrak q}$ is a DVR. Its fraction field is $F'$: scaling each member of a finite $F$-basis of $F'$ by a common denominator in its monic equation makes it integral, as in the actual finite-closure proof. The residue field is a finite extension of $R/(t)=\mathbb C$, hence is $\mathbb C$. Write $w$ for the normalized valuation of $S$. Then $e=w(t)>0$, and every unit of $R$ stays a unit in $S$ since its inverse remains in $R$. Writing $f=t^n u$ proves $w(f)=en=e v(f)$ on $F^*$. This constructs the required extension rather than postulating a valuation on the model field. [F1, F6, given, construct, algebra]

2.1 **A finite bound proves local regularity.** Write $A=\mathbb C[z_1,\ldots,z_s]$ and take $$N=\max\bigl(\{0\}\cup\{-v(Dz_i):Dz_i\ne0\}\bigr).$$ All $z_i$ have nonnegative valuation. Differentiating any polynomial in them therefore gives valuation at least $-N$. Every element of $R=A_{\mathfrak m}$ is $p/q$ with $p,q\in A$ and $q\notin\mathfrak m$, so $v(q)=0$ and the quotient rule gives the uniform bound $v(Dh)\ge-N$ for every $h\in R$ with $Dh\ne0$. Repeatedly subtract the residue in $\mathbb C$ and divide by $t$ to obtain the finite exact expansion $$h=c_0+c_1t+\cdots+c_Nt^N+t^{N+1}h_{N+1},\qquad h_{N+1}\in R.$$ Its derivative is the polynomial derivative plus $(N+1)t^Nh_{N+1}+t^{N+1}Dh_{N+1}$. The first two terms are in $R$ and the last has valuation at least $1$. Thus $Dh\in R$ for every $h\in R$. This proves the needed regularity instead of presuming that a field derivation automatically preserves the local ring. The expansion uses only finitely many uniquely defined residues. [F1, step 1.1, construct, algebra]

3.1 **The logarithmic residue is the valuation.** For $f=t^nu$ with $u\in R^*$ and $n=v(f)\in\mathbb Z$, the product and inverse rules give $$t\,Df/f=n+t\,Du/u.$$ By step 2.1 the second term belongs to the maximal ideal $(t)$, giving the stated reduction. Apply this to $L,M$. Multiplication by $t$ gives a representative of their logarithmic ratio in $R^2$ whose reduction is $(v(L),v(M))$. When that pair is nonzero at least one coordinate is a unit, so the pair defines a regular projective map at the point and evaluates to $[v(L):v(M)]$. Changing the uniformizer or the basis of the one-dimensional differential space rescales the generic pair and leaves the projective value unchanged. On a complex algebraic curve this regular value is also the complex limit, since regular affine coordinate ratios with nonzero denominator are continuous. Cases with either one valuation zero are included and no division by that valuation has been made. [F1, F5, step 1.1, step 2.1, algebra]

4.1 **A fixed lattice forces zero eigenvalue valuation.** Put $A=\rho(\lambda^a\mu^b)$ and $\alpha=L^aM^b$. If $A$ fixes a lattice vertex, there is a lattice $\Lambda$ and $c\in(F')^*$ with $A\Lambda=c\Lambda$. Taking its top exterior lattice and using $\det A=1$ gives $2w(c)=0$. Thus $c$ is a valuation-ring unit and $A\Lambda=\Lambda$. In a lattice basis, $A$ has integral entries and its characteristic polynomial is $T^2-\operatorname{tr}(A)T+1$. An eigenvalue $\alpha$ of negative valuation is impossible: the squared term has strictly smaller valuation than the other two terms. Positive valuation is impossible as well, because $\alpha^{-1}$ is the other eigenvalue and has negative valuation. Hence $w(\alpha)=0$. If $A$ fixes an edge midpoint, it preserves that edge and possibly swaps its endpoints; $A^2$ fixes a vertex. Applying the same argument to $A^2$ gives $w(\alpha^2)=0$ and again $w(\alpha)=0$. Therefore $0=w(L^aM^b)=e(a v(L)+b v(M))$, proving the relation. For a primitive pair and a nonzero valuation pair its orthogonal line is exactly $\mathbb Q(-b,a)$, so step 3.1 gives $[v(L):v(M)]=[-b:a]$. This includes $a=0$ or $b=0$. [F1, F4, step 3.1, given, construct, algebra]

5.1 **The boundary loop of an actual inverse image fixes its midpoint.** Lift a boundary circle of the supplied surface to the universal cover. Its image under the supplied continuous equivariant map lies in the discrete set of edge midpoints, hence is one midpoint along this connected lifted curve. A deck transformation representing its loop therefore fixes that midpoint by equivariance. Moving the boundary basepoint to the marked peripheral basepoint conjugates the element and the fixed midpoint together, so $\rho(\lambda^a\mu^b)$ itself fixes an edge midpoint after that transport. Step 4.1 applies. No incompressibility, boundary incompressibility, transversality existence, or production of the surface has been deduced here; the result is the explicit boundary calculation for the supplied actual dual-map witness. [F4, given, step 4.1, construct, algebra] ∎
