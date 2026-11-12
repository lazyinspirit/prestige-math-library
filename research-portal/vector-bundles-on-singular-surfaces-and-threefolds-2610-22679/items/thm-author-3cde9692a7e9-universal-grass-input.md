---
id: thm-author-3cde9692a7e9-universal-grass-input
kind: theorem
title: External actual universal-class detection on Vect and Grass
status: published
domain: mathematics
deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - math:def-axiom-of-choice
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - thm-repair-72891dd58cd0-universal-chern-derived-limit-input
  - def-stable-spectra-interface
  - lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness
  - thm-author-32887006bdff-p1-spectrum-input
dependency_roles:
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  lem-adjudicate-a8be8a17c858-negative-model-coefficients: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
  thm-repair-72891dd58cd0-universal-chern-derived-limit-input: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness: mathematical-premise
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author
        PDF14April2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Conventions 2.1–2.2 (pp. 14–15), Remark 2.4.6 and Corollary 2.4.8 (p.
        20), §§3.1.3–3.1.7 (pp. 21–22), Lemma 3.2.3 (p. 23), §4.3.1 (p. 29),
        Definition 4.4.1 through Corollary 4.4.7 (pp. 30–32)
      hypotheses: A qcqs derived base in the source convention and compatible
        universes. A multiplicative coefficient category V defined over S,
        compactly generated and with projective-line cotensor preserving
        filtered colimits. E is a homotopy-commutative linearly oriented motivic
        E1-ring in V satisfying PBF, and R is a homotopy-cocommutative motivic
        coring in Sp_P1(V). The EM application uses V=St_S; the new local
        compactness lemma discharges its ambient conditions. The completed
        model, orientation, PBF and negative coefficients have their separately
        declared suppliers and inherited Choice and size assumptions. No
        A1-invariance or transfers are assumed.
      statement: The actual Grass/Vect map induces the Chern-coordinate isomorphism of
        Corollary 4.4.7, also with coring coefficients. Lemma 4.4.4 supplies the
        finite class-power equivalence, with sum(alpha_j)<=N-n and Chern weight
        sum(j alpha_j). Corollary 4.4.5 computes infinite Grassmannian
        cohomology. Higher classes are defined by the projective-bundle
        relation; smooth-scheme Whitney and the pointed trivial-line
        normalization give rank stabilization after finite Grassmannian
        detection. Theorem 4.4.6 is an equivalence after elementary-excision
        localization.
      reading_limits: "Historical reading record retained from the incoming generated
        item: In this assignment opened the live primary author PDF dated April
        14, 2025 and inspected the extracted statements in §§2.1.1–2.2.5,
        §2.4.6–2.4.8, Lemma 3.1.7, §4.3.1, Definition 4.4.1, Lemmas 4.4.3–4.4.4,
        Corollary 4.4.5, and Theorem 4.4.6 with its displayed proof and
        Corollary 4.4.7. This checks the actual map, coefficient and coring
        types, compactness assumptions, finite exponent bound and Chern weights.
        The current framework, model, orientation, spectrum,
        negative-coefficient and derived-limit supplier bodies were read for
        this application. The source AI22 finite-formula proof, lifting
        machinery, Brown representability, SAG and categorical foundations
        remain imported; no reconstruction or new acceptance is claimed. Earlier
        reading records are historical. Current consumer maintenance read the
        generated bodies and supplier interfaces; no fresh primary-source or
        page-image reading, or independent acceptance, is claimed."
dependency_level: 20
local_argument_provenance: ai-altered
formulation_deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - math:def-axiom-of-choice
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - thm-repair-72891dd58cd0-universal-chern-derived-limit-input
  - def-stable-spectra-interface
  - lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness
  - thm-author-32887006bdff-p1-spectrum-input
argument_deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - math:def-axiom-of-choice
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - thm-repair-72891dd58cd0-universal-chern-derived-limit-input
  - def-stable-spectra-interface
  - lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness
  - thm-author-32887006bdff-p1-spectrum-input
---

