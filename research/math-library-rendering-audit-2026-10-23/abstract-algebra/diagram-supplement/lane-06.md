# Lane 06: split extension diagram review

**Item:** `thm-splitting-lemma-for-group-extensions`  
**Source:** bound snapshot `snapshots/thm-splitting-lemma-for-group-extensions.md` (SHA-256 matches assignment).  
**Visual evidence:** viewed both listed local screenshot tiles at original resolution. The statement and proof are legible; the receipt reports no KaTeX errors or diagram failures. No diagram is present.

## Map check

Exactness of $1\to N\xrightarrow{i}G\xrightarrow{\pi}H\to1$ identifies $N$ with $\ker\pi$ and makes $\pi$ surjective. If $s:H\to G$ is a homomorphic section, then it is injective because $\pi s=\mathrm{id}_H$. Its image $K=s(H)$ intersects $\ker\pi$ trivially, and

$$
g=\bigl(g s(\pi(g))^{-1}\bigr)s(\pi(g)),\qquad g s(\pi(g))^{-1}\in\ker\pi,
$$

so $G=(\ker\pi)K$. Conversely, for a complement $K$, the restriction $\pi|_K:K\to H$ is injective by the trivial intersection and surjective by $G=(\ker\pi)K$. Its inverse followed by $K\hookrightarrow G$ is a homomorphic section.

Using the identification $i:N\cong\ker\pi$, the section defines the action

$$
h\cdot n=s(h)n s(h)^{-1}.
$$

The decomposition map and inverse are

$$
\Phi:N\rtimes H\to G,\quad(n,h)\mapsto i(n)s(h),
\qquad
g\mapsto\bigl(i^{-1}(g s(\pi(g))^{-1}),\pi(g)\bigr).
$$

The first inverse coordinate is in $N$, since its image under $\pi$ is the identity. For the convention $(n,h)(n',h')=(n(h\cdot n'),hh')$, $\Phi$ is a homomorphism, and the two displayed maps are inverse. They carry the canonical factors to $i(N)=\ker\pi$ and $s(H)$, respectively.

## Editorial judgment

A diagram is a useful optional aid for this theorem because it can show the short exact sequence, the section, the complement it determines, and the two directions of the semidirect decomposition together. Label the injection $i:N\to G$, or state that $N$ is identified with $\ker\pi$, so the action and map domains remain clear. The current text is legible and the map conventions are standard; no mathematical defect is identified, and the missing diagram alone is not a defect.
