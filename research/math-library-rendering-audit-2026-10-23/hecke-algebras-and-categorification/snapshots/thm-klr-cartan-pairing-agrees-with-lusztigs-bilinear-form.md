---
id: thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form
kind: theorem
title: "The KLR Cartan pairing is the Lusztig-normalized half form"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-klr-cartan-pairing, thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations, def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-lusztig-divided-power-integral-form, lem-lusztig-and-kashiwara-normalizations-match-by-root-color, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality, def-quantum-integers-factorials-and-divided-powers-at-q-i, def-axiom-of-choice, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: 'Proposition 3.3 and its proof, printed pp. 36-37: the three defining properties of the pairing; §3.1, Proposition 3.4 and its proof, printed pp. 37-38: the form compatibility of $\gamma$.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: 'Proposition 1 and Proposition 2, printed pp. 1-3: the normalized form with $(\theta_i,\theta_j)=\delta_{ij}(1-q_i^2)^{-1}$ defined by the same conditions, its uniqueness and symmetry, and the Serre ideal.'
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§4.1.2 and §4.2, printed pp. 30-33: the comparison of the categorical and quantum group forms used to fix the normalization.'
---

## Statement

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], let $B_K$ be the normalized Lusztig-Kashiwara form on the negative half of [[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]] and put $B_L:=C_\nu B_K$ on the weight component $\nu$, $C_\nu=\prod_i(1-q_i^2)^{-\nu_i}$, the Lusztig-normalized form of [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]. Then for homogeneous $x,y\in Af_\nu$ the Cartan pairing of [[def-the-klr-cartan-pairing]] satisfies
$$(\gamma(x),\gamma(y))_{KLR}=B_L(x,y)=C_\nu\,B_K(x,y),$$
where $\gamma:Af\to K_0(R)$ is the algebra homomorphism of [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]]. Equivalently, the two bilinear forms are equal under the identification of divided-power classes; in particular the KLR pairing is $\mathbb Q(q)$-nondegenerate on each finite weight component $Af_\nu\otimes_A\mathbb Q(q)$ after extending scalars, and $(\gamma(x),\gamma(y))'_{KLR}=B_L(\overline{x},y)$, where bar acts on the first input. On generators: $([P_i],[P_j])=\delta_{ij}(1-q_i^2)^{-1}=B_L(\theta_i,\theta_j)$ and $([P_{i,n}],[P_{i,n}])=B_L(\theta_i^{(n)},\theta_i^{(n)})=\prod_{a=1}^n(1-q_i^{2a})^{-1}$.

## Facts & Assumptions

**Given:** A KLR datum $Q$, the Cartan pairing of [[def-the-klr-cartan-pairing]] on $K_0(R)$, the homomorphism $\gamma$ of [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]], the normalized half form $B_K$ of [[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]] with skew derivations $e_i'$ of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]], and the normalization factor $C_\nu=\prod_i(1-q_i^2)^{-\nu_i}$ of [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]].

[F1] Normalization and adjunction ([[def-the-klr-cartan-pairing]]): the tensor form is symmetric and bilinear with $([P_i],[P_i])=(1-q_i^2)^{-1}$ and $([P_i],[P_j])=0$ for $i\ne j$, and $\mathrm{Ind}$ is left adjoint to $\mathrm{Res}$.

[F2] Mackey and the coproduct comparison ([[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]]): $[\mathrm{Res}]$ is an algebra homomorphism for the twisted product, so the pairing satisfies the adjunction identities $(x,yy')=(r(x),y\otimes y')$ and $(xx',y)=(x\otimes x',r(y))$ with $r=[\mathrm{Res}]$.

[F3] Determination of $B_K$ ([[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]]): axioms (H), (N), (R): homogeneity, $B(1,1)=1$ and $B(F_iP,Q)=B(P,e_i'Q)$ determine $B$ uniquely, and peeling first letters reduces every evaluation to the base case.

[F4] Normalization dictionary ([[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]]): with the source-to-library parameter transport $\varphi:\mathbb Q(v)\to\mathbb Q(q)$, $\varphi(v)=q^{-1}$ the root-colour factor $C_\nu$ converts the Kashiwara recursion into $B_L(F_iP,Q)=(1-q_i^2)^{-1}B_L(P,e_i'Q)$ and $B_L$ has the generator value $(1-q_i^2)^{-1}$.

[F5] Nondegeneracy ([[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]], clause (iii)): for every $0\ne x\in U_q^-$ there is $y$ with $(x,y)\ne0$; equivalently the form restricted to each finite-dimensional graded piece is nondegenerate. Its construction uses the Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; compare the two forms on a spanning set by the same recursive characterization, then upgrade with the supplier's nondegeneracy.

1.1 (Tensor adjunction.) Write $A=R(\beta+\gamma)$, $B=R(\beta)\otimes R(\gamma)$ and $e=e(\beta,\gamma)$. Reflection fixes each block and gives $(Ae\otimes_BX)^\psi=X^\psi\otimes_BeA$, with the same total grading. Thus $T(\operatorname{Ind}X,Y)=\mathrm{gdim}(X^\psi\otimes_BeY)=T_B(X,\operatorname{Res}Y)$. For $X=P\boxtimes Q$, the last tensor factorizes, giving the tensor-product form. Symmetry supplies the adjunction in the other variable. Pull this identity back through $\gamma$, using its coproduct compatibility from [F2]. The coefficient of $F_i\otimes z$ in $r(y)$ is $e_i'y$: on words this follows by deleting an $i$ and accumulating $q_i^{-a_{ij}}$ for each preceding letter in the twisted product, exactly the recursion of [F4]. Weight orthogonality therefore gives $T(\gamma(F_ix),\gamma(y))=(1-q_i^2)^{-1}T(\gamma(x),\gamma(e_i'y))$, with vacuum value $1$. [given, F1, F2, F4, algebra]

1.2 (Abstract side.) $B_K$ is characterized by (H), (N), (R) of [F3], and its normalized multiple $B_L=C_\nu B_K$ satisfies the generator value $B_L(\theta_i,\theta_j)=\delta_{ij}(1-q_i^2)^{-1}$ and the recursion $B_L(F_iP,Q)=(1-q_i^2)^{-1}B_L(P,e_i'Q)$ by [F4]; the same recursion with the same base value determines every value on word monomials inductively, since peeling the first letter of the first argument and applying the recursion reduces the positive height by one. [given, F3, F4, algebra]

2.1 (Comparison on monomials.) The KLR pairing and $B_L$ satisfy the same recursion and the same value at $1$: on the KLR side this is step 1.1 with $\gamma(F_i)=\gamma(\theta_i)=[P_{i,1}]=[P_i]$ and the identification of the restriction class with the coproduct; on the abstract side it is step 1.2. Induction on the height of the weight components therefore gives $(\gamma(x),\gamma(y))_{KLR}=B_L(x,y)$ on all divided-power monomials and hence on all of $Af$ by bilinearity, using that $\gamma$ is onto the classes of the divided words by [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]]. Injectivity of $\gamma$ is not used: the equality is checked on the spanning monomials. [step 1.1, step 1.2, algebra]

3.1 (Nondegeneracy and generator values.) By [F5] the form $B_K$, hence the unit multiple $B_L$, is nondegenerate on each finite weight component, so the KLR tensor pairing is nondegenerate there as well; the Axiom of Choice enters only through this supplier, and the categorical comparison of steps 1.1, 1.2 and 2.1 is choice-free. The Hom-form identity $(\gamma(x),\gamma(y))'=B_L(\overline{x},y)$ follows from $h(P,Q)=T(P^\#,Q)$ of [[def-the-klr-cartan-pairing]] and $\gamma(\overline{x})=\gamma(x)^\#$ from [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]], clause (iii). For the rank-one divided power, $\gamma(\theta_i^{(n)})=[P_{i,n}]$ gives $([P_{i,n}],[P_{i,n}])=\prod_{a=1}^n(1-q_i^{2a})^{-1}$, matching $B_L(\theta_i^{(n)},\theta_i^{(n)})$ by the recursion of step 1.2; for $n=1$ this is the generator value already recorded. [step 2.1, F4, F5, algebra] ∎