## Statement
Use the source-native non-$\mathbb A^1$ framework over a qcqs derived base $S$, in compatible universes. Let $\mathcal V$ be a multiplicative presentable coefficient category defined over $S$: it has a compatible symmetric monoidal left adjoint from $\mathrm{St}_S$, the category of space-valued Zariski sheaves on the smooth qcqs site. Assume $\mathcal V$ is compactly generated and its $\mathbb P^1$ cotensor preserves filtered colimits. Let $E$ be a homotopy-commutative linearly oriented motivic $E_1$-ring in $\mathrm{Sp}_{\mathbb P^1}(\mathcal V)$ satisfying PBF. A homotopy-cocommutative motivic coring $R$ is a counital coassociative coalgebra object in its homotopy category whose comultiplication is cocommutative. For integers $n\geq1$ and $N\geq n$, write $\mathrm{Vect}_{n,S}$ for the stack of rank-$n$ bundles, $G(n,N)$ for the smooth qcqs scheme of rank-$n$ quotients of $\mathcal O_S^N$, and $\mathrm{Gr}_n=\operatorname*{colim}_{N\geq n}G(n,N)$ in stacks. The map $\mathrm{Gr}_n\to\mathrm{Vect}_{n,S}$ classifies the universal quotients. Cohomology is $E^{p,q}(R)=\pi_{2q-p}\operatorname{Map}(R,\Sigma_{\mathbb P^1}^q E)$, interpreted by spectrum-valued coefficients for oriented spectra. Under these hypotheses the actual map $\mathrm{Gr}_n\to\mathrm{Vect}_n$ induces the universal Chern-coordinate isomorphism
$$E^{*,*}(\mathrm{Vect}_{n,+}\otimes R)\cong E^{*,*}(R)\lbrack\!\lbrack c_1,\ldots,c_n\rbrack\!\rbrack$$
for every such coring $R$ in $\mathrm{Sp}_{\mathbb P^1}(\mathcal V)$. The right side consists of formal series in the actual universal Chern classes, completed in their ideal and interpreted in each bidegree. This is the map-induced identification of Theorem4.4.6/Corollary4.4.7, with finite Grassmannian formula Lemma4.4.4 and Corollary4.4.5. Taking products of two classifying stacks is allowed by applying the coring version successively; restriction to their finite Grassmannian approximations jointly detects the universal coefficients.
Here $U_n$ is the universal rank-$n$ bundle: its pullback along the map classifying a bundle $V$ is $V$. Its actual classes $c_j=c_j(U_n)$ are defined by the unique projective-bundle relation of source Definition 4.4.1, as supplied in [F4]. The variables have bidegrees $(2j,j)$ and stabilize under adding a trivial line. For the completed EM model let $S$ be a qcqs scheme over a field and take $\mathcal V=\mathrm{St}_S$; the local compactness lemma discharges the two ambient coefficient hypotheses for this category. Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied model and negative-coefficient constructions. Under these premises negative coefficient weights are zero in every cohomological degree. Hence for any fixed target Chern weight $i$, only monomials of total weight at most $i$ can occur; the relevant mapping-space $\pi_0$ and $\pi_1$ systems stabilize as both ranks exceed $i$. This last finiteness consequence is used explicitly in the local Cartan proof to rule out a phantom term.

## External input
Import the actual Vect/Grass cohomology comparison and finite Grassmannian formula from source record 0 under all the ambient hypotheses stated above. The source-native framework is supplied by [[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]]. The general coring formula is retained in its multiplicative coefficient category; the local EM application uses the unit coring and products of suspension stacks in $\mathrm{St}_S$. The homotopy-limit and finite-detection inputs are supplied by [[thm-repair-72891dd58cd0-universal-chern-derived-limit-input]], including its coherent spectrum application in Proof 1.1 and mapping-colimit application in Proof 2.1. This item locally composes these premises with EM negative-weight vanishing; it does not claim to reconstruct the imported comparisons. Theorem 4.4.6 is formulated after the source's elementary-excision localization; Corollary 4.4.7 is the stated cohomological consequence under PBF. The EM-specific negative coefficients and bounded-weight consequence are supplied and checked separately below. No bundle-group presentation or affine Picard-group detection substitutes for the map-induced comparison.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed size bounds discharge the actual model and negative-coefficient premises in [F2]–[F3], first used in step 1.1. The general external coring comparison retains its stated hypotheses; these added premises concern its specified EM application.

