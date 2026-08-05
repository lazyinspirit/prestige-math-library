# Citation-precision audit — everything that cites `lem-filter-base-generates`

## The target, as it actually stands on disk

`items/lem-filter-base-generates.md` — lemma — The upward closure of a filter base is the smallest filter containing it

#### Statement

Let $X$ be a set and let $\mathcal{B}$ be a filter base on $X$
([[def-filter-base]]), with upward closure

$$\langle \mathcal{B} \rangle = \{\, A \subseteq X \;:\; B \subseteq A \text{ for some } B \in \mathcal{B} \,\}.$$

Then:

1. $\langle \mathcal{B} \rangle$ is a filter on $X$ ([[def-filter]]);
2. $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, and
   $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$ for every filter
   $\mathcal{F}$ on $X$ with $\mathcal{B} \subseteq \mathcal{F}$, so
   $\langle \mathcal{B} \rangle$ is the smallest filter on $X$ containing
   $\mathcal{B}$;
3. every filter $\mathcal{F}$ on $X$ is itself a filter base, and it generates
   itself: $\langle \mathcal{F} \rangle = \mathcal{F}$.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-tail-filter-of-a-net` (published-backward, page nets-and-filters)

Title: The tail filter of a net

- For a net $x:D\to X$, put $T_d=\{x_e:d\le e\}$ and $\mathcal B_x=\{T_d:d\in D\}$. This is a filter base: it is nonempty, each $T_d$ contains $x_d$, and if $f\ge d,e$ then $T_f\subseteq T_d\cap T_e$. Its generated filter [[lem-filter-base-generates]] is the **tail filter** of $x$:
