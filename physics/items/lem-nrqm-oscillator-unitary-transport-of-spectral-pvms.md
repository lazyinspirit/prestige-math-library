---
id: lem-nrqm-oscillator-unitary-transport-of-spectral-pvms
aliases: [nrqm-oscillator-unitary-transport-of-spectral-pvms]
kind: lemma
domain: mathematics
title: "Transport of spectral projection-valued measures along isometric bijections"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-inner-product-space, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-projection-valued-measure, lem-scalar-and-complex-measures-from-a-pvm, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-unbounded-integral-against-a-pvm, lem-nrqm-observables-spectral-support-and-outcome-law, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-observables-spectral-support-and-outcome-law: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §3.1 printed pages 89-92 (PDF pages 101-104): integration against a projection-valued measure, the functional calculus and unitary equivalence (3.30) with equal spectra"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear algebra: vector spaces and operators', §7 'Hermitian and Unitary operators', printed pages 24-28: unitary operators preserve inner products and the adjoint/unitary calculus"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H,K$ be complex Hilbert spaces ([[def-hilbert-space]], [[def-inner-product-space]]) and let $U:H\to K$ be a bijective linear map with
$$\langle Ux,Uy\rangle_K=\langle x,y\rangle_H\qquad\text{for all }x,y\in H .$$
Let $T$ be a self-adjoint operator on $H$ with spectral projection-valued measure $E_T$ on the Borel $\sigma$-algebra of $\mathbb R$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), and define
$$D(T'):=U D(T),\qquad T'(Ux):=U(Tx)\quad(x\in D(T)).$$
Then:

(a) $T'$ is well defined, linear, densely defined and self-adjoint on $K$;

(b) the assignment $E(B):=U E_T(B) U^{-1}$ on Borel sets $B\subseteq\mathbb R$ is a regular projection-valued measure on the Borel $\sigma$-algebra of $\mathbb R$, and it is the spectral projection-valued measure of $T'$;

(c) for every unit vector $x\in H$ the scalar laws of the two operators agree,
$$\mu^{T'}_{Ux}(B):=\|E(B)Ux\|_K^2=\|E_T(B)x\|_H^2=:\mu^{T}_x(B)\qquad(B\subseteq\mathbb R\ \text{Borel});$$

(d) $\sigma(T')=\sigma(T)$.

## Facts & Assumptions

**Given:** complex Hilbert spaces $H,K$; a bijective linear isometry $U:H\to K$; a self-adjoint operator $T$ on $H$ with spectral projection-valued measure $E_T$; the operator $T'$ defined in the Statement; a real number $\lambda$ and Borel sets $B,B_n\subseteq\mathbb R$.

[F1] **Spectral theorem on a nonzero space.** When $H\ne\{0\}$, $E_T$ is the unique regular projection-valued measure on the Borel $\sigma$-algebra of $\mathbb R$ with
$$D(T)=\Bigl\{x\in H:\int_{\mathbb R}\lambda^2\,dE_{T,x}(\lambda)<\infty\Bigr\},\qquad Tx=\int_{\mathbb R}\lambda\,dE_T(\lambda)x\ \ (x\in D(T)),$$
where $E_{T,x}(B)=\langle E_T(B)x,x\rangle$; conversely, if a regular projection-valued measure $E$ on $\mathbb R$ satisfies the two displayed identities for an operator $S$ in place of $T$, then $E$ is the spectral projection-valued measure of the self-adjoint operator $S$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-unbounded-integral-against-a-pvm]]).

[F2] **Projection-valued measures and their scalar measures.** $E_T(B)$ is an orthogonal projection for every Borel $B$, $E_T(\varnothing)=0$, $E_T(\mathbb R)=I$, $E_T(B\cap C)=E_T(B)E_T(C)$, and for pairwise disjoint $B_n$ with union $B$ one has $E_T(B)x=\sum_nE_T(B_n)x$ in norm for every $x$; the scalar pairing $E_{T,x,y}(B):=\langle E_T(B)x,y\rangle$ is a finite complex measure and $E_{T,x}(B):=E_{T,x,x}(B)=\|E_T(B)x\|^2\ge0$; the regularity of $E_T$ means that every $E_{T,x}$ is a regular Borel measure ([[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[F3] **Spectrum as support.** On a nonzero complex Hilbert space, for the self-adjoint operator $T$ with spectral projection-valued measure $E_T$ one has $E_T(\mathbb R\setminus\sigma(T))=0$ and $E_T(V)\ne0$ for every nonempty relatively open $V\subseteq\sigma(T)$ ([[lem-nrqm-observables-spectral-support-and-outcome-law]] clause (a)).

[F4] **The adjoint.** For a densely defined operator $S$ on $H$, a vector $y\in H$ lies in $D(S^*)$ exactly when $x\mapsto\langle Sx,y\rangle$ is bounded on $(D(S),\|\cdot\|)$; then $S^*y$ is the unique $w\in H$ with $\langle Sx,y\rangle=\langle x,w\rangle$ for every $x\in D(S)$; and $S$ is self-adjoint exactly when $S=S^*$, that is $D(S)=D(S^*)$ and the two actions agree ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F5] **Inner-product calculus.** The pairing is linear in the first argument and conjugate-linear in the second, $\|u\|^2=\langle u,u\rangle$, and $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[def-inner-product-space]], [[def-hilbert-space]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F6] **Zero-space spectrum.** The resolvent set consists of those $z\in\mathbb C$ for which $zI-T:D(T)\to H$ is bijective with bounded inverse; its complement is $\sigma(T)$. On $H=\{0\}$ every shift is the unique bijection with bounded inverse, so $\sigma(T)=\varnothing$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

## Proof

**Given:** the data of the Statement and [F1]-[F6].

1.1 [The inverse is a linear isometry] Since $U$ is bijective, $U^{-1}$ exists; it is linear because $U$ is linear. For $a=Ux$ and $b=Uy$ in $K$, $\langle U^{-1}a,U^{-1}b\rangle_H=\langle x,y\rangle_H=\langle Ux,Uy\rangle_K=\langle a,b\rangle_K$; hence $U^{-1}$ is isometric, and so is $U$, so $\|Ux\|_K=\|x\|_H$ for every $x\in H$. [given, F5]

1.2 [Zero-space case] If $H=\{0\}$, bijectivity of $U$ gives $K=\{0\}$. The domains of $T$ and $T'$ are the zero space; their actions and adjoints are the unique zero operator by [F4], so clause (a) holds. Every $E_T(B)$ and $E(B)$ is that operator; the PVM identities and scalar regularity hold directly, and the integral of the coordinate function has domain $\{0\}$ and zero action by [[def-unbounded-integral-against-a-pvm]], so this unique PVM is the spectral PVM of $T'$, proving (b). There are no unit vectors, so (c) is vacuous; [F6] gives $\sigma(T')=\sigma(T)=\varnothing$, proving (d). For the remaining steps assume $H\ne\{0\}$, hence $K\ne\{0\}$, so [F1] and [F3] apply. [given, F2, F4, F6]

2.1 [$E$ is a projection-valued measure] For a Borel set $B$ define $E(B):=UE_T(B)U^{-1}\in\mathcal B(K)$. It is an orthogonal projection: $E(B)^2=UE_T(B)U^{-1}UE_T(B)U^{-1}=E(B)$ and $\langle E(B)a,b\rangle_K=\langle E_T(B)U^{-1}a,U^{-1}b\rangle_H=\langle U^{-1}a,E_T(B)U^{-1}b\rangle_H=\langle a,E(B)b\rangle_K$ for all $a,b\in K$, using the isometry of $U^{-1}$ and the self-adjointness of $E_T(B)$. Moreover $E(\varnothing)=0$, $E(\mathbb R)=I$, $E(B\cap C)=E(B)E(C)$, and for pairwise disjoint $B_n$ with union $B$, $\bigl\|E(B)a-\sum_{n\le N}E(B_n)a\bigr\|_K=\bigl\|E_T(B)U^{-1}a-\sum_{n\le N}E_T(B_n)U^{-1}a\bigr\|_H\to0$ by [F2]. Hence $E$ is a projection-valued measure on the Borel sets of $\mathbb R$. [given, step 1.1, F2]

2.2 [$T'$ is well defined, linear and symmetric] If $Ux=Ux'$ then $x=x'$ by injectivity, so $T'(Ux):=U(Tx)$ is well defined; $D(T')=U D(T)$ is a linear subspace, dense because $D(T)$ is dense and $U$ is bijective, and $T'$ is linear because $T$ and $U$ are. For $x,y\in D(T)$, using the isometry of $U$ in both directions and the self-adjointness of $T$, $\langle T'Ux,Uy\rangle_K=\langle UTx,Uy\rangle_K=\langle Tx,y\rangle_H=\langle x,Ty\rangle_H=\langle Ux,UTy\rangle_K=\langle Ux,T'Uy\rangle_K$. [given, step 1.1, F5]

3.1 [$E$ is regular with transported scalar measures] For $y,z\in K$ and Borel $B$, $E_{y,z}(B):=\langle E(B)y,z\rangle_K=\langle E_T(B)U^{-1}y,U^{-1}z\rangle_H=E_{T,U^{-1}y,U^{-1}z}(B)$ by the isometry of $U^{-1}$ and the definition of $E$; in particular $E_y(B)=E_{T,U^{-1}y}(B)$ with $U^{-1}y\in H$. Since $E_T$ is regular, each $E_{T,x}$ is a regular Borel measure [F2], so each scalar measure $E_y$ of $E$ is regular and $E$ is regular. [step 2.1, F2]

3.2 [$T'$ is self-adjoint] Let $y'\in D((T')^*)$, put $z:=U^{-1}y'\in H$, $w:=(T')^*y'\in K$ and $v:=U^{-1}w\in H$. For every $x\in D(T)$, $\langle Tx,z\rangle_H=\langle UTx,y'\rangle_K=\langle T'Ux,y'\rangle_K=\langle Ux,w\rangle_K=\langle x,v\rangle_H$ by the isometry of $U^{-1}$; hence the functional $x\mapsto\langle Tx,z\rangle_H$ is bounded on $(D(T),\|\cdot\|_H)$ by $\|v\|_H\|x\|_H$, so $z\in D(T^*)=D(T)$ and $Tz=v$ by [F4]. Therefore $y'=Uz\in U D(T)=D(T')$ and $(T')^*y'=w=Uv=UTz=T'y'$; thus $D((T')^*)\subseteq D(T')$, and with step 2.2 and [F4] the operator $T'$ is self-adjoint. [step 2.2, F4, F5]

4.1 [$E$ represents $T'$] Let $y\in D(T')$, that is $x:=U^{-1}y\in D(T)$. By [F1] applied to $T$ at $x$, $\int\lambda^2\,dE_{T,x}<\infty$ and $\int\lambda\,dE_T(\lambda)x=Tx$; by step 3.1 with $y=z$, $E_y=E_{T,x}$, so $\int\lambda^2\,dE_y<\infty$ and $\int\lambda\,dE_y=\int\lambda\,dE_{T,x}$. Conversely, if $\int\lambda^2\,dE_y<\infty$ for some $y\in K$, then step 3.1 gives $\int\lambda^2\,dE_{T,U^{-1}y}<\infty$, so $U^{-1}y\in D(T)$ by [F1] and $y\in U D(T)=D(T')$. Thus $D(T')=\{y\in K:\int\lambda^2\,dE_y(\lambda)<\infty\}$, the exact domain of the unbounded integral $S:=\int\lambda\,dE(\lambda)$ against the projection-valued measure $E$. For $y\in D(T')$ and every $z\in K$, $\langle Sy,z\rangle_K=\int\lambda\,dE_{y,z}(\lambda)=\int\lambda\,dE_{T,U^{-1}y,U^{-1}z}(\lambda)=\langle TU^{-1}y,U^{-1}z\rangle_H=\langle T'y,z\rangle_K$, the middle equality by [F1] applied to $T$ at $U^{-1}y\in D(T)$; since the pairings separate points of $K$, $Sy=T'y$. By the converse clause of [F1] applied to $S=T'$ and the regular projection-valued measure $E$, the measure $E$ is the spectral projection-valued measure of $T'$. [step 3.1, F1, F5]

4.2 [Clause (c)] For $x\in H$, $E(B)Ux=UE_T(B)U^{-1}Ux=UE_T(B)x$, so $\|E(B)Ux\|_K^2=\|E_T(B)x\|_H^2$ by the isometry of $U$; for unit $x$ this is the asserted identity of scalar laws, both sides being the values at $B$ of the positive measures $E_{Ux}$ and $E_{T,x}$ of [F2]. [step 2.1, step 3.1, F2, F5]

5.1 [Clause (d)] By [F3] applied to $T$, $\sigma(T)$ is the support of $E_T$; by step 4.1 the measure $E$ is the spectral projection-valued measure of $T'$, so [F3] applied to $T'$ shows that $\sigma(T')$ is the support of $E$. For every Borel $B$, $E(B)=0$ if and only if $E_T(B)=0$, because $U$ and $U^{-1}$ are bijective; hence $E$ and $E_T$ have the same null sets and the same nonempty relatively open subsets on which they fail to vanish, so their supports -- and therefore $\sigma(T')$ and $\sigma(T)$ -- coincide. [step 4.1, F3] ∎