[F1] The external Annala–Iwasa input above gives the actual universal-coordinate comparison, including the coring version. In Lemma 4.4.4 the monomial index is $\alpha=(\alpha_1,\ldots,\alpha_n)$ with $|\alpha|=\sum_j\alpha_j\leq N-n$ and Chern weight $w(\alpha)=\sum_jj\alpha_j$, for the universal rank-$n$ quotient on $G(n,N)=\operatorname{Gr}_n(\mathcal O_S^N)$.

[F2] [[lem-author-32887006bdff-em-p1-model]] and [[lem-author-32887006bdff-actual-orientation]] supply the actual model $\mathcal E_S$, products, orientation and PBF over every qcqs field-scheme $S$.

[F3] [[lem-adjudicate-a8be8a17c858-negative-model-coefficients]] supplies $\mathcal E_S^{a,b}(Y)=0$ for all $a$ and $b<0$, on every smooth qcqs $S$-scheme $Y$, with the actual spectrum-valued coefficient convention. Its Choice and universe assumptions are inherited here. It computes the reduced projective-line loop of $A_0$, rather than identifying formal zero complexes with negative twists without an argument.


[F4] [[thm-repair-72891dd58cd0-universal-chern-derived-limit-input]] supplies universal rank stabilization by finite Grassmannian detection, and in Proof 1.1 supplies the coherent mapping-spectrum tower's product-difference fiber and its Milnor exact sequence. In particular the kernel of $\pi_0\operatorname{holim}T_k\to\lim\pi_0T_k$ is $\operatorname{coker}(1-s:\prod\pi_1T_k\to\prod\pi_1T_k)$, where the $k$th component of $s$ is transition after projection to index $k+1$. This is a spectrum-level application, not an identification of a bare triangulated diagram with a coherent limit. [[def-stable-spectra-interface]] fixes coherent spectra, products and homotopy groups.

[F5] [[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]] supplies the site, coefficient action, colimit-preserving motivic suspension, orientation/PBF meanings, cohomology grading and classifying stacks. [[lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness]] proves compact generation and projective-line cotensor compactness for $\mathrm{St}_S$, discharging the source's ambient hypotheses for [F2]. Stacks $X$ give homotopy-cocommutative corings by their diagonal $X\to X\times X$ and terminal map, followed by the symmetric monoidal suspension functor. Thus the coring formula can be applied successively to two classifying stacks. For a filtered diagram $X_k$, colimit-preserving suspension and the defining mapping universal property give $\operatorname{Map}(\Sigma^\infty_{\mathbb P^1}(\operatorname*{colim}_kX_k)_+,T)\simeq\operatorname*{lim}_k\operatorname{Map}(\Sigma^\infty_{\mathbb P^1}X_{k,+},T)$; the same holds as mapping spectra, by applying this identity after every circle shift. Cartesian product of stacks preserves colimits separately, so the analogous identity applies to two factors.


[F6] [[thm-author-32887006bdff-p1-spectrum-input]] supplies the coefficient stabilization adjunction and its equivalence on fundamental spectra under the ambient compactness conditions. Oriented spectra are fundamental. Thus mapping into the actual oriented model can be computed with its specified spectrum-valued lift; in homotopy degrees zero and one this agrees with the space-valued convention. This is the stable coefficient setting used for the coherent mapping spectra in [F4]–[F5].

**Given:** The external input and its hypotheses; for the local consequence, a qcqs field-scheme $S$, its actual EM model, inherited Choice and universe bounds, and an integer $i\geq0$.

**Goal:** Verify the bounded-weight consequence and finite transition ranges for the universal one-factor and two-factor mapping spaces used by the consumers.

## Proof
1.1 In the coefficient convention of [F3], mapping homotopy degree $u$ into the weight-$i$ target is cohomological bidegree $(2i-u,i)$. A Chern monomial of weight $w$ therefore has coefficient $\mathcal E_S^{2(i-w)-u,i-w}(S)$. This group is zero whenever $w>i$, for every $u$, in particular $u=0,1$. The vanishing is about the actual represented model by [F3], with the mapping-spectrum interpretation justified by [F6]. The general coring formula in [F1] remains valid, but negative-weight vanishing for an arbitrary coring is not being inferred from vanishing over $S$. [A1, F1, F2, F3, F6]

2.1 Apply the finite basis formula in [F1] to $G(n,N)$, and successively to $G(n,N)\times_S G(m,M)$ using the same actual class maps. The latter mapping groups in homotopy degree $u$ have a finite additive basis $c^\alpha d^\beta$ with $|\alpha|\leq N-n$ and $|\beta|\leq M-m$; their coefficients are $\mathcal E_S^{2(i-w)-u,i-w}(S)$ for $w=w(\alpha)+w(\beta)$. For any surviving monomial, step 1.1 gives $w\leq i$, hence $|\alpha|\leq i$, $|\beta|\leq i$, and every variable index occurring is at most $i$. Consequently $N-n\geq i$ and $M-m\geq i$ include every potentially nonzero monomial. The one-factor assertion follows by omitting $\beta$. For the second application, base change the supplied oriented PBF model to the smooth qcqs first Grassmannian and expand its coefficients using the first application. These are additive basis statements; no quotient-ring presentation of the finite Grassmannian is presumed. [F1, F2, step 1.1]

3.1 Increasing $N$ or $M$ restricts each universal quotient bundle to the previous one, so the pullback preserves all these basis monomials. In the ambient ranges of step 2.1 it is an isomorphism in mapping homotopy degrees zero and one. Under rank stabilization $V\mapsto V\oplus\mathcal O$, the old Chern classes are preserved and the new top class pulls back to zero: this follows from the universal rank-stabilization identities in [F4], derived there from smooth-scheme Whitney, the pointed trivial-line normalization and finite Grassmannian detection. Once $n,m\geq\max\{1,i\}$, every newly introduced variable has weight greater than $i$ and has zero coefficient by step 1.1. Thus the rank restriction maps are also isomorphisms in both homotopy degrees. Applying the actual comparison in [F1] gives the same stabilization on the classifying stacks and their product. [F1, F2, F4, step 1.1, step 2.1]

4.1 First keep $n,m$ fixed and let $N,M$ tend to infinity. By [F5] the mapping spectrum out of the product of the colimit Grassmannians is the coherent limit of the finite-stage mapping spectra. The diagonal $N=n+k$, $M=m+k$ is cofinal: the indices above any pair of widths have a least common lower bound on $k$, hence a contractible tail. For the stable-rank approximation use coordinates $(n,N-n,m,M-m)$; all four grow along $(k,k,k,k)$, so the analogous diagonal is cofinal by the same argument. Label the ambient bundle by two ordered blocks of sizes $n$ and $N-n$. The transition increasing $n$ at fixed width adds a trivial quotient line in the first block, and increasing the width adds an unused coordinate in the second block; the maps commute under these block identifications. Equivalently one can first form each fixed-rank limit, apply the actual Grass/Vect comparison, and then form the rank limit of $\mathrm{Vect}_n\times_S\mathrm{Vect}_m$. Both mapping towers have eventually isomorphic $\pi_0$ and $\pi_1$ by step 3.1. For either coherent tower $T_k$, [F4] gives the fiber sequence $\operatorname{holim}_kT_k\to\prod_kT_k\xrightarrow{1-s}\prod_kT_k$. Its homotopy exact sequence identifies the possible kernel of $\pi_0\operatorname{holim}\to\lim\pi_0$ with the indicated product-difference cokernel. On a constant tail of the $\pi_1$ system identify all transitions with identity. Given $(a_k)$, set $b_{k_0}=0$ and $b_{k+1}=b_k-a_k$; then $(1-s)b=a$ on the tail. For any omitted finite initial segment, define $b_k=a_k+f_{k+1}(b_{k+1})$ backwards, proving surjectivity on the entire tower. The cokernel, or $\lim^1\pi_1$, is zero. The Milnor map is therefore an isomorphism, so bounded-weight universal classes are detected by the finite approximations without a phantom term. Mapping out of the colimit rank stack $BGL=\operatorname*{colim}_n\mathrm{Vect}_n$, and its product, uses precisely [F5]; it does not presume coherent nullhomotopies from equality at individual stages. Nothing requires a Noetherian or dimension bound on $S$. [A1, F4, F5, F6, step 2.1, step 3.1, algebra] ∎
